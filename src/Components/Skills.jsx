import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
const sliderData1 = [
  {
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/html-logo-6563588-5453024.png?f=webp",
    name: "HTML",
  },
  {
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/css-logo-6563485-5453030.png",
    name: "CSS",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
    name: "JS",
  },
  {
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/react-native-5562339-4642743.png",
    name: "React",
  },
  {
    image:
      "https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/505/265/square_480/chakra-lv1.png",
    name: "Chakra UI",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTyuFXQDDOUPdafq8kkiBQ1Ai-ovU_avXecDIkszkPTeOxZ5R8H8g99xl6vRfQH-w4BA&usqp=CAU",
    name: "Axios",
  },
  {
    image:
      "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
    name: "Redux",
  },
  {
    image:
      "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
    name: "Type-Script",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLq7oAaEf0OSnwEjISs6UZbZBkbkwIUV7Rw&usqp=CAU",
    name: "React Router",
  },
];
export default function Skills() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="160px" marginLeft="40px" zIndex={1}>
      <ChevronLeftIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="-70px" marginLeft="1460px">
      <ChevronRightIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <DIV id="skills">
      <h1>Skills</h1>
      <Slider {...settings}>
        {sliderData1.map((el, index) => {
          return (
            <div key={index} className="skills-card">
              <Box width={"100%"}>
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <Image
                    ml={"32%"}
                    w={"32%"}
                    borderRadius="18px"
                    src={el.image}
                  />
                  <Text fontSize={"1.7rem"}>{el.name}</Text>
                </AnimationOnScroll>
              </Box>
            </div>
          );
        })}
      </Slider>
      <hr />
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 20px;
  height: 50vh;
  h1 {
    font-size: 3rem;
  }
  .skills-card {
    margin-top: 25px;
  }
`;

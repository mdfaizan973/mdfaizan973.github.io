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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU",
    name: "Telwind CSS",
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
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Node.js",
  },
  {
    image:
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    name: "Express.js",
  },
  {
    image:
      "data:image/png;base64,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",
    name: "Mongo DB",
  },
];
export default function Skills() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="200px" marginLeft="40px" zIndex={1}>
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
                    className="skills-card-img"
                    src={el.image}
                  />
                  <Text fontSize={"1.7rem"} className="skills-card-name">
                    {el.name}
                  </Text>
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
  margin-top: 170px;
  height: 50vh;
  h1 {
    font-size: 3rem;
  }
  .skills-card {
    margin-top: 25px;
  }
`;
// 1
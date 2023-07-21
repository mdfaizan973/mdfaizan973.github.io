import { Card } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Carousal() {
  const sliderData1 = [
    {
      image:
        "https://cdn3d.iconscout.com/3d/free/thumb/html-logo-6563588-5453024.png?f=webp",
      name: "HTML",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255088314-35bd02cd-4771-4156-9409-5f5a4c74155a.png",
      name: "CSS",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255094159-1381596d-06ae-422b-9321-94903c9c6cb3.png",
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
        "https://user-images.githubusercontent.com/106812942/255088544-e2550044-1df8-440b-baf1-6dca2ba9165e.png",
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
        "https://user-images.githubusercontent.com/106812942/255086458-7f6be61d-ffe1-4096-af30-2a39e7b3ed6f.png",
      name: "Type-Script",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLq7oAaEf0OSnwEjISs6UZbZBkbkwIUV7Rw&usqp=CAU",
      name: "React Router",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255087494-28073997-96d4-48ce-9bb6-c46f9cbe48b9.png",
      name: "Node.js",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      name: "Express.js",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255086972-9cb90d62-a556-474f-920f-aba5a0e9684d.png",
      name: "Mongo DB",
    },
  ];
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={6}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={1000}
      >
        {sliderData1.map((e) => (
          <div>
            <img style={{ width: "40%" }} src={e.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

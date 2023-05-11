import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="600"
        margin="auto"
        textAlign="center"
        id="about"
        className="about section"
      >
        About me
      </Text>
      <Flex
        height={{ base: "95vh", md: "60vh", lg: "55vh" }}
        width="85%"
        margin="auto"
        id="about"
        flexDir={{ base: "column", md: "row", lg: "row" }}
      >
        <Box
          data-aos="fade-right"
          width={{ base: "100%", md: "50%", lg: "35%" }}
          marginTop={"30px"}
        >
          <Image
            className="home-img"
            margin="auto"
            border="2px solid grey"
            borderRadius="50%"
            src="https://media.licdn.com/dms/image/D4D03AQHtJGOsBvzWFg/profile-displayphoto-shrink_400_400/0/1683629918803?e=1689206400&v=beta&t=fosmzQMAjZmna-N1Cw5LvobbP7QAgusmwlsVK09kIUY"
          />
        </Box>
        <Box
          padding={{ base: "0px", md: "40px", lg: "50px" }}
          marginTop={{ base: "30px", md: "20px", lg: "30px" }}
          alignItems="center"
          alignContent="center"
          height="100%"
          width={{ base: "100%", md: "50%", lg: "65%" }}
          fontSize={"1.3rem"}
          data-aos="fade-left"
        >
          <Text id="user-detail-intro">
            A Full-Stack Web Developer specializing in MERN Stack with good
            proficiency in HTML, CSS, JS, ReactJS, Redux, NodeJS, ExpressJS,
            MongoDB, Data Structures and Algorithms. Has a Problem-Solving
            mindset and the ability to perform well in a team. Acquired 1200+
            hours of coding and hands-on experience in cloning websites. Looking
            forward to working as an accountable and competent professional in
            an exciting tech organization.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default About;
//about

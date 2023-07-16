import React from "react";
import styled from "styled-components";

import "animate.css/animate.min.css";
import AOS from "aos";
import {
  Button,
  Card,
  CardBody,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
export default function MiniPro() {
  let arr = [
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253805221-728fdb9e-b7e2-489c-9364-8cc527fd1a4e.png",
      name: "Cobra's Revenge",
      live: "https://snackf.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253805544-cd5ef2f3-2bf2-47b4-a157-6f85bc6645d6.png",
      name: "User Management System",
      live: "https://usermanagementsystemfaizan.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253805794-c060ad1d-6563-4ce2-a915-2bd9cf56be08.png",
      name: "Code Converter",
      live: "https://codeconvertermasai.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806168-de2fad04-379e-42cc-b0e0-4d3ec4cf28e3.png",
      name: "Weather App",
      live: "https://weatherapp-f.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806272-5d7d5bbd-aa04-4a2a-af09-2b140e2dfd12.png",
      name: "Movies list's",
      live: "https://mymovies-lists.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806382-dd9a140c-6e69-4cd6-b585-96a58564a035.png",
      name: "Js-Stop Watch",
      live: "https://fz-stopwatch.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806601-6360d5ec-d876-4c51-baca-c0c63ed0e1c2.png",
      name: "Masai Calculator",
      live: "https://masaiscalculator.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806740-3dda814f-562a-417d-a43a-0d7f24f0b521.png",
      name: "Masai-Bmi-Calculator",
      live: "https://masai-bmi-calculator.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253824925-49de4bc7-d3fd-4b5b-8065-cbb0dc8d541a.png",
      name: "Students DataBase",
      live: "https://students-data-base.netlify.app/",
      github: "",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/upcoming-banner-speech-bubble-sign-186711427.jpg",
      name: "Upcoming Projects",
      live: "",
      github: "",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "5px" }}
      >
        Mini Projects
      </h1>
      <SimpleGrid columns={[2, 3, 5]} spacing="40px">
        {arr.map((ele, i) => (
          <Card key={i} maxW="100%" className="animation" data-aos="zoom-out">
            <CardBody>
              <Image src={ele.image} alt={ele.name} borderRadius="lg" />
            </CardBody>
            <Text fontSize={"xl"}>{ele.name}</Text>
            <Divider />
            <HStack p={"5"} justifyContent={"center"}>
              <Button variant="solid">
                <a href={ele.live} rel="noreferrer" target="_blank">
                  Live
                </a>
              </Button>
            </HStack>
          </Card>
        ))}
      </SimpleGrid>
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 50px;
  width: 98%;
  margin: auto;
`;

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
      show: true,
      live: "https://snackf.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253805544-cd5ef2f3-2bf2-47b4-a157-6f85bc6645d6.png",
      name: "User Management System",
      show: true,
      live: "https://usermanagementsystemfaizan.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/258661323-f499ee3b-0535-433a-adf0-4b95e42dadd0.png",
      name: "Code Converter",
      show: true,
      live: "https://codeconvertermasai.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806168-de2fad04-379e-42cc-b0e0-4d3ec4cf28e3.png",
      name: "Weather App",
      show: true,
      live: "https://weatherapp-f.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806272-5d7d5bbd-aa04-4a2a-af09-2b140e2dfd12.png",
      name: "Movies list's",
      show: true,
      live: "https://mymovies-lists.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806382-dd9a140c-6e69-4cd6-b585-96a58564a035.png",
      name: "Js-Stop Watch",
      show: true,
      live: "https://fz-stopwatch.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806601-6360d5ec-d876-4c51-baca-c0c63ed0e1c2.png",
      name: "Masai Calculator",
      show: true,
      live: "https://masaiscalculator.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253806740-3dda814f-562a-417d-a43a-0d7f24f0b521.png",
      name: "Masai-Bmi-Calculator",
      show: true,
      live: "https://masai-bmi-calculator.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/253824925-49de4bc7-d3fd-4b5b-8065-cbb0dc8d541a.png",
      name: "Students DataBase",
      show: true,
      live: "https://students-data-base.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/258052863-da30cd4d-f1c3-4904-a271-e837cd112540.png",
      name: "Link Tree",
      show: true,
      live: "https://faizan973-link-tree.netlify.app/",
      github: "",
    },
    {
      image:
        "https://private-user-images.githubusercontent.com/106812942/260707645-34b83efe-f347-4409-80aa-d626acdcce14.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTIxMDI0MjMsIm5iZiI6MTY5MjEwMjEyMywicGF0aCI6Ii8xMDY4MTI5NDIvMjYwNzA3NjQ1LTM0YjgzZWZlLWYzNDctNDQwOS04MGFhLWQ2MjZhY2RjY2UxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwODE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDgxNVQxMjIyMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMDhkOTk5MmY0NWRmZDE3ZjY0YzEzZTQ2Zjk2YmIwM2U2MjNlNzdkZjRlZWQ4ZWJlNjQzZjQ2N2IxYjFkNTUwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.PHVxvaxZ7E7Q_81GXzrpRwFTHCysNP3dUl572UhLkTY",
      name: "Caraousal",
      show: true,
      live: "https://carausal-fz.netlify.app/",
      github: "",
    },
    {
      image:
        "https://private-user-images.githubusercontent.com/106812942/260707417-f80cfab8-49e5-4042-a0cf-e7266fbdb957.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTIxMDI0MjMsIm5iZiI6MTY5MjEwMjEyMywicGF0aCI6Ii8xMDY4MTI5NDIvMjYwNzA3NDE3LWY4MGNmYWI4LTQ5ZTUtNDA0Mi1hMGNmLWU3MjY2ZmJkYjk1Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwODE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDgxNVQxMjIyMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zOTUyYjY5NmViZWI0MzgzODllMjg0MDY5NTE4YzkyZjUwMmQ3MjM3NjE3MmNlY2NmMDdhZDhhYzJkNzhhOWIwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.z9sly5rYDYSaZLas62Tcyi0x-hlu0Ypy71rSfhuigq0",
      name: "Rnadom Image Generator",
      show: true,
      live: "https://random-image-generater.netlify.app/",
      github: "",
    },
    // {
    //   image: "",
    //   name: "",
    //   show: false,
    //   live: "",
    //   github: "",
    // },
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
              <Image
                className="img"
                src={ele.image}
                alt={ele.name}
                borderRadius="lg"
              />
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
  .img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

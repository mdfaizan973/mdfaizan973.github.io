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
    // {
    //   image:
    //     "https://user-images.githubusercontent.com/106812942/258661323-f499ee3b-0535-433a-adf0-4b95e42dadd0.png",
    //   name: "Code Converter",
    //   show: true,
    //   live: "https://codeconvertermasai.netlify.app/",
    //   github: "",
    // },
    {
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/106812942/265500903-014dd368-21f0-4c72-8686-ad70aa52d036.png",
      name: "Github User Search",
      show: true,
      live: "https://githubusersearchfz.netlify.app/",
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
    // {
    //   image:
    //     "https://user-images.githubusercontent.com/106812942/253806272-5d7d5bbd-aa04-4a2a-af09-2b140e2dfd12.png",
    //   name: "Movies list's",
    //   show: true,
    //   live: "https://mymovies-lists.netlify.app/",
    //   github: "",
    // },
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
      name: "Calculator",
      show: true,
      live: "https://masaiscalculator.netlify.app/",
      github: "",
    },
    {
      image:
        "https://private-user-images.githubusercontent.com/106812942/285748700-17cd8819-7f16-4a56-a4ea-61b9d0f8cb59.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEwNjg2NDUsIm5iZiI6MTcwMTA2ODM0NSwicGF0aCI6Ii8xMDY4MTI5NDIvMjg1NzQ4NzAwLTE3Y2Q4ODE5LTdmMTYtNGE1Ni1hNGVhLTYxYjlkMGY4Y2I1OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyN1QwNjU5MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNjBkNDNmNmNlNzEyZjQ5N2Y4MjQzZmM1OTJiYmM1NzU0MWEyNjJlZDcxNjM3YzM0MmNlMDE4NTJlMmUyNDk3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.HQb0I8-dydPhQvTsVaMAhrv1qWUvkRw8Tcd3WZb6RGc",
      name: "BMI Calculator",
      show: true,
      live: "https://bmicalculatorfz.vercel.app/",
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
    // {
    //   image:
    //     "https://user-images.githubusercontent.com/106812942/258052863-da30cd4d-f1c3-4904-a271-e837cd112540.png",
    //   name: "Link Tree",
    //   show: true,
    //   live: "https://faizan973-link-tree.netlify.app/",
    //   github: "",
    // },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/260710892-5311deb8-5020-42b8-8042-206387db0350.png",
      name: "Caraousal",
      show: true,
      live: "https://carausal-fz.netlify.app/",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/260710865-2a50a259-849e-4ad5-bb4b-9d1f739e3c5d.png",
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
  width: 95%;

  margin: auto;
  .img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

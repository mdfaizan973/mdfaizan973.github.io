import { Box, Button, HStack, Link, VStack } from "@chakra-ui/react";
import React from "react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";

import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
export default function Contacts() {
  return (
    <div id="contact" style={{ textAlign: "center" }}>
      <h1 className="proj-title" style={{ fontSize: "3rem", marginTop: "5px" }}>
        Contacts
      </h1>

      {/* <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "20px ",
        }}
      >
        <img
          style={{ width: "4%" }}
          src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/linkedin.png?raw=true"
        ></img>
        <img
          style={{ width: "4%" }}
          src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/twitter.png?raw=true"
        />
      </div> */}

      <Box
        py={{ base: 5, sm: 5, md: 8, lg: 10 }}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <VStack
          pl={0}
          spacing={3}
          alignItems="flex-start"
          textAlign={"center"}
          justifyContent={"center"}
        >
          <Button
            size="md"
            id="contact-phone"
            height="48px"
            variant="ghost"
            // color="#DCE2FF"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdPhone color="#1970F1" size="20px" />}
          >
            +91-6201855200
          </Button>
          <Button
            size="md"
            height="48px"
            variant="ghost"
            // color="#DCE2FF"
            id="contact-email"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdEmail color="#1970F1" size="20px" />}
          >
            faizan.md9735@gmail.com
          </Button>
          <Button
            size="md"
            height="48px"
            variant="ghost"
            // color="#DCE2FF"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
          >
            Jharkhand, India
          </Button>
        </VStack>
        <HStack
          mt={{ lg: 10, md: 10 }}
          spacing={5}
          px={5}
          alignItems="flex-start"
        >
          <Link
            id="contact-linkedin"
            href="https://www.linkedin.com/in/md-faizan-380a65246/"
            isExternal
          >
            <ImLinkedin fontSize={"1.6rem"} />
          </Link>
          <Link
            id="contact-github"
            href="https://github.com/mdfaizan973"
            isExternal
          >
            <FaGithub fontSize={"1.6rem"} />
          </Link>
          <Link
            id="contact-email"
            href="https://faizan.md9735@gmail.com"
            isExternal
          >
            <HiOutlineMail fontSize={"1.6rem"} />
          </Link>
        </HStack>
      </Box>
    </div>
  );
}

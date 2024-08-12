import styled from "@emotion/styled";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { RiProjector2Fill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
export default function LinkContainer() {
  const linksIcon = [
    {
      icons: <FaUserAstronaut />,
      links: "",
      text: "",
    },
    {
      icons: <FaFileAlt />,
      links: "",
      text: "",
    },
    {
      icons: <FaGithub />,
      links: "",
      text: "",
    },
    {
      icons: <GiSkills />,
      links: "",
      text: "",
    },
    {
      icons: <RiProjector2Fill />,
      links: "",
      text: "",
    },
    {
      icons: <MdContactPhone />,
      links: "",
      text: "",
    },
  ];
  return (
    <MainLinkContainer>
      <div className="inner_container">
        {linksIcon.map((ele, i) => (
          <LinkContainerStyled key={i}>{ele.icons}</LinkContainerStyled>
        ))}
      </div>
    </MainLinkContainer>
  );
}

const MainLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .inner_container {
    padding: 10px;
    width: 80%;
    margin: auto;
  }
`;
const LinkContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  height: 75px;
  margin: auto;
  border-radius: 10px;
  font-size: 1.5rem;
  margin-top: 10px;
  cursor: pointer;
`;

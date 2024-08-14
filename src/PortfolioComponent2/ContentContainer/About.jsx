import styled from "@emotion/styled";
import React from "react";

export default function About() {
  return (
    <div>
      <HeaderSection title={"About"} />
    </div>
  );
}

const HeaderSection = ({ title }) => {
  return (
    <HeaderDivStyled>
      <h1 className="header_title">{title}</h1>
      <div className="header_line"></div>
    </HeaderDivStyled>
  );
};

const HeaderDivStyled = styled.div`
  border: 1px solid black;
  /* text-align: left; */
  padding: 0.5em;
  display: flex;
  align-items: center;
  .header_line {
    width: 60%;
    height: 5px;
    background-color: blue;
  }
`;

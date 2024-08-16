import React from "react";
import HeaderSection from "../Helper/HeaderSection";
import styled from "@emotion/styled";

export default function About() {
  return (
    <AboutContainerStyled id="About">
      <HeaderSection title={"About"} />

      <div className="about_content">
        <p>
          A Full-Stack Web Developer specializing in MERN Stack with good
          proficiency in HTML, CSS, JS, ReactJS, Redux, NodeJS, ExpressJS,
          MongoDB, Data Structures and Algorithms. Has a Problem-Solving mindset
          and the ability to perform well in a team.
        </p>
        <br />
        <p>
          Acquired 1200+ hours of coding and hands-on experience in cloning
          websites. Looking forward to working as an accountable and competent
          professional in an exciting tech organization.
        </p>
      </div>
    </AboutContainerStyled>
  );
}

const AboutContainerStyled = styled.div`
  .about_content {
    text-align: start;
    color: #75797c;
    font-size: 1.05rem;
  }
`;

import React, { useEffect, useRef } from "react";
import HeaderSection from "../Helper/HeaderSection";
import styled from "@emotion/styled";
// import Typed from "typed.js";

export default function About() {
  // const typedElementRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     strings: ["Student", "Programmer", "Developer"],
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 1000,
  //     loop: true,
  //   };

  //   const typed = new Typed(typedElementRef.current, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <AboutContainerStyled id="About">
      <HeaderSection title={"About"} />

      <div className="about_content">
        {/* <div
          className="multiple-text"
          ref={typedElementRef}
        ></div> */}
        <p>
          A Full-Stack Web Developer specializing in the MERN Stack, with
          expertise in HTML, CSS, JavaScript, React, Node.js, and MongoDB. Over
          the past 7 months, I’ve been working full-time as a developer, gaining
          hands-on experience and building real-world projects.
        </p>
        <br />
        <p>
          With a problem-solving mindset and strong collaboration skills, I’m
          continuously improving and excited to keep growing as a competent
          professional in a dynamic tech environment.
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

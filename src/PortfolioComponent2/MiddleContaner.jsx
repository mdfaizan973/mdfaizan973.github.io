import React from "react";
import About from "./ContentContainer/About";
import Skills from "./ContentContainer/SkillsFolder/Skills";

export default function MiddleContaner() {
  return (
    <div
      style={{
        width: "90%",
        margin: "30px auto",
      }}
    >
      <About />
      <Skills />
    </div>
  );
}

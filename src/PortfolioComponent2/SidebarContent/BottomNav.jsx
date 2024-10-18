import React from "react";
import styled from "@emotion/styled";
import { linksIcon } from "../LinkContainer";

export default function BottomNav() {
  return (
    <NavContainer>
      {linksIcon &&
        linksIcon.map((ele, i) => (
          <LinkContainerDIV
            background={ele.background}
            title={ele.text}
            key={i}
          >
            <a href={`#${ele.id}`}>{ele.icons}</a>
          </LinkContainerDIV>
        ))}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  z-index: 1000;
  border-radius: 20px 20px 0 0;
`;

const LinkContainerDIV = styled.div(({ background }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "66% 34% 41% 59% / 55% 38% 62% 45%",
  background: "#daf7f1",
  height: "40px",
  width: "40px",
}));

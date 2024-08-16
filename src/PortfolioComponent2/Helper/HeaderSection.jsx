import styled from "@emotion/styled";
import React from "react";

export default function HeaderSection({ title }) {
  return (
    <HeaderDivStyled>
      <div className="title_container">
        <h1 className="header_title">{title}</h1>
        <div className="header_line"></div>
      </div>
    </HeaderDivStyled>
  );
}

const HeaderDivStyled = styled.div`
  padding: 0.5em;
  text-align: start;
  .title_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55%;
  }
  .header_title {
    font-size: 2.5rem;
  }
  .header_line {
    width: 60%;
    height: 4px;
    background-color: #daf7f1;
  }
`;

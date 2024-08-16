import React from "react";
import Sidebar from "../PortfolioComponent2/Sidebar";
import styled from "@emotion/styled";
import MiddleContaner from "../PortfolioComponent2/MiddleContaner";
import LinkContainer from "../PortfolioComponent2/LinkContainer";

export default function PortfolioVersion2() {
  return (
    <div>
      <Hamburger>
        <div className="hamburger">##</div>
      </Hamburger>

      <MainPortfolioTwoContainer>
        <div className="sidebarcontainer">
          <Sidebar />
        </div>
        <div className="maincontainer">
          <MiddleContaner />
        </div>
        <div className="linkcontainer">
          <LinkContainer />
        </div>
      </MainPortfolioTwoContainer>
    </div>
  );
}

const MainPortfolioTwoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 90%;
  margin: 100px auto;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif !important;
  /* font-family: cursive; */

  .sidebarcontainer {
    width: 20%;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    height: 100vh;
    position: fixed;
    left: 5%;
    background-color: white;
    border-radius: 20px;
  }

  .maincontainer {
    width: 60%;
    height: 900px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    margin-left: 27%;
    overflow-y: auto;
    background-color: white;
    border-radius: 20px;
  }

  .linkcontainer {
    width: 8%;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    height: 35rem;
    position: fixed;
    right: 5%;
    background-color: white;
    border-radius: 20px;
  }

  @media (min-width: 100px) and (max-width: 900px) {
    .sidebarcontainer {
      display: none !important;
    }
    .maincontainer {
      width: 100%;
      margin-left: 0%;
    }
    .linkcontainer {
      display: none !important;
    }
  }
`;

const Hamburger = styled.div`
  display: none !important;
  text-align: right;
  position: relative;

  @media (min-width: 100px) and (max-width: 900px) {
    display: block !important;
    .hamburger {
      position: absolute;
      top: 0%;
      right: 5%;
      border: 1px solid green;
    }
  }
`;

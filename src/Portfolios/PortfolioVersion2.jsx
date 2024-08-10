import React from "react";
import Sidebar from "../PortfolioComponent2/Sidebar";
import styled from "@emotion/styled";
import MiddleContaner from "../PortfolioComponent2/MiddleContaner";
import LinkContainer from "../PortfolioComponent2/LinkContainer";

export default function PortfolioVersion2() {
  return (
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
    height: 35rem;
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
`;

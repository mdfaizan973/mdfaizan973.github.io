import styled from "@emotion/styled";
import React, { useState } from "react";
import HeaderSection from "../../Helper/HeaderSection";
import TabSelection from "../../Helper/TabSelection";
import BigProject from "./BigProject";
import MiniProject from "./MiniProject";
import {
  TabComponentStyled,
  TabsContainerStyled,
} from "../SkillsFolder/Skills";

export default function Projects() {
  const projectComponent = [
    { tabName: "Projects", componet: <BigProject /> },
    { tabName: "Mini Projects", componet: <MiniProject /> },
  ];

  const [selectedTab, setSelectedTab] = useState(projectComponent[0]);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <ProjectContainerStyled id="Projects">
      <HeaderSection title={"Projects"} />
      <TabsContainerStyled>
        {projectComponent &&
          projectComponent.map((ele, i) => (
            <TabSelection
              allTabs={ele}
              key={i}
              onTabCLick={() => handleTabClick(ele)}
            />
          ))}
      </TabsContainerStyled>

      <TabComponentStyled>{selectedTab.componet}</TabComponentStyled>
    </ProjectContainerStyled>
  );
}

const ProjectContainerStyled = styled.div`
  margin-top: 10px;
`;

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import styled from "@emotion/styled";
import SingleData from "./SingleData";

export default function BigProject() {
  const [showDetails, setShowDetails] = useState(false);
  const [modalData, setModalData] = useState({});

  const projects = [
    {
      title: "Project 1",
      description: "This is the description for project 1.",
      techStack: [
        { name: "React", color: "black" },
        { name: "Node.js", color: "black" },
        { name: "MongoDB", color: "black" },
      ],
      backgroundImage: "../../../../public/organicstore.png",
      backgroundColor: "red",
    },
    {
      title: "Project 2",
      description: "This is the description for project 2.",
      techStack: [
        { name: "Vue", color: "black" },
        { name: "Express", color: "black" },
        { name: "PostgreSQL", color: "black" },
      ],
      backgroundImage: "https://example.com/background2.jpg",
      backgroundColor: "blue",
    },
    {
      title: "Project 3",
      description: "This is the description for project 1.",
      techStack: [
        { name: "React", color: "black" },
        { name: "Node.js", color: "black" },
        { name: "MongoDB", color: "black" },
      ],
      backgroundImage: "https://example.com/background1.jpg",
      backgroundColor: "red",
    },
    {
      title: "Project 4",
      description: "This is the description for project 1.",
      techStack: [
        { name: "React", color: "black" },
        { name: "Node.js", color: "black" },
        { name: "MongoDB", color: "black" },
      ],
      backgroundImage: "https://example.com/background1.jpg",
      backgroundColor: "red",
    },
  ];

  const handleDetails = (ele = "") => {
    setModalData(ele);
    setShowDetails(true);
  };

  const handleCancel = () => {
    setShowDetails(false);
  };
  return (
    <>
      {showDetails ? (
        <div>
          <SingleData handleCancel={handleCancel} singleData={modalData} />
        </div>
      ) : (
        <BigProjectContainer>
          {projects.map((ele, i) => (
            <ProjectCard
              key={i}
              title={ele.title}
              description={ele.description}
              techStack={ele.techStack}
              backgroundColor={ele.backgroundColor}
              handleDetails={handleDetails}
              ele={ele}
            />
          ))}
        </BigProjectContainer>
      )}
    </>
  );
}

const BigProjectContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

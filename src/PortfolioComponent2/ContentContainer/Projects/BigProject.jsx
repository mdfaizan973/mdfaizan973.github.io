import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import styled from "@emotion/styled";
import SingleData from "./SingleData";

export default function BigProject() {
  const [showDetails, setShowDetails] = useState(false);
  const [modalData, setModalData] = useState({});

  const projects = [
    {
      title: "Organic Store",
      description:
        "An Organic Products website, Where person can buy all the Organics Food products.",
      techStack: [
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JS" },
        { name: "Tailwind CSS" },
        { name: "Axios" },
      ],
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      githubURL: "https://github.com/mdfaizan973/ZC_ORG",
      liveURL: "https://organicstore.vercel.app/",
      madeBy: "Individuel - Project",
    },

    {
      title: "Learning Management System",
      description:
        "Learning Management System (LMS): A platform for students to learn programming.",
      techStack: [
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JS" },
        { name: "Ant Design(CSS)" },
        { name: "Node JS" },
        { name: "Express JS" },
        { name: "Mongo DB" },
      ],
      backgroundImage:
        "https://github.com/mdfaizan973/EduHub-idea_clan/assets/106812942/ccee7c0f-1acd-4791-8208-b09b973f5cb1",
      githubURL: "https://github.com/mdfaizan973/EduHub-idea_clan",
      liveURL: "https://faizanlms.vercel.app/",
      madeBy: "Individuel - Project",
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
            <ProjectCard key={i} handleDetails={handleDetails} ele={ele} />
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

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
        { name: "Node JS" },
        { name: "CSS" },
        { name: "JS" },
        { name: "Ant Design(CSS)" },
        { name: "Express JS" },
        { name: "Mongo DB" },
      ],
      backgroundImage:
        "https://github.com/mdfaizan973/EduHub-idea_clan/assets/106812942/ccee7c0f-1acd-4791-8208-b09b973f5cb1",
      githubURL: "https://github.com/mdfaizan973/EduHub-idea_clan",
      liveURL: "https://faizanlms.vercel.app/",
      madeBy: "Individuel - Project",
    },

    {
      title: "Fc Food",
      description:
        "An experience Fc Food: Your gateway to gourmet pizzas, juicy burgers, exotic biryanis, and more. Delight in every bite!",
      techStack: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Bootstrap" },
      ],
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/260703096-29803c53-ca47-4921-84de-97235c984ff6.png",
      githubURL: "https://github.com/mdfaizan973/Food_Website",
      liveURL: "https://food-fz.netlify.app/",
      madeBy: "Individuel - Project",
    },

    // {
    //   title: "FashionZone",
    //   description:
    //     "FashionZone is a website where a person can buy clothes of their choice with famous brands.",
    //   techStack: [
    //     { name: "React" },
    //     { name: "Axios" },
    //     { name: "React-Router-Dom" },
    //   ],
    //   backgroundImage:
    //     "https://user-images.githubusercontent.com/106812942/262247221-6b79b2f0-da86-4fcb-b4f7-8abe6439712e.png",
    //   githubURL: "https://github.com/mdfaizan973/FashioZone/",
    //   liveURL: "https://myfashionzonefz.netlify.app/",
    //   madeBy: "Individuel - Project",
    // },

    {
      title: "Clotho",
      description:
        "A clothes website where users can buy dresses for men, women, and kids.",
      techStack: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "Redux" },
        { name: "React-Router-Dom" },
        { name: "Axios" },
        { name: "Express.js" },
      ],
      backgroundImage:
        "https://github.com/mdfaizan973/mdfaizan973/assets/106812942/4eac3e09-97c4-4145-9cff-ce4c4ea5c93f",
      githubURL:
        "https://github.com/hrithikvishwakarma001/incredible-birth-7157",
      liveURL: "https://clotho.vercel.app/",
      madeBy: "Group - Project",
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

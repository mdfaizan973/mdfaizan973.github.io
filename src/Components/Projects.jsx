import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Button, Card, Heading } from "@chakra-ui/react";
import styled from "styled-components";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  let projectsarr = [
    {
      anim: "flip-right",
      image:
        "https://user-images.githubusercontent.com/106812942/215109393-cfcfb68a-7de0-4554-9380-7d3b65e4f9b6.png",
      name: "Skin-Care",
      dis: "An E-commerce websilt,Where user can buy skin related products.--",
      pro: "Individuel - Project",
      tstack: "HTML,CSS,JS",
      github: "https://github.com/mdfaizan973/SkinCare_Clone",
      link: "https://my-skincares.netlify.app/",
    },
    {
      anim: "flip-right",
      image:
        "https://user-images.githubusercontent.com/106812942/214018158-224d47c0-2f3e-4a72-bc00-53ea918e6fdf.png",
      name: "Fz-Shoes",
      dis: "An ecommerce websilt,Where user can buy all the products related to shoes.--",
      pro: "Individuel - Project",
      tstack: "React,Axios,Json-Server,React-Router-Dom",
      github:
        "https://github.com/mdfaizan973/thoughtless-scarecrow-7735/tree/main/T-S-7735/fz_shoes",
      link: "https://fzshoes.netlify.app/",
    },
    {
      anim: "zoom-out",
      image:
        "https://user-images.githubusercontent.com/106812942/221214462-36c35e3a-f00e-4c5f-a874-aadc6a6503d2.png",
      name: "Sweets-Flowers",
      dis: "An E-commerce website, Where user can buy flowers, chocolates and beautiful gifts for burthdays or party.--",
      pro: "Individuel - Project",
      tstack: "React,Axios,Json-Server,React-Router-Dom",
      github: "https://github.com/mdfaizan973/interesting-vase-9902",
      link: "https://spectacular-mandazi-b54fe5.netlify.app/",
    },
    {
      anim: "zoom-in",
      image:
        "https://user-images.githubusercontent.com/106812942/218271324-c3071ba5-560d-4029-bcfe-9263fb982e5d.png",
      name: "Furniture-Stock",
      dis: " An E-commerce website, Where user can buy home or furniture related products.--",
      pro: "Group - Project",
      tstack: "HTML,CSS,JS,Json,Server",
      github: "https://github.com/deepakChourasiya-aj/amiable-place-6800",
      link: "https://sensational-druid-3f736c.netlify.app/",
    },
    {
      anim: "flip-left",
      image:
        "https://user-images.githubusercontent.com/106812942/229482067-fc289bf3-4d15-478c-81ea-aebd54b5950e.jpg",
      name: "SmileKart",
      dis: "An ecommerce websilt,Where user can buy all the A to Z products.--",
      pro: "Group - Project",
      tstack: "React,Axios,Json-Server,React-Router-Dom,Redux",
      github: "https://github.com/narender24681/innate-partner-2755",
      link: "https://incandescent-cassata-f56374.netlify.app/",
    },
    {
      anim: "zoom-out",
      image:
        "https://github.com/mdfaizan973/mdfaizan973/assets/106812942/4eac3e09-97c4-4145-9cff-ce4c4ea5c93f",
      name: "Clotho",
      dis: "A Clothes websilt,Where user can buy dresses for mens, womens and kids.--",
      pro: "Group - Project",
      tstack: "React,Axios,React-Router-Dom,Redux,Node.js,MongooDB",
      github: "https://github.com/hrithikvishwakarma001/incredible-birth-7157",
      link: "https://clotho.vercel.app/",
    },
    {
      anim: "flip-right",
      image:
        "https://github.com/mdfaizan973/mdfaizan973/assets/106812942/a3f0797e-71b4-4d55-a9f0-a48d058e1ddc",
      name: "FitnessFuel",
      dis: "A Fitness websilt,Where person can know about body health and fix his own daily routine.--",
      pro: "Group - Project",
      tstack: "React,Axios,React-Router-Dom,Redux,Node.js,MongooDB,Telwind CSS",
      github: "https://github.com/VivekTomar03/FitnessFuel",
      link: "https://mdfaizan973.github.io/",
    },
  ];

  return (
    <DIV className="top" id="projects">
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "5px" }}
      >
        PROJECTS
      </h1>

      <div>
        {projectsarr.map((ele, i) => (
          <div className="animation project-card" data-aos={ele.anim}>
            <div className="pro-img">
              <img src={ele.image} />
            </div>
            <div className="pro-dis">
              <h1 className="title-pro project-title">{ele.name}</h1>
              <h1 className="project-description">
                {ele.dis}
                <span style={{ fontSize: "1rem", color: "teal" }}>
                  {ele.pro}
                </span>
              </h1>

              <h2
                style={{ fontSize: "1rem", color: "red" }}
                className="project-tech-stack"
              >
                {ele.tstack}
              </h2>
              <div className="dep-btn">
                <Button>
                  <a
                    className="project-github-link"
                    href={ele.github}
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
                <Button>
                  <a
                    className="project-deployed-link"
                    href={ele.link}
                    target="_blank"
                  >
                    Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 50px;
  .animation {
    width: 50%;
    height: 100%;
    margin: 10px auto;
    box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 2px 1px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    display: flex;
    align-items: center;
    padding: 20px;
  }
  /* .animation:hover {
    width: 55%;
    border-radius: 20px;
  } */
  .proj-title {
    font-size: 3rem;
    margin: 5px 0;
  }
  .title-pro {
    font-size: 1.6rem;
  }
  .animation div {
    width: 50%;
  }
  .pro-dis {
    text-align: center;
    justify-content: center;
    line-height: 1.6;
    font-size: 1.1rem;
  }
  .dep-btn {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 10px auto;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    .animation {
      display: flex;
      flex-direction: column;
      padding: 0 !important;
      width: 100%;
    }
    .proj-title {
      /* font-size: 1rem; */
      /* margin: 5px 0; */
    }
    .title-pro {
      font-size: 1rem;
    }
    .pro-img {
      width: 100%;
    }
    .pro-img img {
      width: 100%;
    }
    .animation:hover {
      width: 100%;
      border-radius: 20px;
    }
    .pro-dis {
      line-height: 1.2;
      font-size: 0.7rem;
    }
  }
`;
// {
//   anim: "",
//   image: "",
//   name: "",
//   dis: "",
//   pro: "",
//   tstack: "",
//   github: "",
//   link: "",
// },

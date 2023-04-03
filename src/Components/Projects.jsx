import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Button, Heading } from "@chakra-ui/react";
import styled from "styled-components";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <DIV className="top" id="projects">
      <h1 className="proj-title">PROJECTS</h1>

      <div className="project-tech-stack">
        <div className="animation" data-aos="flip-right">
          <div className="pro-img">
            <img src="https://user-images.githubusercontent.com/106812942/215109393-cfcfb68a-7de0-4554-9380-7d3b65e4f9b6.png" />
          </div>
          <div className="pro-dis">
            <h1 className="title-pro">Skin-Care</h1>
            <h1>
              An E-commerce websilt,Where user can buy skin related products.
            </h1>
            <div className="dep-btn">
              <Button>
                <a
                  href="https://github.com/mdfaizan973/SkinCare_Clone"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button>
                <a href="https://my-skincares.netlify.app/" target="_blank">
                  Live
                </a>
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className="animation" data-aos="flip-left">
          <div className="pro-img">
            <img src="https://user-images.githubusercontent.com/106812942/214018158-224d47c0-2f3e-4a72-bc00-53ea918e6fdf.png" />
          </div>
          <div className="pro-dis">
            <h1 className="title-pro">Fz-Shoes</h1>
            <h1>
              An ecommerce websilt,Where user can buy all the products related
              to shoes.
            </h1>
            <div className="dep-btn">
              <Button>
                <a
                  href="https://github.com/mdfaizan973/thoughtless-scarecrow-7735"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button>
                <a href="https://fzshoes.netlify.app/" target="_blank">
                  Live
                </a>
              </Button>
            </div>
          </div>
        </div>
        <br />

        <div className="animation" data-aos="zoom-out">
          <div className="pro-img">
            <img src="https://user-images.githubusercontent.com/106812942/221214462-36c35e3a-f00e-4c5f-a874-aadc6a6503d2.png" />
          </div>
          <div className="pro-dis">
            <h1 className="title-pro">Sweets-Flowers</h1>
            <h1>
              An E-commerce website, Where user can buy flowers, chocolates and
              beautiful gifts for burthdays or party.
            </h1>
            <div className="dep-btn">
              <Button>
                <a
                  href="https://github.com/mdfaizan973/interesting-vase-9902"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button>
                <a
                  href="https://spectacular-mandazi-b54fe5.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
              </Button>
            </div>
          </div>
        </div>
        <br />

        <div className="animation" data-aos="zoom-in">
          <div className="pro-img">
            <img src="https://user-images.githubusercontent.com/106812942/218271324-c3071ba5-560d-4029-bcfe-9263fb982e5d.png" />
          </div>
          <div className="pro-dis">
            <h1 className="title-pro">Furniture-Stock</h1>
            <h1>
              An E-commerce website, Where user can buy home or furniture
              related products.
            </h1>
            <div className="dep-btn">
              <Button>
                <a
                  href="https://github.com/deepakChourasiya-aj/amiable-place-6800"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button>
                <a
                  href="https://sensational-druid-3f736c.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
              </Button>
            </div>
          </div>
        </div>

        <br />
        <div className="animation" data-aos="flip-left">
          <div className="pro-img">
            <img src="https://user-images.githubusercontent.com/106812942/229482067-fc289bf3-4d15-478c-81ea-aebd54b5950e.jpg" />
          </div>
          <div className="pro-dis">
            <h1 className="title-pro">SmileKart</h1>
            <h1>
              An ecommerce websilt,Where user can buy all the A to Z products.
            </h1>
            <div className="dep-btn">
              <Button>
                <a
                  href="https://github.com/narender24681/innate-partner-2755"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button>
                <a
                  href="https://incandescent-cassata-f56374.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
              </Button>
            </div>
          </div>
        </div>
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
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
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

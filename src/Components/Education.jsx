import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Edu.css";
import { Card } from "@chakra-ui/react";
export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "15px" }}
      >
        EDUCATION
      </h1>
      <div class="timeline">
        <div class="container left">
          <Card>
            <Card>
              <div class="content" data-aos="flip-up">
                <h2>BCA (Bachelor of Computer Application) </h2>
                <h3>Binod Bihari Mahto Koyalanchal University</h3>
                <p>August 2023 - Present</p>
              </div>
            </Card>
          </Card>
        </div>
        <div class="container right">
          <Card s>
            <div class="content" data-aos="flip-down">
              <h2>Full Stack Web Developement</h2>
              <h3>Masai School</h3>
              <p>August 2022 - July 2023</p>
            </div>
          </Card>
        </div>
        <div class="container left">
          <Card>
            <Card>
              <div class="content" data-aos="flip-up">
                <h2>Intermediate</h2>
                <h3>High School Gomia</h3>
                <p>June 2020 - July 2022</p>
              </div>
            </Card>
          </Card>
        </div>
        <div class="container right">
          <Card>
            <Card>
              <div class="content" data-aos="flip-down">
                <h2>Matriculation</h2>
                <h3>Loyola School Gomia</h3>
                <p>April 2010 - May 2020</p>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}

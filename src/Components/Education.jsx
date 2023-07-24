import React from "react";
import "./Edu.css";
import { Card } from "@chakra-ui/react";
export default function Education() {
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
            <div class="content">
              <h2>Full Stack Web Developement</h2>
              <h3>Masai School</h3>
              <p>August 2022 - July 2023</p>
            </div>
          </Card>
        </div>
        <div class="container right">
          <Card>
            <Card>
              <div class="content">
                <h2>Intermediate</h2>
                <h3>High School Gomia</h3>
                <p>June 2020 - July 2022</p>
              </div>
            </Card>
          </Card>
        </div>
        <div class="container left">
          <Card>
            <Card>
              <div class="content">
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

import * as React from "react";
import styled from "styled-components";
import { Card } from "../../../Compo/Card";
import { projects } from "./data";

export class Projects extends React.Component {
  render() {
    return (
      <ProjectWrap>
        <Heading>Projects</Heading>
        {projects.map((data, index) => (
          <Card key={index} cardData={data} />
        ))}
      </ProjectWrap>
    );
  }
}

const ProjectWrap = styled.div`
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

const Heading =styled.div``
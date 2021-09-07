import * as React from "react";
import styled from "styled-components";
import { Card } from "../../../Compo/Card";
import { projects } from "./data";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { SkillsData } from "../../../store/type";
import { useDispatch, useSelector } from "react-redux";
import { getSkills, setLoading } from "../../../store/actions/skillsActions";
import { RootState } from "../../../store";

export const Hobbies: React.FC =() => {
  const dispatch = useDispatch();
  const skillsdata = useSelector((state: RootState) => state.skills.data);
  console.log("skillsdata--------->",skillsdata);

  React.useEffect(() => {
    dispatch(setLoading())
    dispatch(getSkills());
  }, [dispatch]);

  return (
      <ProjectWrap>
        <Heading><p>Hi, my name is Manushree Gowtham and I'm a senior software
            Developer. Welcome to my personal website..! Displaying below the projects i worked and skills</p></Heading>
         <Tabs>
    <TabList>
      <Tab>Photography</Tab>
      <Tab>Travelling</Tab>
      <Tab>Movies/Series</Tab>
    </TabList>
    <TabPanel>
    {projects.map((data, index) => (
          <Card key={index} cardData={data} background={"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgb(68 117 19 / 73%))"} />
        ))}
      
    </TabPanel>
    <TabPanel>
      {
        skillsdata && skillsdata.map((skill, index) => (
            <Card key={index} skillsData={skill} background={"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgb(68 117 19 / 73%))"} />
        ))
      }
    </TabPanel>
  </Tabs>
      </ProjectWrap>
    );
}

const ProjectWrap = styled.div`
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

const Heading =styled.div`
  font-size: 20px;    
  padding:30px;
  margin:0 auto;
`
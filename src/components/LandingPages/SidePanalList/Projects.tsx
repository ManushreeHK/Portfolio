import * as React from "react";
import styled from "styled-components";
import { Card } from "../../../Compo/Card";
import { projects } from "./data";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { SkillsData } from "../../../store/type";
import { useDispatch, useSelector } from "react-redux";
import { getSkills, setLoading } from "../../../store/actions/skillsActions";
import { RootState } from "../../../store";
import { useState } from "react";
import Modal from 'react-modal';
import developerimage from './developerimage.jpg';


export interface ProjectData {
  title: string,
  description: string,
  client?: string,
  year?: string
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    height: '60%'
  }
};


export const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const skillsdata = useSelector((state: RootState) => state.skills.data);
  console.log("skillsdata--------->", skillsdata);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeProjectData, setactiveProjectData] = React.useState<Partial<ProjectData>>({});
  const [tabIndex, setTabIndex] = useState(0);
  console.log("gettabindex",tabIndex);

  React.useEffect(() => {
    dispatch(setLoading());
    dispatch(getSkills());
  }, [dispatch]);

  const openModal = (data:ProjectData) => {
    setIsOpen(true)
    console.log("moreinfoClicked",modalIsOpen);
    console.log("data===========",data.title)
    const Projectdata = data;
    setactiveProjectData(Projectdata);
    console.log("activeProjectData",activeProjectData);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <ProjectWrap>
      <Heading>
        <Summary>
          <h2>
            hello!!
            </h2>
          <p>I have 3+ years of experience in IT industry as fullstack developer . This page is to explore my projects and expertise skills</p>
        </Summary>
        <CoverPic src ={developerimage}/>
      </Heading>
      <Tabs selectedTabClassName="activetab" className="tabStyle">
        <TabList>
          <Tab>Projects</Tab>
          <Tab>Skills</Tab>
        </TabList>
        <TabPanel>
          {projects.map((data, index) => (
            <Card
              key={index}
              cardData={data}
              background={
                "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgb(68 117 19 / 73%))"
              }
              moreInfoClicked={openModal}
            />
          ))}
        </TabPanel>
        <TabPanel>
          {skillsdata &&
            skillsdata.map((skill, index) => (
              <Card
                key={index}
                skillsData={skill}
                background={
                  "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgb(68 117 19 / 73%))"
                }
              />
            ))}
        </TabPanel>
      </Tabs>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
      <Close onClick={closeModal}>X</Close>
        <Title><h2>Title:</h2> <span>{activeProjectData.title}</span></Title>
        <Description><h2>Description:</h2> <p>{activeProjectData.description}</p></Description>
        <Client><h2>Client:</h2>{activeProjectData.client}</Client>
        <Duration><h2>Duration:</h2>{activeProjectData.year}</Duration>
      </Modal>
    </ProjectWrap>
  );
};

const ProjectWrap = styled.div`
max-width: 960px;
margin-left: auto;
margin-right: auto;
  padding: 20px;
  font-size: 30px;
  text-align: center;
  .activetab {
    border-bottom: 4px solid green;
    color: green;
  }
  .tabStyle{
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Heading = styled.div`
  font-size: 20px;
  padding: 30px;
  display: flex;
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 992px) {
  display: block;
}
  >p {
    padding: 30px;
  }
`;
const CustomTabList = styled(TabList)`
`;
const CustomTabs = styled(Tabs)`
&.selectedTab{
  border-bottom: 2px solid blue;
}
`
const Title = styled.div`
display: flex;  
align-items: center;
font-size: 19px;
> h2 {
  padding-right: 10px;
}
>
`
const Description = styled.div`
  > p {
    text-align: justify;
  }
`

const Close = styled.button`
  position: absolute;
  right:5px;
`;

const Client = styled.div`
  display: flex;  
  align-items: center;
  font-size: 19px;
  > h2 {
    padding-right: 10px;
  }
  >
`
const Duration = styled.div`
  display: flex;  
  align-items: center;
  font-size: 19px;
  > h2 {
    padding-right: 10px;
  }
`
export const CoverPic = styled.img`
width:600px;
height:400px;
@media screen and (max-width: 992px) {
  display: none;
}
`
export const Summary = styled.div`
>h2{
  font-family: 'jadyn' !important;
}
`;
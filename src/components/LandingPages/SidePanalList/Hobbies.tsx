import * as React from "react";
import styled from "styled-components";
import { Card, CardContainer } from "../../../Compo/Card";
import { projects } from "./data";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { SkillsData } from "../../../store/type";
import { useDispatch, useSelector } from "react-redux";
import { getSkills, setLoading } from "../../../store/actions/skillsActions";
import { RootState } from "../../../store";
import { CoverPic, Heading } from "./Projects";
import travelimage from "./travelimage.jpg";
import { ImageCard } from "../../../Compo/ImageCard";
import YoutubeEmbed from "../../../Compo/VideoEmbed";
import { getTravel } from "../../../store/actions/TravelData/traveldetailsAction";
import { getPhotography } from "../../../store/actions/Photography/photographydeatilsAction";


const Photography = [
  {
      "Date": "July 5 2021",
      "HobbieID": "11",
      "Image": "https://s3-us-west-2.amazonaws.com/upload-fileimage-to-s3/2021/10/06/travel_034147",
      "Location": "Northern Washington state",
      "Category": "Photography",
      "Name": "Diablo Lake"
  }
]
export const Hobbies: React.FC =() => {
  const dispatch = useDispatch();
  const skillsdata = useSelector((state: RootState) => state.skills.data);
  const traveldata = useSelector((state: RootState) => state.travel.data);
  const photographydata = useSelector((state: RootState) => state.photography.data);
  console.log("skillsdata--------->",skillsdata);
  console.log("traveldata",traveldata);

  React.useEffect(() => {
    dispatch(setLoading())
    dispatch(getSkills());
    dispatch(getTravel());
    dispatch(getPhotography());
  }, [dispatch]);

  return (
      <ProjectWrap>
        <Heading><p>Hi, my name is Manushree Gowtham and I'm a senior software
            Developer. Welcome to my personal website..! Displaying below the projects i worked and skills</p>
            <CoverPic src ={travelimage}/>
            </Heading>
         <Tabs selectedTabClassName="activetab" className="tabStyle">
    <TabList>
      <Tab>Photography</Tab>
      <Tab>Travelling</Tab>
      <Tab>Movies/Series</Tab>
    </TabList>
    <TabPanel>
    {photographydata && photographydata.map((data, index) => (
          <ImageCard cardData={data}/>
        ))}
    </TabPanel>
    <TabPanel>
    {traveldata && traveldata.map((data, index) => (
          <ImageCard cardData={data}/>
        ))}
    </TabPanel>
    <TabPanel>
      <YoutubeEmbed embedId="-KfsY-qwBS0" />
    </TabPanel>
  </Tabs>
      </ProjectWrap>
    );
}

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
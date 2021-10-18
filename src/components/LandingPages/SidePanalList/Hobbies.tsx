import * as React from "react";
import { useState } from "react"; 
import styled from "styled-components";
import { Card, CardContainer } from "../../../Compo/Card";
import { projects } from "./data";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
import { Loader } from "../../../Compo/Loader";
import Select from 'react-select';

const options = [
  { value: 'Movie', label: 'Movie' },
  { value: 'Series', label: 'Series' }
];

const EntertainmentData = [
  {
    URL: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    HobbieID: "",
    Name: "Avengers",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Fiction",
    rating: "8/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=GuIvzozPVak",
    HobbieID: "",
    Name: "Money Heist",
    Category: "Entertainment",
    subcategory: "Series",
    genre: "heist crime Drama",
    rating: "8/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=oqxAJKy0ii4",
    HobbieID: "",
    Name: "Squid Game",
    Category: "Entertainment",
    subcategory: "Series",
    genre: "heist crime Drama",
    rating: "7/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=xHWQiok-ei0",
    HobbieID: "",
    Name: "Badla",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Suspence Thriller",
    rating: "8/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=M97P3zoUIos",
    HobbieID: "",
    Name: "Talaash",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Murder Mystery",
    rating: "9/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=OYK2eJ0oeg8",
    HobbieID: "",
    Name: "Geetha govindam",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Romance",
    rating: "7.5/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=eOPFqO8jIzA",
    HobbieID: "",
    Name: "Bhumika",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Drama",
    rating: "9/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=Ea8jiLRWHNc",
    HobbieID: "",
    Name: "Mallirava",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Romance",
    rating: "10/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=5lUWBM2uYaQ",
    HobbieID: "",
    Name: "Oh My Kaduvale",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Fantasy",
    rating: "10/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=GjkFr48jk68",
    HobbieID: "",
    Name: "Hindi Medium",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Drama",
    rating: "8/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=d2sJNee7FQ4",
    HobbieID: "",
    Name: "When I First Met",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Drama",
    rating: "9/10",
    comment: "",
  },
  {
    URL: "https://www.youtube.com/watch?v=x9QROSjMc_g",
    HobbieID: "",
    Name: "Thellavarithe guruvaram",
    Category: "Entertainment",
    subcategory: "Movie",
    genre: "Romance",
    rating: "7.5/10",
    comment: "",
  },
];

export const Hobbies: React.FC = () => {
  const dispatch = useDispatch();
  const skillsdata = useSelector((state: RootState) => state.skills.data);
  const traveldata = useSelector((state: RootState) => state.travel.data);
  const [EntertainmentDataState,setEntertainmentDataState] = useState(EntertainmentData);
  console.log("EntertainmentDataState-->",EntertainmentDataState);
  const [selectedOption, setSelectedOption] = React.useState();
  const photographydata = useSelector(
    (state: RootState) => state.photography.data
  );
  console.log("skillsdata--------->", skillsdata);
  console.log("traveldata", traveldata);

  React.useEffect(() => {
    dispatch(setLoading());
    dispatch(getSkills());
    dispatch(getTravel());
    dispatch(getPhotography());
  }, [dispatch]);

  function filtermovies(selectedOption:any) {
    console.log("selectedvaluefiltermovie",selectedOption.value);
    setSelectedOption(selectedOption)
    sortedArray(selectedOption.value)
  }

  function sortedArray(selectedOption:any){
    console.log("selectedoption",selectedOption);
    const data = EntertainmentData.filter(function(data) {
      return data.subcategory == selectedOption;
    });
    console.log("data----------->",data);
    setEntertainmentDataState(data);
  }
  return (
    <ProjectWrap>
      <Heading>
        <p>
          Hi, my name is Manushree Gowtham and I'm a senior software Developer.
          Welcome to my personal website..! Displaying below the projects i
          worked and skills
        </p>
        <CoverPic src={travelimage} />
      </Heading>
      <Tabs selectedTabClassName="activetab" className="tabStyle">
        <TabList>
          <Tab>Photography</Tab>
          <Tab>Travelling</Tab>
          <Tab>Movies/Series</Tab>
        </TabList>
        <TabPanel>
          {photographydata?.length == 0 && <Loader />}
          {photographydata &&
            photographydata.map((data, index) => <ImageCard key={index} cardData={data} />)}
        </TabPanel>
        <TabPanel>
          {traveldata &&
            traveldata.map((data, index) => <ImageCard key={index}cardData={data} />)}
        </TabPanel>
        <TabPanel>
        <SelectWrap>
            <CustomSelect
            value={selectedOption}
            onChange={filtermovies}
            options={options}
            placeholder="Select movies/series"
          />
        </SelectWrap>
          {EntertainmentData?.length == 0 && <Loader />}
          <div>
          {EntertainmentDataState && 
            EntertainmentDataState.map((data, index) => (
                <YoutubeEmbed key={index} data={data} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
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
  .tabStyle {
    font-size: 18px;
    font-weight: bold;
  }
`;

const SelectWrap = styled.div`
  padding: 30px;
  display: flex;  
  align-items: center;
  justify-content: center;
`
const CustomSelect = styled(Select)`
  width:250px;
  border-radius: 10px;
  `
import * as React from "react";
import styled from "styled-components";
import { ProjectData } from "../components/LandingPages/SidePanalList/Projects";
import { TravelDetails } from "../components/LandingPages/SidePanalList/TravelDetails";
import { SkillsData } from "../store/type";
import { useHistory } from "react-router-dom";
import { CustomLink } from "../components/LandingPages/Menubar";

interface CardDetails {
    Location: string,
    Date: string,
    Image:string,
    HobbieID: string,
    Name: string
}

interface CardProps {
  cardData: CardDetails | null;
}

interface ICardState {
  moreInfoClicked: boolean;
}
export class ImageCard extends React.Component<CardProps,ICardState> {
constructor(props:CardProps){
  super(props);
}


  render() {
    return (
      <CardContainer
      >
          <Image src={this.props.cardData!.Image}/>
          <Title>{this.props.cardData!.Name}</Title>
          <CustomLink to="/hobbies/Traveldetails">
          <ReadMore>READ MORE</ReadMore>
          </CustomLink>
      </CardContainer>
    );
  }
}

const CardContainer = styled.div`
    padding: 20px;
    display: inline-block;
    width: 250px;
    height: 350px;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
`;

const Image = styled.img`
object-fit: cover;
width: 250px;
height: 250px;
`
const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-top: 20px;
`;
const DescriptionWrap = styled.div`
  display: block;
  padding: 30px;
  height: 150px;
`;
const Description = styled.p`
height: 150px;
text-align: justify;
font-size: 16px;
overflow: hidden;
`;

const Button = styled.button`
  background: #87ab87;
  font-size: 16px;
  position: absolute;
  border: none;
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;
`

const ReadMore = styled.div`
font-size: 12px;
line-height: 20px;
color: #b26749;
font-weight: 600;
padding: 5px 10px 10px 10px;
display: block;
font-family: "Muli","Helvetica Neue",Helvetica,Arial,sans-serif;
cursor: pointer;
`
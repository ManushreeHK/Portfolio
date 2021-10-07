import * as React from "react";
import styled from "styled-components";
import { ProjectData } from "../components/LandingPages/SidePanalList/Projects";
import { SkillsData } from "../store/type";

interface CardDetails {
  title: string;
  description: string;
  client?: string;
  year?: string;
}

interface CardProps {
  cardData?: CardDetails | null;
  background?: string;
  skillsData?: SkillsData | null;
  moreInfoClicked?: (data: ProjectData) => any;
}

interface ICardState {
  moreInfoClicked: boolean;
}
export class Card extends React.Component<CardProps,ICardState> {
constructor(props:CardProps){
  super(props);
}

buttonClicked = () => {
  if(this.props.cardData) {
    this.props.moreInfoClicked!(this.props.cardData)
  }
}
  render() {
    return (
      <CardContainer
        className={this.props.background ? "newbackground" : "whitebackground"}
      >
        {this.props.skillsData ? (
          <Title>
            <span>{this.props.skillsData?.SkillName}</span>
          </Title>
        ) : (
          <Title>
            <span>{this.props.cardData?.title}</span>
          </Title>
        )}
        <DescriptionWrap>
          <Description>{(this.props.cardData?.description)?(this.props.cardData?.description):(this.props.skillsData?.SkillDescription)}</Description>
        </DescriptionWrap>
        {
          this.props.cardData && 
          <Button onClick={this.buttonClicked}>
            More Info
          </Button>
        }
      </CardContainer>
    );
  }
}

export const CardContainer = styled.div`
  box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 60px 30px;
  display: inline-block;
  width: 250px;
  height: 350px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  white-space: normal;
  &.newbackground {
    background: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgb(68 117 19 / 40%)
    );
  }
  .whitebackground {
    background: white;
  }
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
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
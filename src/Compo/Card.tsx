
import * as React from "react";
import styled from "styled-components";

interface CardDetails {
    title:string;
    description:string;
}

interface CardProps {
    cardData: CardDetails | null;
}

export class Card extends React.Component<CardProps> {
    render() {
        return (
            <CardContainer>
                <Title>
                    <span>{this.props.cardData?.title}</span>
                </Title>
                <Description>
                    {this.props.cardData?.description}
                </Description>
            </CardContainer>
        )
    }
}

const CardContainer = styled.div`
  box-shadow: 0px 0px 35px -8px rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 60px 30px;
  display: inline-block;
  width: 300px;
  height:300px;
   :hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
   }
   white-space:normal;
  `

const Title = styled.div`
   font-size: 15px;
   font-weight: bold;
   text-align: center;
   padding-top: 20px;
`
const Description = styled.div`
   font-size: 12px;
   padding: 30px;
`
import * as React from "react";
import styled from "styled-components";
import Pic from "./AboutImage.jpg";

export class About extends React.Component {
    render() {
        return (
            <div>
            <AboutWrap>
                <Picture>
                    <img src={Pic} />
                </Picture>
                <Paragraph>
                <Header>
                    <Title>ABOUT ME!</Title>
                </Header>
                <Content>
                My name is Manushree and I am a Fullstack developer.
                I grew up in Tumkur(India,Karnataka) and graduated with a Bachelor’s degree and Master degree in computer science engineering from SIT(Karnataka,India).
                I've loved exploring new technologies.<br></br><br></br>

                My story is pretty much like every other kid that grew up in the 90's: Saturday morning cartoons, bowl of maggie and watching favorites TV shows. I always love to explore new things in life.<br></br><br></br>

                After I graduated college, I moved to Bangalore (Karnataka,India) to start my career. Since moving I’ve worked as an software developer for valuelabs, NPCI, Kaios and Standard chartered Bank.<br></br><br></br>

                I currently live in Seattle,WA with my husband.
                </Content>
                <WhatiDo>
                    <SubTitle>What I Do?</SubTitle>
                   <p> I have more than 3 years of experience in IT industry as fullstack developer and I love doing realtime projects  .</p>
                   <p>I do travel more often and explore new places and love to capture each moment. and i am more obssessed to movies and series. you can see my activities in hobbie page.</p>
                </WhatiDo>
                </Paragraph>
            </AboutWrap>
            </div>
        );
    };

}

const AboutWrap = styled.div`
padding: 30px;
display: flex;
max-width: 960px;
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 992px) {
    display: block;
}
`;

const Paragraph = styled.div`
 padding: 30px;
`
const WhatiDo = styled.div``;

const Content = styled.p``;

const Header = styled.div``;

const SubTitle = styled.span`
    font-size: 18px;
    margin-bottom: 2em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 1.8;
`;

const Title = styled.span`
margin-bottom: 15px;
letter-spacing: 5px;
font-size: 42px;
font-weight: bold;
`;

const Picture = styled.div`
> img {
    width: 300px;
    height: 330px;
}
`
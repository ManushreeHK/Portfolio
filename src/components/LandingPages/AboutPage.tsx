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
                I am a computer grad student from SIT with CNE as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years.<br/><br/>
                I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
                I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.
                </Content>
                <WhatiDo>
                    <SubTitle>What I Do?</SubTitle>
                   <p> I have more than 3 years of experience in IT industry as fullstack developer Below are my Expertise.</p>
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
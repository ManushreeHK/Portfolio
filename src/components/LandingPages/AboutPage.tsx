import * as React from "react";
import styled from "styled-components";

export class About extends React.Component {
    render() {
        return (
            <AboutWrap>
                <Header>
                    <Title>About Me</Title>
                    <SubTitle>
                        Who Am I?
    </SubTitle>
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
            </AboutWrap>
        );
    };

}

const AboutWrap = styled.div`
padding: 30px;
`;

const WhatiDo = styled.div``;

const Content = styled.p`;`

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
display: block;
font-size: 10px;
text-transform: uppercase;
color: #999999;
font-weight: 500;
letter-spacing: 5px;
`;
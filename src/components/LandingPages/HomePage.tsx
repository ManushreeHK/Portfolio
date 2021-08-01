import * as React from "react";
import styled from "styled-components";
import coverpic from './coverpic.jpg';

export class HomePage extends React.Component {
    render() {
        return (
    <HomePageWrapper>
        <CoverPicWrapper>
         <Intro>
            <label className="name">Hi I'm Manushree.</label>
         </Intro>
        </CoverPicWrapper>
    </HomePageWrapper>
        );
    };
}

const HomePageWrapper = styled.div`
    height: 100%;
    margin:0;
`;

const CoverPicWrapper = styled.div`
    background:linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgb(68 117 19 / 73%)), url(${coverpic});
    height: 100%;
    width: 100%;
    position: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(248, 247, 216, 0.7);
`;

const Intro = styled.div`
    color: black;
    text-align: center;
    float: right;
    vertical-align: middle;
    .name{
        font-weight: bold;
        font-size: 50px;
        font-style: italic;
    }

`
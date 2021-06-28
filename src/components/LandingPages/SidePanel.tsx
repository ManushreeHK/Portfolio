import * as React from "react";
import styled from "styled-components";
import Profile from './Profile-pic.png';

export class SidePanel extends React.Component {
    render() {
        return (
            <SidePanelWrap>
                <Name>
                    Manushree Gowtham
                </Name>
                <PanelContent>
                    <ProfilePic />
                    <ProfileDescription>Hi, my name is Manushree Gowtham and I'm a senior software Developer. Welcome to my personal website!</ProfileDescription>
                </PanelContent>
            </SidePanelWrap>
        );
    };
}

const ProfileDescription = styled.div`
    color: #fff;
    text-align: center !important;
`;
const PanelContent = styled.div`
    padding: 20px;
`;

const ProfilePic = styled.div`
    background-image: url(${Profile});
    border-radius: 50%;
    height: 150px;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`;

const Name = styled.h1`
    padding-top: 20px !important;
    color: white;
    text-align: center !important;
    font-weight: bold;
    font-size: 1.5rem;
`;

const SidePanelWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    background: #54B689;
    color: #fff;
    overflow-y: auto;
    text-align: center !important;
`;
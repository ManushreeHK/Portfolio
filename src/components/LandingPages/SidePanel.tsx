import * as React from "react";
import styled from "styled-components";
import Profile from "./Profile-pic.png";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import { Link } from "react-router-dom";

export class SidePanel extends React.Component {
  render() {
    return (
      <SidePanelWrap>
        <Name>Manushree Gowtham</Name>
        <PanelContent>
          <ProfilePic />
          <ProfileDescription>
            Hi, my name is Manushree Gowtham and I'm a senior software
            Developer. Welcome to my personal website!
          </ProfileDescription>
          <Ul>
            <Li>
              <a>
                <SocialNetwork src={twitter}></SocialNetwork>
              </a>
            </Li>
            <Li>
              <a>
                <SocialNetwork src={linkedin}></SocialNetwork>
              </a>
            </Li>
            <Li>
              <a>
                <SocialNetwork src={facebook}></SocialNetwork>
              </a>
            </Li>
            <Li>
              <a>
                <SocialNetwork src={instagram}></SocialNetwork>
              </a>
            </Li>
          </Ul>
          <Seperator/>
          <Ul>
              <nav>
              <CustomLink to="/aboutme">
              <ListItems>
                  About Me
              </ListItems>
              </CustomLink>
              <CustomLink to="/projects">
              <ListItems>
                  Project Work
              </ListItems>
              </CustomLink>
              <CustomLink to="/favorites">
              <ListItems>
                  Favorites
              </ListItems>
              </CustomLink>
              <CustomLink to="/favorites">
              <ListItems>
                  Contact
              </ListItems>
              </CustomLink>
              </nav>
          </Ul>
        </PanelContent>
      </SidePanelWrap>
    );
  }
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
  background: #5BC3D5;
  color: #fff;
  overflow-y: auto;
  text-align: center !important;
`;

const SocialNetwork = styled.img``;

const Li = styled.li`
  list-style: none;
  color: #fff;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  height: 20px;
  width: 20px;
  display: inline-block;
  padding: 10px;
`;

const Ul = styled.ul`
  display: block;
  text-align: left !important;
`;

const Seperator = styled.div`
    height:1px;
    background-color: white;
    opacity: .25;
`;

const ListItems = styled.li`
list-style: none;
padding: 10px;
`
const CustomLink = styled(Link)`
color: white;
text-decoration: none;
&:hover {
  color: green;
}
`
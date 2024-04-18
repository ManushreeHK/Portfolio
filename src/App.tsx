import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./components/LandingPages/AboutPage";
import { Favorites } from "./components/LandingPages/SidePanalList/FavoritesPage";
import { Projects } from "./components/LandingPages/SidePanalList/Projects";
import { HomePage } from "./components/LandingPages/HomePage";
import { MenuBar } from "./components/LandingPages/Menubar";
import styled from "styled-components";
import { Hobbies } from "./components/LandingPages/SidePanalList/Hobbies";
import Hamburger from "./Assets/hamburger.png";
import Close from "./Assets/closebutton.svg";
import facebook from "./Assets/facebook.svg";
import instagram from "./Assets/instagram.svg";
import linkedin from "./Assets/linkedin.svg";
import { AdminPage }  from "./components/LandingPages/Adminpage"


const App: FC = () => {
  const [sidenavIsOpen, setIsOpen] = React.useState(false);

  const closeNav = () => {
    setIsOpen(false)
  }

  const openNav = () => {
    setIsOpen(true)
  }


  return (
    <Router>
      <div className="App">
        <BodyWrapper>
          <MenuBar />
          <MobileWrapper>
          <SideNav id="mySidenav" className={sidenavIsOpen?"sideBarShow":"sideBarHide"}>
          <CloseWrap>
          <CloseButton onClick ={closeNav} src={Close}/>
          </CloseWrap>
          <MenuWrap>
          <Ul>
              <nav>
              <CustomLink to="/" onClick={closeNav}>
              <ListItems>
                  Home
              </ListItems>
              </CustomLink>
              <CustomLink to="/aboutme" onClick={closeNav}>
              <ListItems>
                  About Me
              </ListItems>
              </CustomLink>
              <CustomLink to="/projects" onClick={closeNav}>
              <ListItems>
                  Profession
              </ListItems>
              </CustomLink>
              <CustomLink to="/hobbies" onClick={closeNav}>
              <ListItems>
                  Hobbies
              </ListItems>
              </CustomLink>
              </nav>
          </Ul>
          </MenuWrap>
          <FindMe>Find me @</FindMe>
          <SocialMediawrap>
              <a href="https://www.facebook.com/manu.shree.9/" target="_blank">
        <SocialMedia src={facebook}/>
        </a>
        <a href="https://www.instagram.com/manu_shree_/" target="_blank">
        <SocialMedia src={instagram}/>
        </a>
        <a href="https://www.linkedin.com/in/manu-shree-a351b267/" target="_blank">
        <SocialMedia src={linkedin}/>
        </a>
        </SocialMediawrap>
          </SideNav>
          <TopMenu>
          <HamburgerIcon className={sidenavIsOpen?"sideBarOpenButtonHide":"sideBarOpenButtonShow"} onClick={openNav} src={Hamburger}/>
          <Signature>Manushree</Signature>
          </TopMenu>
          </MobileWrapper>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/aboutme" element={<About/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/hobbies" element={<Hobbies/>} />
            <Route path="/admin" element={<AdminPage/>} />
          </Routes>
        </BodyWrapper>
      </div>
    </Router>
  );
};

const BodyWrapper = styled.div`
  top: 50px;
`;

const MobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
}
`

const SideNav = styled.div`
  height: 100%;
  position: fixed;
  width:0px;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #dcedc8;
  overflow-x: hidden;
  padding-top: 60px;
  &.sideBarShow {
    width: 250px;
    height: 100%;
    transition: 0.4s ease-in;
    > a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #111;
      display: block;
      transition: 0.4s ease-in;
    }
  }
  &.sideBarHide {
    display:none;
    position: relative;
    transition: 0.4s ease-out;
  }
  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
`;

const Ul = styled.div`
  display: block;
  text-align: center;
  padding: 20px;
`;

const ListItems = styled.li`
list-style: none;
padding: 15px;
font-weight: bold;
`
const CustomLink = styled(Link)`
color: #111;;
text-decoration: none;
&:hover {
  color: green;
}
`
const HamburgerIcon = styled.img`
width: 100%;
z-index: 20;
padding: 10px;
margin-left: 10px;
cursor: pointer;
height:25px;
width:25px;
}
`;

const CloseButton = styled.img`
height: 30px;
width: 30px;
`

const TopMenu = styled.div``
const Signature = styled.label`
position: absolute;
right: 10px;
padding: 10px;
font-family: "Brush Script MT",cursive;
font-size: 1.8em;
`;
const CloseWrap = styled.div`
display: flex;
justify-content: flex-end;
align-items: normal;
`
const SocialMedia = styled.img`
    height: 30px;
    width: 30px;
    margin-right:10px;
`
const SocialMediawrap = styled.div`
display:flex;
padding: 20px;
`;

const MenuWrap = styled.div`
height: 70%;
`
const FindMe = styled.label`
  font-size: 16px;
  font-weight: bold;
  padding:20px;
`
export default App;

import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./components/LandingPages/AboutPage";
import { Favorites } from "./components/LandingPages/SidePanalList/FavoritesPage";
import { Projects } from "./components/LandingPages/SidePanalList/Projects";
import { HomePage } from "./components/LandingPages/HomePage";
import { MenuBar } from "./components/LandingPages/Menubar";
import styled from "styled-components";
import { Hobbies } from "./components/LandingPages/SidePanalList/Hobbies";

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
          <a href="javascript:void(0)" className={"closebtn"} onClick = {closeNav} >&times;</a>
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
          </SideNav>
          <span className={sidenavIsOpen?"sideBarOpenButtonHide":"sideBarOpenButtonShow"} onClick={openNav}>&#9776;</span>
          </MobileWrapper>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/aboutme" component={About} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/projects" component={Projects} />
            <Route path="/hobbies" component={Hobbies} />
          </Switch>
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

const Ul = styled.ul`
  display: block;
  text-align: left !important;
`;

const ListItems = styled.li`
list-style: none;
padding: 10px;
`
const CustomLink = styled(Link)`
color: #111;;
text-decoration: none;
&:hover {
  color: green;
}
`


export default App;

import React, {FC} from "react";
import logo from "./logo.svg";
import "./App.css";
import { WelcomePage } from "./components/LandingPages/WelcomePage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { About } from "./components/LandingPages/AboutPage";
import { Favorites } from "./components/LandingPages/SidePanalList/FavoritesPage";
import { Projects } from "./components/LandingPages/SidePanalList/Projects";
import { HomePage } from "./components/LandingPages/HomePage";
import { MenuBar } from "./components/LandingPages/Menubar";
import styled from "styled-components";

const App: FC = () => {
  const dispatch = useDispatch();
  const Skills = useSelector((state: RootState) => state.skills.skills);
  return (
    <Router>
    <div className="App">
      <MenuBar/>
      <BodyWrapper>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/aboutme" component={About} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/projects" component={Projects} />
      </Switch>
      </BodyWrapper>
    </div>
    </Router>
  );
}

const BodyWrapper = styled.div`
  top: 50px;
`

export default App;

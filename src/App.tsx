import React, {FC} from "react";
import "./App.css";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { About } from "./components/LandingPages/AboutPage";
import { Favorites } from "./components/LandingPages/SidePanalList/FavoritesPage";
import { Projects } from "./components/LandingPages/SidePanalList/Projects";
import { HomePage } from "./components/LandingPages/HomePage";
import { MenuBar } from "./components/LandingPages/Menubar";
import styled from "styled-components";
import { Hobbies } from "./components/LandingPages/SidePanalList/Hobbies";

const App: FC = () => {
  return (
    <Router>
    <div className="App">
      <BodyWrapper>
      <MenuBar/>
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
}

const BodyWrapper = styled.div`
  top: 50px;
`

export default App;

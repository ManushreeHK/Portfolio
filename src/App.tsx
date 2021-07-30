import React, {FC} from "react";
import logo from "./logo.svg";
import "./App.css";
import { WelcomePage } from "./components/LandingPages/WelcomePage";
import { SidePanel } from "./components/LandingPages/SidePanel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { About } from "./components/LandingPages/AboutPage";
import { Favorites } from "./components/LandingPages/SidePanalList/FavoritesPage";
import { Projects } from "./components/LandingPages/SidePanalList/Projects";

const App: FC = () => {
  const dispatch = useDispatch();
  const Skills = useSelector((state: RootState) => state.skills.skills);
  return (
    <Router>
    <div className="App">
      <SidePanel/>
      <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/aboutme" component={WelcomePage} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/projects" component={Projects} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

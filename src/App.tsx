import React, {FC} from "react";
import logo from "./logo.svg";
import "./App.css";
import { WelcomePage } from "./components/LandingPages/WelcomePage";
import { SidePanel } from "./components/LandingPages/SidePanel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

const App: FC = () => {
  const dispatch = useDispatch();
  const Skills = useSelector((state: RootState) => state.skills.skills);
  return (
    <div className="App">
      <SidePanel/>
      <WelcomePage skills={Skills}  />
    </div>
  );
}

export default App;

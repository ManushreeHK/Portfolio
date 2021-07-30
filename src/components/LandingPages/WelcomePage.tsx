import * as React from "react";
import styled from "styled-components";
// import { slide as Menu } from 'react-burger-menu';
import dp from './bg-image.jpg';
import { About } from "./AboutPage";
import { getSkills, setLoading } from "../../store/actions/skillsActions";
import { useDispatch } from "react-redux";
import { Skills } from "../../store/type";
import { FC } from "react";
import { SkillsSection } from "./SkillsSections";


interface SkillsProps {
  skills: Skills | null;
}
export const WelcomePage: FC<SkillsProps> =(skills) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLoading())
    dispatch(getSkills());
  }, []);

  return (
    <WelcomeWrap>
      <MainWrap>
        <IntodWrap>
          <HeaderWrap>
            Hi!!! <br/>
            I'm Manushree <br/>
            <Designation>Senior software Developer</Designation>
        </HeaderWrap>
        </IntodWrap>
      </MainWrap>
      <About />
      <SkillsSection/>
          {/* <Menu styles={styles}>
        <SidebarList>
          About
        </SidebarList>
      </Menu> */}
    </WelcomeWrap>
  );   
};

const Designation = styled.span`
  font-size:20px;
`
const MainWrap = styled.div`
  background-image: url(${dp});
  background-size: cover;
  min-height: 500px;
  margin-bottom: 2em;
  width:100%;

`
const HeaderWrap = styled.div`
    padding-top: 50px;
    font-family: serif;
    font-size: 50px;
    font-weight: bold;
    text-align:center;
    vertical-align:middle;
    width:100%;
`;

const WelcomeWrap = styled.div`
margin-left: 280px;
background: #fff;
`

const IntodWrap = styled.div`
`

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const SidebarList = styled.li`
  color: white;
`

function componentDidMount() {
  throw new Error("Function not implemented.");
}

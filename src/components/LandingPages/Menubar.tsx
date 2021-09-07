import * as React from "react";
import styled from "styled-components";
import coverpic from './coverpic.jpg';
import { Link } from "react-router-dom";

export class MenuBar extends React.Component {
    render() {
        return (
    <MenubarWrapper>
    <MenuList>
        <nav>
        <CustomLink to="/">
        <MenuItem>Home</MenuItem>
        </CustomLink>
        <CustomLink to="/aboutme">
        <MenuItem>About</MenuItem>
        </CustomLink>
        <CustomLink to="/projects">
        <MenuItem>Profession</MenuItem>
        </CustomLink>
        <CustomLink to="/hobbies">
        <MenuItem>Hobbies</MenuItem>
        </CustomLink>
        <MenuItem>Contact</MenuItem>
        </nav>
    </MenuList>
    </MenubarWrapper>
        );
    };
}

const MenubarWrapper = styled.div`
    width: 100%;
    color: white;
`
const MenuList = styled.ul`
width: 100%;
list-style-type: none;
background-color: black;
margin: 0;
padding: 2% 0 2% 0;
text-align: center;
`
const MenuItem = styled.li`
display: inline;
width: auto;
padding: 20px;
`
const CustomLink = styled(Link)`
color: white;
text-decoration: none;
&:hover {
  color: green;
}
`
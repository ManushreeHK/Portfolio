import * as React from "react";
import styled from "styled-components";
import coverpic from './coverpic.jpg';
import { Link } from "react-router-dom";
import facebook from "../../Assets/facebook.svg";
import instagram from "../../Assets/instagram.svg";
import linkedin from "../../Assets/linkedin.svg";

export class MenuBar extends React.Component {
    render() {
        return (
    <MenubarWrapper>
    <MenuList>
        <Signature>Manushree</Signature>
        <Nav>
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
        </Nav>
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
    </MenuList>
    </MenubarWrapper>
        );
    };
}

const MenubarWrapper = styled.div`
    display: flex;
    width: 100%;
    color: white;
    @media screen and (max-width: 992px) {
        display: none;
    }
`
const MenuList = styled.ul`
display: flex;
justify-content: space-between;
width: 100%;
list-style-type: none;
background-color: black;
margin: 0;
text-align: center;
padding: 20px;
`
const MenuItem = styled.li`
display: inline;
width: auto;
padding: 20px;
`
export const CustomLink = styled(Link)`
color: white;
font-weight: bold;
text-decoration: none;
&:hover {
  color: green;
}
`
const Logo = styled.span`
`
const Signature = styled.label`
font-family: "Brush Script MT",cursive;
font-size: 1.8em;
`;

const SocialMedia = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 10px;
`
const SocialMediawrap = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
`
const Nav = styled.nav`
    margin-top: 6px;
`
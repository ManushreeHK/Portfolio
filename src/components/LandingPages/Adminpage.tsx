import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import coverpic from "./coverpic.jpg";
const words = ["Programmer","Photographer","HomeMaker","Developer","Traveller","Manushree"];

export const AdminPage: React.FC = () => {

  return (
    <div>
          Admin Page
    </div>
  );
};

const HomePageWrapper = styled.div`
  height: 100%;
  margin: 0;
`;

const CoverPicWrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgb(68 117 19 / 73%)
    ),
    url(${coverpic});
  animation: hue-rotate 3s linear infinite;
  height: 100%;
  width: 100%;
  position: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(248, 247, 216, 0.7);
`;

const Intro = styled.h1`
position: absolute;
top: 25%;
left: 35%;
margin-top: -50px;
margin-left: -50px;
color: #ffff;
  .name {
    font-weight: bold;
    font-size: 50px;
    font-style: italic;
  }
  > span {
      color: hsl(208deg 99% 50%);
  }
`;

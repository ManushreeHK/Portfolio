import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import coverpic from "./coverpic.jpg";
const words = ["Programmer","Photographer","HomeMaker","Developer","Traveller","Manushree"];

export const HomePage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <HomePageWrapper>
      <CoverPicWrapper>
        <Intro>
          Hi!! I am <span>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`} </span>
        </Intro>
      </CoverPicWrapper>
    </HomePageWrapper>
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

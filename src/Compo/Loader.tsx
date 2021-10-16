import * as React from "react";
import styled from "styled-components";
import loader from "../Assets/loader.svg";

export class Loader extends React.Component {
  render() {
    return (
      <LoadWrap>
        <Load src={loader} />
      </LoadWrap>
    );
  }
}

const Load = styled.img`
width: 100px;
height: 100px;
margin: 20px;
display:inline-block;
`;

const LoadWrap = styled.div``;
import * as React from "react";
import styled from "styled-components";
import { Card } from "../../Compo/Card";
import {PostsData} from "./constants";

export class SkillsSection extends React.Component {
    render() {
        return (
            <div>
      <CardList>
      {PostsData.map((data,index) => (
        <Card  key ={index} cardData={data}/>
    ))}
    </CardList>
    </div>
        );
    };

}

const CardList = styled.header`
    display:inline-block;
    width:100%;
    float:right;
    margin:0;
    min-height: 75vh;
    white-space:normal;
    overflow-x: scroll;
    margin-top:-70px;
    
    &::-webkit-scrollbar { 
      display: none; 
    }
    
    @media(min-width:768px) {
        width:100%;
        white-space:nowrap;
        margin-top: 0;
    }
    
`
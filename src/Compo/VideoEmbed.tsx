import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


interface CardDetails {
  URL: string,
  HobbieID: string,
  Name: string,
  Category: string,
  subcategory: string,
  genre: string,
  rating: string,
  comment: string,
}

interface CardProps {
  data: CardDetails | null;
}

interface ICardState {
  moreInfoClicked: boolean;
  embedId : string;
}

export class YoutubeEmbed extends React.Component<CardProps,ICardState> {
  constructor(props:CardProps){
    super(props);
  }

 getId(url: any) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  render() {
    return (
      <VidoWrap>
      <VideoResponsive>
        <IFRAME
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${this.getId(this.props.data?.URL)}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </VideoResponsive>
      <Info>
      <Titlewrap>
      <Title>{this.props.data?.Name}</Title>
      </Titlewrap>
      <RatingWrap>
      <Rating>Rating: <span>{this.props.data?.rating}</span></Rating>
      </RatingWrap>
      </Info>
      </VidoWrap>
    )
    }
}



const VideoResponsive = styled.div`
overflow: hidden;
position: relative;
height: 350px;
width: 250px;
`
const IFRAME = styled.iframe`
left: 0;
top: 0;
height: 100%;
width: 100%;
position: absolute;
`
const VidoWrap = styled.div`
padding: 20px;
display: inline-block;
`;

const Info = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Title = styled.span`
  font-size: 14px;
`;
const Rating = styled.span`
  font-size: 14px;
`;

const Titlewrap = styled.div`
 width: 120px;
`;
const RatingWrap = styled.div`
`;
export default YoutubeEmbed;
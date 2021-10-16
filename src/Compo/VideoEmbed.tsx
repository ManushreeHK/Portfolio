import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const YoutubeEmbed = ({ embedId }:any) => (
  <VidoWrap>
  <VideoResponsive>
    <IFRAME
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
  <label>Money Heist</label>
  </VidoWrap>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};



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
`
export default YoutubeEmbed;
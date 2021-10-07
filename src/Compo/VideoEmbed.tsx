import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const YoutubeEmbed = ({ embedId }:any) => (
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
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};



const VideoResponsive = styled.div`
overflow: hidden;
position: relative;
height: 300px;
width: 300px;
`
const IFRAME = styled.iframe`
left: 0;
top: 0;
height: 100%;
width: 100%;
position: absolute;
`
export default YoutubeEmbed;
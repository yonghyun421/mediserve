import React from 'react';
import styled from 'styled-components';
import FeedContent from './FeedContent';

const VideoSection = ({ Contents }) => {
  return (
    <VideoSectionBox>
      {Contents?.map((image, idx) => (
        <FeedContent key={idx} image={image} />
      ))}
    </VideoSectionBox>
  );
};

export default VideoSection;

const VideoSectionBox = styled.div`
  width: 33%;
`;

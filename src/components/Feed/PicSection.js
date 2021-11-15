import React from 'react';
import styled from 'styled-components';
import FeedContent from './FeedContent';

const PicSection = ({ Contents }) => {
  return (
    <PicSectionBox>
      {Contents?.map((image, idx) => (
        <FeedContent key={idx} image={image} />
      ))}
    </PicSectionBox>
  );
};

export default PicSection;

const PicSectionBox = styled.div`
  width: 33%;
`;

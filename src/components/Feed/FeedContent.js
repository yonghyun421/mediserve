import React from 'react';
import styled from 'styled-components';

const FeedContent = ({ image }) => {
  return (
    <Content>
      <ContentImg src={image} />
    </Content>
  );
};

export default FeedContent;

const Content = styled.div`
  width: 100%;
  height: 100wh;
  margin: 0.5px;
`;

const ContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

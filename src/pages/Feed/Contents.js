import React from 'react';
import styled from 'styled-components';

const Contents = ({ image }) => {
  return (
    <Content>
      <ContentImg src={image} />
    </Content>
  );
};

export default Contents;

const Content = styled.div`
  width: 130px;
  height: 110px;
  margin: 0.5px;
`;

const ContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

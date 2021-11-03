import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingBar from './LoadingBar';

const Loading = () => {
  return (
    <Wrapper>
      <Title>접수중</Title>
      <LoadingBar />
      <Content>약사가 처방전을 확인 중에 있습니다.</Content>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 414px;
  height: 596px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Title = styled.div`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  color: #3db8c0;
`;

const Content = styled.div`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  color: #333333;
`;

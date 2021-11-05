import React, { useState } from 'react';
import styled from 'styled-components';
import Camera from './Camera';
const SnapShot = () => {
  return (
    <Wrapper>
      <Title>처방전 / QR 코드 촬영</Title>
      <Camera />
    </Wrapper>
  );
};

export default SnapShot;

const Wrapper = styled.div`
  width: 100%;
  height: 89vh;
  margin-bottom: 15px;
  @media (min-width: 0px) and (max-width: 759px) {
    width: 100%;
    height: 82vh;
  }
`;

const Title = styled.div`
  text-align: center;
  height: 63px;
  padding-top: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #333333;
  background: rgba(49, 212, 222, 0.3);
`;

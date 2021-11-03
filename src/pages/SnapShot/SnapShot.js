import React from 'react';
import styled from 'styled-components';
import MainColorBtn from '../../components/MainColorBtn';
const SnapShot = () => {
  return (
    <Wrapper>
      <Title>처방전 / QR 코드 촬영</Title>
      <Camera>
        <BtnWrapper>
          <MainColorBtn Body="취소" />
          <Capture src="/images/capture.png" />
          <MainColorBtn Body="사진첩" />
        </BtnWrapper>
      </Camera>
    </Wrapper>
  );
};

export default SnapShot;
const Wrapper = styled.div`
  width: 414px;
  height: 896px;
`;
const Title = styled.div`
  height: 63px;
  background: rgba(49, 212, 222, 0.3);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #333333;
  text-align: center;
  padding-top: 16px;
`;
const Camera = styled.div`
  height: 100%;
  background: #c4c4c4;
  position: relative;
`;
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 20px;
`;
const Capture = styled.img``;

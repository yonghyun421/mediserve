import React from 'react';
import styled from 'styled-components';

const UploadPage = () => {
  return (
    <UploadWrapper>
      <UploadTop>
        <ImageWrapper>
          <UploadImage src="/images/camera.png" />
        </ImageWrapper>
        <UploadButton>
          <ImageBtn>이미지 첨부</ImageBtn>
          <VideoBtn>동영상 첨부</VideoBtn>
        </UploadButton>
      </UploadTop>
      <BottomSolid />
      <UploadContent placeholder="내용을 입력해주세요" />
    </UploadWrapper>
  );
};

export default UploadPage;
const UploadWrapper = styled.div`
  width: 414px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UploadTop = styled.div`
  width: 414px;
  display: flex;
  justify-content: space-evenly;
`;
const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  padding: 46px 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const UploadImage = styled.img`
  width: 100px;
  height: 87.5px;
`;

const UploadButton = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 17px;
  color: #333333;
`;
const ImageBtn = styled.button`
  display: block;
  width: 110px;
  height: 55px;
  background: #e5e5e5;
  border-radius: 20px;
  border: 0px;
`;
const VideoBtn = styled.button`
  display: block;
  width: 110px;
  height: 55px;
  background: #e5e5e5;
  border-radius: 20px;
  border: 0px;
`;
const BottomSolid = styled.div`
  width: 350px;
  border: 1px solid #014d52;
  margin: 25px 0px;
`;
const UploadContent = styled.textarea`
  width: 350px;
  overflow-y: hidden;
  resize: none;
  outline: 0;
  border: 0;
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #646363;
`;

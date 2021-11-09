import React from 'react';
import styled from 'styled-components';

const UploadPage = () => {
  return (
    <UploadTotal>
      <UploadWrapper>
        <UploadTopWrapper>
          <UploadTop>
            <ImageWrapper>
              <UploadImage src="/images/camera.png" />
            </ImageWrapper>
            <UploadButton>
              <ImageBtn>이미지 첨부</ImageBtn>
              <VideoBtn>동영상 첨부</VideoBtn>
            </UploadButton>
          </UploadTop>
        </UploadTopWrapper>
        <BottomSolid />
        <UploadContent placeholder="내용을 입력해주세요" />
        <UploadSendBtn src="/images/submitBtn.png" />
      </UploadWrapper>
    </UploadTotal>
  );
};

export default UploadPage;
const UploadTotal = styled.div`
  display: flex;x
  justify-content: center;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 26px;
`;

const UploadTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const UploadTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
`;

const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  margin-right: 50px;
  padding: 46px 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const UploadImage = styled.img`
  width: 100px;
  height: 87.5px;
`;

const UploadButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 180px;
  font-family: 'Nanum Gothic';
  font-weight: bold;
  font-size: 15px;
  line-height: 17px;
  color: #333333;
`;

const ImageBtn = styled.button`
  display: block;
  width: 110px;
  height: 55px;
  border: 0px;
  background: #e5e5e5;
  border-radius: 20px;
`;

const VideoBtn = styled.button`
  display: block;
  width: 110px;
  height: 55px;
  border-radius: 20px;
  border: 0px;
  background: #e5e5e5;
`;

const BottomSolid = styled.div`
  width: 95%;
  height: 1px;
  margin: 25px 0px;
  border-bottom: 1px solid #014d52;
`;

const UploadContent = styled.textarea`
  width: 90%;
  min-height: 140px;
  resize: none;
  outline: 0;
  border: 0;
  font-family: 'Nanum Gothic';
  font-size: 16px;
  line-height: 18px;
  color: #646363;
`;

const UploadSendBtn = styled.img`
  width: 310px;
  object-fit: contain;
`;

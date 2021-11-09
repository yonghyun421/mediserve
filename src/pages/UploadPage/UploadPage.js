import React from 'react';
import styled from 'styled-components';
import Next from '../../components/Next/Next';

const UploadPage = () => {
  return (
    <UploadWrapper>
      <UploadTopWrapper>
        <UploadTop>
          <ImageWrapper>
            <UploadImage src="/images/camera.png" />
          </ImageWrapper>
          <UploadButton>
            <ImportBtn>이미지 첨부</ImportBtn>
            <ImportBtn>동영상 첨부</ImportBtn>
          </UploadButton>
        </UploadTop>
      </UploadTopWrapper>
      <BottomSolid />
      <UploadContent placeholder="내용을 입력해주세요" />
      <Next Title="등록" />
    </UploadWrapper>
  );
};

export default UploadPage;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 26px;
`;

const UploadTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const UploadTop = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
`;

const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  margin-right: 1rem;
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
  margin-left: 1rem;
  height: 180px;
  font-family: 'Nanum Gothic';
  font-weight: bold;
  font-size: 15px;
  line-height: 17px;
  color: #333333;
`;

const ImportBtn = styled.button`
  display: block;
  padding: 0 27px;
  /* width: 110px; */
  height: 55px;
  border: 0px;
  background: #e5e5e5;
  border-radius: 20px;
`;

const BottomSolid = styled.div`
  width: 90%;
  height: 1px;
  margin: 25px 0px;
  border-bottom: 1px solid #014d52;
`;

const UploadContent = styled.textarea`
  width: 85%;
  min-height: 140px;
  resize: none;
  outline: 0;
  border: 0;
  font-family: 'Nanum Gothic';
  font-size: 16px;
  line-height: 18px;
  color: #646363;
  /* margin-bottom: 10rem; */
`;

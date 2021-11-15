import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Next from '../../components/Next/Next';

const UploadPage = () => {
  const [detailImageFile, setDetailImageFile] = useState(null);
  const [detailImageUrl, setDetailImageUrl] = useState('images/camera.png');

  const setImageFromFile = event => {
    let reader = new FileReader();
    if (event.target.files[0]) {
      setDetailImageFile(reader.readAsDataURL(event.target.files[0]));
    }
    reader.onload = () => {
      const setImageUrl = reader.result;
      if (setImageUrl) {
        setDetailImageUrl(setImageUrl.toString());
      }
    };
  };

  return (
    <UploadWrapper>
      <UploadTopWrapper>
        <UploadTop>
          <ImageWrapper>
            <UploadImage src={detailImageUrl} />
          </ImageWrapper>
          <BtnWrapper>
            <UploadButton>
              <ImportBtn htmlFor="AddImage">이미지 첨부</ImportBtn>
              <AddImage
                type="file"
                formEncType="multipart/form-data"
                onChange={setImageFromFile}
              />
            </UploadButton>
            <UploadButton>
              <ImportBtn htmlFor="AddImage">동영상 첨부</ImportBtn>
              <AddImage
                name="imgFile"
                id="imgFile"
                type="file"
                formEncType="multipart/form-data"
                onChange={setImageFromFile}
              />
            </UploadButton>
          </BtnWrapper>
        </UploadTop>
      </UploadTopWrapper>
      <BottomSolid />
      <UploadContent placeholder="내용을 입력해주세요" />
      <LinkTo to="/feed">
        <Next Title="등록" />
      </LinkTo>
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
  object-fit: cover;
`;

const AddImage = styled.input`
  height: 55px;
  width: 130px;
  opacity: 0;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 99999;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1rem;
  height: 180px;
`;

const UploadButton = styled.div`
  position: relative;
`;

const ImportBtn = styled.label`
  display: block;
  padding: 1.2rem;
  border: 0px;
  background: #e5e5e5;
  border-radius: 20px;
  font-family: 'Nanum Gothic';
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 17px;

  color: #333333;
  @media (min-width: 0px) and (max-width: 410px) {
    padding: 1rem 0.4rem;
    font-size: 0.8rem;
  }
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
`;
const LinkTo = styled(Link)`
  width: 100%;
`;

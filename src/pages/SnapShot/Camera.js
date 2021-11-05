import React, { useState } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import MainColorBtn from '../../components/MainColorBtn';

const Camera = () => {
  const [isFinishPic, setisFinishPic] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  }, [webcamRef]);

  const cameraToggle = () => {
    setisFinishPic(!isFinishPic);
    capture();
  };

  return (
    <WebcamWrapper>
      {!imageSrc && (
        <Webcam
          ref={webcamRef}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: '50%',
            marginLeft: '-50%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      )}
      {imageSrc && (
        <img
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: '50%',
            marginLeft: '-50%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          alt="camera"
          src={imageSrc}
        />
      )}
      {isFinishPic ? (
        <BtnWrapper>
          <MainColorBtn Body="재촬영" />
          <Capture
            src="/images/capture.png"
            onClick={cameraToggle}
            style={{ visibility: 'hidden' }}
          />
          <MainColorBtn Body="보내기" />
        </BtnWrapper>
      ) : (
        <BtnWrapper>
          <MainColorBtn Body="취소" />
          <Capture src="/images/capture.png" onClick={cameraToggle} />
          <MainColorBtn Body="사진첩" />
        </BtnWrapper>
      )}
    </WebcamWrapper>
  );
};

export default Camera;

const WebcamWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BtnWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  padding: 0px 13px;
  margin-top: 30px;
  bottom: 3rem;
  object-fit: contain;
`;

const Capture = styled.img`
  width: 50px;
  height: 50px;
`;

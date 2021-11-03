import React from 'react';
import styled from 'styled-components';

const PictureAndQR = () => {
  return (
    <TotalWrapper>
      <Wrapper>
        <Wraning>! 처방약 수령시에는 실제 처방전을 제출하셔야합니다.</Wraning>
        <GuideTitle> {`<사진 등록 가이드>`} </GuideTitle>
        <GuideContent>
          <p>1. 저체가 보이도록 찎어주세요.</p>
          <p>2. 한 번에 한 장씩 촬영해주세요.</p>
        </GuideContent>
        <BtnWrapper>
          <Personal>개인 정보는 삭제되며, 저장되지 않습니다.</Personal>
          <NextBtn type="submit" src="/images/nextBtn.png" />
        </BtnWrapper>
      </Wrapper>
    </TotalWrapper>
  );
};

export default PictureAndQR;

const TotalWrapper = styled.div`
  width: 414px;
`;
const Wrapper = styled.div`
  width: 414px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wraning = styled.div`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ff0000;
  margin-top: 2.5rem;
`;
const GuideTitle = styled.div`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #014d52;
`;
const GuideContent = styled.div`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const BtnWrapper = styled.div`
  margin-top: 2.5rem;
`;

const Personal = styled.p`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #000000;
`;

const NextBtn = styled.img`
  width: 349px;
  height: 54px;
  margin-top: 12px;
`;

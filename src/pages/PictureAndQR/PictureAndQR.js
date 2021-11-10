import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import BackTab from '../../components/BackTab';
import Next from '../../components/Next/Next';

const PictureAndQR = () => {
  return (
    <>
      <BackTab Na="처방전 사진 보내기" />
      <TotalWrapper>
        <Wrapper>
          <Warning>
            ! 처방약 수령시에는 실제 처방전을 <br />
            제출하셔야합니다.
          </Warning>
          <GuideTitle> {`<사진 등록 가이드>`} </GuideTitle>
          <GuideContent>
            <p>1. 전체가 보이도록 찍어주세요.</p>
            <p>2. 한 번에 한 장씩 촬영해주세요.</p>
          </GuideContent>
          <BtnWrapper>
            <Personal>개인 정보는 삭제되며, 저장되지 않습니다.</Personal>
            <LinkTo to="/snapshot">
              <Next Title="NEXT" />
            </LinkTo>
          </BtnWrapper>
        </Wrapper>
      </TotalWrapper>
    </>
  );
};

export default PictureAndQR;
const TotalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 80px;
`;

const Warning = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 1rem;
  line-height: 24px;
  color: #ff0000;
`;

const GuideTitle = styled.div`
  text-align: center;
  margin: 3rem 0rem;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #014d52;
`;

const GuideContent = styled.div`
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 18px;
  line-height: 200%;
  text-align: center;
  color: #000000;
`;

const BtnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 7rem;
`;

const Personal = styled.p`
  height: 30px;
  font-family: 'NanumGothic';
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #000000;
`;

const LinkTo = styled(Link)`
  width: 100%;
`;

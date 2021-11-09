import React from 'react';
import styled from 'styled-components';
import Next from '../../components/Next/Next';
import QnATab from '../../components/QnA/QnATab';

const Medical = () => {
  return (
    <QnASection>
      <QnATab />
      <ChoiceSection>
        <ChoiceBox>
          <span>아픈부위 / 궁금한부위로 선택</span>
        </ChoiceBox>
        <ChoiceSubject>
          <span>진료과로 선택</span>
        </ChoiceSubject>
        <FlexRow>
          <ChoiceSmallSubject>
            <P>공개</P>
            <MDS5>( MDS 2개 이상 소비 )</MDS5>
          </ChoiceSmallSubject>
          <ChoiceSmallBox>
            <P>비공개</P>
            <MDS5>( MDS 5개 이상 소비 )</MDS5>
          </ChoiceSmallBox>
        </FlexRow>
      </ChoiceSection>
      <Next />
    </QnASection>
  );
};

export default Medical;

const QnASection = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  line-height: 20px;
  font-size: 20px;
`;

const ChoiceSection = styled.div`
  margin-top: 128px;
`;

const ChoiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 45px 34px;
  border-radius: 20px;
  box-shadow: 0 0 20px #0000001a;
  font-size: 23px;
  font-weight: 700;
  line-height: 23px;
`;

const ChoiceSubject = styled(ChoiceBox)`
  background-color: #5cdde5;
  color: white;
`;

const ChoiceSmallBox = styled.div`
  /* width: 170px;
  height: 85px; */
  text-align: center;
  margin: 5px 10px 10px 5px;
  padding: 21px 25px;
  border-radius: 20px;
  box-shadow: 0 0 20px #0000001a;
  font-size: 13px;
  line-height: 13px;
`;

const ChoiceSmallSubject = styled(ChoiceSmallBox)`
  color: white;
  background-color: #5cdde5;
  margin: 5px 5px 10px 10px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 360px;
`;

const MDS5 = styled.p`
  margin-top: 8px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

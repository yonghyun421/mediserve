import React from 'react';
import styled from 'styled-components';
import { ValignTextBottom } from '../../components/ValignTextBottom';
import { SUBJECT_CATEGORY } from './SubjectCategory';
import Next from '../../components/Next/Next';

const Subject = () => {
  return (
    <QnASection>
      <FlexCol>
        <QA>
          <CaretRight src="images/backIcon.png" />
          <span>Q</span>
          <Span1>&amp;</Span1>
          <span>A (의료)</span>
        </QA>
        <Text>
          <span>진료과</span>
        </Text>
        <DivideLine />
      </FlexCol>
      <SubjectSection>
        {SUBJECT_CATEGORY.map((subject, idx) => (
          <MedicalSubject key={idx}>
            <span>{subject}</span>
          </MedicalSubject>
        ))}
      </SubjectSection>
      <Next />
    </QnASection>
  );
};

export default Subject;

const QnASection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 414px;
  height: 896px;
`;

const FlexCol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 415px;
  min-height: 200px;
  margin-right: 1px;
`;

const CaretRight = styled.img`
  position: absolute;
  width: 10px;
  left: 20px;
`;

const QA = styled.div`
  display: flex;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 10px;
  white-space: nowrap;
  font-size: 37px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Span1 = styled.span`
  font-size: 25px;
  line-height: 27px;
`;

const DivideLine = styled.div`
  width: 356px;
  height: 2px;
  margin-left: 1px;
  background-color: #e5e5e5;
`;

const Text = styled.div`
  width: 145px;
  height: 24px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0;
  font-size: 24px;
  line-height: 24px;
  margin: 22px;
  white-space: nowrap;
`;

const MedicalSubject = styled.div`
  width: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  margin: 1px;
  padding: 17px 8px;
  box-shadow: 0 0 20px #0000001a;
  font-size: 13px;
  line-height: 13px;
  font-weight: 600;
`;

const MDS5 = styled.p`
  ${ValignTextBottom}
  width: 126px;
  height: 14px;
  margin-top: 8px;
  margin-right: 10px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const SubjectSection = styled.div`
  width: 380px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 9px 0 9px;
`;

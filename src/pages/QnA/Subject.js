import React, { useState } from 'react';
import styled from 'styled-components';
import { ValignTextBottom } from '../../components/ValignTextBottom';
import { SUBJECT_CATEGORY } from './SubjectCategory';
import Next from '../../components/Next/Next';
import QnATab from '../../components/QnA/QnATab';

const Subject = () => {
  const [category, setCategory] = useState('');

  const selectSubject = e => {
    console.log(e.target.getAttribute('name'));
    setCategory(e.target.getAttribute('name'));
    console.log(category);
  };

  return (
    <QnASection>
      <FlexCol>
        <QnATab />
        <Text>
          <span>진료과</span>
        </Text>
        <DivideLine />
      </FlexCol>
      <SubjectSection>
        {SUBJECT_CATEGORY.map((subject, idx) => (
          <MedicalSubject key={idx} name={subject} onClick={selectSubject}>
            {subject}
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
  min-height: 200px;
  margin-right: 1px;
`;

const DivideLine = styled.div`
  width: 356px;
  padding: 1px 0;
  margin-left: 1px;
  background-color: #e5e5e5;
`;

const Text = styled.div`
  font-weight: 600;
  text-align: center;
  letter-spacing: 0;
  font-size: 24px;
  line-height: 24px;
  margin: 22px;
  white-space: nowrap;
`;

const MedicalSubject = styled.div`
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

const SubjectSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 9px 0 9px;
`;

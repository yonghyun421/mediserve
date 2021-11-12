import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SUBJECT_CATEGORY } from './SubjectCategory';
import Next from '../../components/Next/Next';
import QnATab from '../../components/QnA/QnATab';
import { Link } from 'react-router-dom';

const Subject = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(SUBJECT_CATEGORY);
  }, []);

  const selectSubject = e => {
    setCategory(
      Category.map(a =>
        a.id === Number(e.target.id)
          ? { ...a, checked: !a.checked }
          : { ...a, checked: false }
      )
    );
  };

  return (
    <>
      <FlexCol>
        <QnATab />
        <Text>
          <span>진료과</span>
        </Text>
        <DivideLine />
      </FlexCol>
      <SubjectSection>
        {Category?.map((subject, idx) => (
          <MedicalSubject
            key={idx}
            id={subject.id}
            name={subject.subject}
            onClick={selectSubject}
            checked={subject.checked}
          >
            {subject.subject}
          </MedicalSubject>
        ))}
      </SubjectSection>
      <LinkBtn to="/detail">
        <Next Title="NEXT" />
      </LinkBtn>
    </>
  );
};

export default Subject;

const FlexCol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 200px;
  margin-right: 1px;
`;

const DivideLine = styled.div`
  width: 85%;
  padding: 1px 0;
  background-color: #e5e5e5;
  margin: 24px auto 12px auto;
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

  background-color: ${props => (props.checked ? '#5bdde5;' : '#ffffff;')};
  /* background-color: #5cdde6; */
  color: ${props => (props.checked ? '#ffffff;' : 'black;')};

  &:hover {
    background-color: #5cdde6;
    color: white;
  }
`;

const SubjectSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 9px 0 9px;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

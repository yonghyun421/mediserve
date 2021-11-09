import React from 'react';
import styled from 'styled-components';
import DoctorList from './DoctorList';
import QnATab from '../../components/QnA/QnATab';
import QBox from '../../components/Box/QBox';

const Answer = () => {
  return (
    <>
      <QnATab />
      <Expert>
        <ExpertIcon src="images/people.png" />
        <ExpertTitle>
          <span>전문가 상담</span>
        </ExpertTitle>
        <ExpertLine />
      </Expert>
      <DoctorList />
      <QBox Title="질문 1" />
      <QBox Title="답변 1" />
      <QBox Title="질문 2" />
      <SubmitBox>
        <Submit src="images/Question.png" />
      </SubmitBox>
    </>
  );
};

export default Answer;

const Expert = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const ExpertIcon = styled.img`
  width: 24px;
  height: 28px;
  margin-left: 31px;
  z-index: 1;
`;

const ExpertTitle = styled.div`
  display: flex;
  align-items: flex-end;
  height: 24px;
  width: 178px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 700;
`;

const ExpertLine = styled.div`
  position: absolute;
  background-color: #a7ebf0;
  height: 7px;
  width: 156px;
  left: 20px;
  bottom: -3px;
  z-index: 0;
`;

const Submit = styled.img`
  height: 50px;
  width: 150px;
`;

const SubmitBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  margin: 20px 0 100px 0;
  padding-right: 33px;
`;

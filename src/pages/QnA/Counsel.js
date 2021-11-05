import React from 'react';
import styled from 'styled-components';
import Credit from '../../components/Credit/Credit';
import QnATab from '../../components/QnA/QnATab';
import DoctorList from './DoctorList';

const Counsel = () => {
  return (
    <QnASection>
      <QnATab />
      <Expert>
        <ExpertIcon src="images/people.png" />
        <ExpertTitle>
          <span>전문가 상담</span>
        </ExpertTitle>
        <ExpertLine />
      </Expert>
      <DoctorList />
      <Question>
        <QTab>질문 1</QTab>
      </Question>
      <Credit />
      <SubmitBox>
        <Submit src="images/submit.png" />
      </SubmitBox>
    </QnASection>
  );
};

export default Counsel;

const QnASection = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

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
  padding-bottom: 4px;
  width: 178px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 700;
`;

const ExpertLine = styled.div`
  position: absolute;
  background-color: #a7ebf0;
  padding: 3px 0;
  width: 156px;
  left: 20px;
  bottom: -3px;
  z-index: 0;
`;

const QTab = styled.div`
  position: absolute;
  left: -12px;
  top: -18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 17px;
  border-radius: 15px;
  color: white;
  font-size: 18px;
  background-color: #646363;
`;

const Question = styled.div`
  position: relative;
  width: 350px;
  height: 375px;
  border-radius: 20px;
  background-color: #f5f5f5;
  margin: 31px 0 20px 0;
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
  margin-bottom: 18px;
  padding-right: 33px;
`;

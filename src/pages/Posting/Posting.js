import React from 'react';
import styled from 'styled-components';
import DoctorList from '../../pages/QnA/DoctorList';
import Tab from '../../components/Tab';
import QBox from '../../components/Box/QBox';
import SmallBtn from '../../components/Box/SmallBtn';
import PayMsg from '../../components/PayMsg';

const Posting = () => {
  return (
    <QnASection>
      <Tab Na="포스팅 의뢰" />
      <Expert>
        <ExpertIcon src="images/people.png" />
        <ExpertTitle>
          <span>전문가 상담</span>
        </ExpertTitle>
        <ExpertLine />
      </Expert>
      <DoctorList />
      <QBox Title="포스팅 의뢰 제목" />
      <QBox Title="포스팅 의뢰 내용" />
      <PayMsg credit="2.5" />
      <BtnBox>
        <SmallBtn Title="의뢰하기" />
      </BtnBox>
    </QnASection>
  );
};

export default Posting;

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
  margin-top: 13px;
`;

const ExpertIcon = styled.img`
  margin-left: 31px;
  z-index: 1;
`;

const ExpertTitle = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 5px 10px;
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

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 32px 14px 0;
`;

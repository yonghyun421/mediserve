import React from 'react';
import styled from 'styled-components';
import DoctorList from './DoctorList';
import QnATab from '../../components/QnA/QnATab';
import Credit from '../../components/Credit/Credit';
import QBox from '../../components/Box/QBox';

const COUNSEL_PROCESS = {
  Q: ['상담은 어떻게 진행되나요?'],
  A: ['저도 모르겠습니다'],
};

const Doc = {
  pic: 'images/picture1.png',
  name: '홍길동',
  rating: 4,
  profile:
    '의사(醫師, medical doctor, physician)는 현대의학의 전문가로서 인체의 질병, 손상, 각종 신체 혹은 정신의 이상을 연구하고 진단, 치료함으로써 인간의 건강을 증진하고 유지하며 회복시키는 일을 수행하는 사람을 말한다.',
  job: true,
};

const MoreCounsel = () => {
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
      <DoctorList Doctor={Doc} />
      <QBox Title="질문 1" Content={COUNSEL_PROCESS.Q[0]} />
      <QBox Title="답변 1" Content={COUNSEL_PROCESS.A[0]} />
      <QBox Title="질문 2" />
      <Credit />
      <SubmitBox>
        <Submit src="images/submit.png" />
      </SubmitBox>
    </>
  );
};

export default MoreCounsel;

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
  padding-bottom: 3px;
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
  margin-bottom: 18px;
  padding-right: 33px;
`;

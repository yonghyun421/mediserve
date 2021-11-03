import React from 'react';
import styled from 'styled-components';
import DoctorList from './DoctorList';
import HomeBtn from '../../components/HomeBtn';

const MoreCounsel = () => {
  return (
    <QnASection>
      <QA>
        <span>Q</span>
        <Span1>&amp;</Span1>
        <span>A</span>
      </QA>
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
      <AnswerBox>
        <AnswerTab>답변 1</AnswerTab>
      </AnswerBox>
      <Question2>
        <QTab2>질문 2</QTab2>
      </Question2>
      <MdsBox>
        <Mds>MDS포인트</Mds>
        <MdsCount>2.5</MdsCount>
        <Mds>개를 지불 합니다.</Mds>
      </MdsBox>
      <SubmitBox>
        <Submit src="images/submit.png" />
      </SubmitBox>
      <HomeBtn />
    </QnASection>
  );
};

export default MoreCounsel;

const QnASection = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const QA = styled.div`
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
  font-size: 37px;
  padding-bottom: 10px;
`;

const Span1 = styled.span`
  font-size: 25px;
  line-height: 27px;
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

const QTab = styled.div`
  position: absolute;
  left: -12px;
  top: -18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 15px;
  color: white;
  background-color: #646363;
`;

const Question = styled.div`
  position: relative;
  width: 350px;
  height: 62px;
  border-radius: 20px;
  background-color: #f5f5f5;
  margin: 31px 0 0 0;
`;

const QTab2 = styled.div`
  position: absolute;
  left: -12px;
  top: -18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 15px;
  color: white;
  background-color: #3db8c0;
`;

const Question2 = styled.div`
  position: relative;
  width: 350px;
  height: 200px;
  border-radius: 20px;
  background-color: rgba(92, 221, 229, 0.2);
  margin: 31px 0 20px 0;
`;

const MdsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 46px;
  margin-bottom: 19px;
`;

const Mds = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 23px;
  letter-spacing: 0;
  margin-bottom: 1px;
  font-size: 20px;
`;

const MdsCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 27px;
  letter-spacing: 0;
  width: 60px;
  margin: 0 5px;
  background-color: #5cdde5;
  font-size: 24px;
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

const AnswerBox = styled.div`
  position: relative;
  width: 350px;
  height: 75px;
  border-radius: 20px;
  background-color: #f5f5f5;
  margin: 33px 0 0 0;
`;

const AnswerTab = styled.div`
  position: absolute;
  left: -12px;
  top: -18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 15px;
  color: white;
  background-color: #646363;
`;

import React from 'react';
import styled from 'styled-components';
import DoctorList from '../../pages/QnA/DoctorList';
import Tab from '../../components/Tab';
import DocMsg from './DocMsg';
import PatientMsg from './PatientMsg';

const PostingChat = () => {
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
      <AcceptMsg>포스팅 의뢰 수락 되었습니다.</AcceptMsg>
      <ChatBox>
        <ChatTab>대화창</ChatTab>
        <DocMsg
          Pic="picture1.png"
          Text="최신자료를 엑셀로 보내주실 수 있나요?"
        />
        <PatientMsg
          Pic="sunny.png"
          Text="네, 이메일로 바로 보내드리겠습니다."
        />
        <DocMsg Pic="picture1.png" Text="확인 후 포스팅 하겠습니다." />
      </ChatBox>
    </QnASection>
  );
};

export default PostingChat;

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
  color: #014d52;
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

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 32px 14px 0;
`;

const ChatBox = styled.div`
  position: relative;
  width: 350px;
  /* height: 62px; */
  border-radius: 20px;
  background: rgba(75, 226, 236, 0.2);
  margin: 31px 0 0 0;
  padding-top: 21px;
`;

const ChatTab = styled.div`
  position: absolute;
  left: -12px;
  top: -18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 15px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  padding: 8px 17px;
  color: white;
  background-color: #3db8c0;
`;

const AcceptMsg = styled.p`
  width: 100%;
  color: #014d52;
  padding: 13px 34px;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

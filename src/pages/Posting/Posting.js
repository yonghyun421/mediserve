import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DoctorList from '../../pages/QnA/DoctorList';
import Tab from '../../components/Tab';
import QBox from '../../components/Box/QBox';
import SmallBtn from '../../components/Box/SmallBtn';
import PayMsg from '../../components/PayMsg';
import { Link } from 'react-router-dom';

const Doc = {
  pic: 'images/picture1.png',
  name: '홍길동',
  rating: 4,
  profile:
    'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasda',
  job: true,
};

const Posting = () => {
  const [question, setQuestion] = useState({ T: '', Q: '' });
  const [message, setMessage] = useState('');

  const writeQuestion = e => {
    setMessage(e.target.value.trim());
  };

  const makeQuestion = e => {
    setQuestion(question);
    const { id, value } = e.target;
    if (window.event.keyCode === 13) {
      setQuestion({ ...question, [id]: value });
    }
  };

  const storeQuestion = () => {
    localStorage.setItem('Question', JSON.stringify({ ...question }));
  };

  useEffect(() => {
    setQuestion(question);
  }, [question]);

  return (
    <>
      <Tab Na="포스팅 의뢰" />
      <Expert>
        <ExpertIcon src="images/people.png" />
        <ExpertTitle>
          <span>전문가 상담</span>
        </ExpertTitle>
        <ExpertLine />
      </Expert>
      <DoctorList Doctor={Doc} />
      <QBox
        Title="포스팅 의뢰 제목"
        id="T"
        writeQuestion={writeQuestion}
        makeQuestion={makeQuestion}
      />
      <QBox
        Title="포스팅 의뢰 내용"
        id="Q"
        writeQuestion={writeQuestion}
        makeQuestion={makeQuestion}
      />
      <PayMsg credit="2.5" />
      <BtnBox>
        <LinkBtn to="/postingResult">
          <SmallBtn Title="의뢰하기" onClick={storeQuestion()} />
        </LinkBtn>
      </BtnBox>
    </>
  );
};

export default Posting;

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
  margin-bottom: 100px;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

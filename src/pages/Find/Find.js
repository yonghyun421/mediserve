import React, { useState } from 'react';
import styled from 'styled-components';
import BackTab from '../../components/BackTab';
import HomeBtn from '../../components/HomeBtn';
import Next from '../../components/Next/Next';
import FindResult from './FindResult';

const Find = () => {
  const [name, setName] = useState('');

  // input 창에 입력된 병원이름 받기
  const Hospital = e => {
    setName(e.target.value);
  };

  console.log(name);
  return (
    <QnASection>
      <BackTab Na="병원 문전 약국 찾기" />
      <FindSection>
        <FindTitle>
          <span>병원 검색</span>
        </FindTitle>
        <InputBox>
          <Input placeholder="보라매병원" onChange={Hospital} />
        </InputBox>
      </FindSection>
      <FindResult result={name} />
      <Next />
      <HomeBtn />
    </QnASection>
  );
};

export default Find;

const QnASection = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const FindSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 41px 0 12px 0;
`;

const InputBox = styled.div`
  width: 225px;
  height: 40px;
  margin-left: 20px;
  background-color: #f5f5f5;
  opacity: 0.3;
  border: 3px solid #7ae0cc;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 8px;
  border: none;
`;

const FindTitle = styled.div`
  font-size: 20px;
  line-height: 19.8px;
  font-weight: 700;
  color: #333333;
`;

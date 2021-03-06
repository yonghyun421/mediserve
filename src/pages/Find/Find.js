import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackTab from '../../components/BackTab';
import Next from '../../components/Next/Next';
import FindResult from './FindResult';

const Find = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  // input 창에 입력된 병원이름 받기
  const Hospital = e => {
    setName(e.target.value);
  };

  const searchHospital = e => {
    if (window.event.keyCode === 13) {
      setResult(name);
    }
  };

  useEffect(() => {
    setResult(name);
  }, [name]);

  return (
    <>
      <BackTab Na="병원 문전 약국 찾기" />
      <FindSection>
        <FindTitle>
          <span>병원 검색</span>
        </FindTitle>
        <InputBox>
          <Input
            placeholder="보라매병원"
            onChange={Hospital}
            onKeyDow={searchHospital}
          />
        </InputBox>
      </FindSection>
      <FindResult result={result} />
      <Next Title="NEXT" />
    </>
  );
};

export default Find;

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

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Loading = () => {
  let [dotNumber, setDotNumber] = useState(0);

  const countplus = () => {
    setDotNumber(dotNumber++);
  };

  const plusSec = () => {
    setInterval(countplus, 300);
  };

  const changeActive = (dotNumber, idx) => {
    if (idx === (dotNumber + 1) % 5) {
      return true;
    }
  };

  useEffect(() => {
    plusSec();
  }, []);

  console.log(dotNumber);

  return (
    <Wrapper>
      <Title>접수중</Title>
      <DotWrapper>
        {DOTS.map((content, idx) => (
          <Dot isActive={changeActive(dotNumber, idx)} />
        ))}
      </DotWrapper>
      <Content>약사가 처방전을 확인 중에 있습니다.</Content>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 414px;
  height: 596px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Title = styled.div`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  color: #3db8c0;
`;
const DotWrapper = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? '#3DB8C0;' : '#c4c4c4;')};
  border: none;
  margin-right: 24px;
`;

const Content = styled.div`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  color: #333333;
`;

const DOTS = [1, 2, 3, 4, 5];

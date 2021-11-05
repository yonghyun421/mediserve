import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoadingBar = () => {
  let [dotNumber, setDotNumber] = useState(0);

  const countplus = () => {
    setDotNumber(dotNumber++);
  };

  const plusSec = () => {
    setInterval(countplus, 500);
  };

  const changeActive = (dotNumber, idx) => {
    if (idx === dotNumber % DOTS.length) {
      return true;
    }
  };

  useEffect(() => {
    plusSec();
  }, []);

  return (
    <DotWrapper>
      {DOTS.map((content, idx) => (
        <Dot isActive={changeActive(dotNumber, idx)} />
      ))}
    </DotWrapper>
  );
};

export default LoadingBar;

const DotWrapper = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 24px;
  border: none;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? '#3DB8C0;' : '#c4c4c4;')};
`;
const DOTS = [1, 2, 3, 4, 5, 6];

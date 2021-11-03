import React from 'react';
import styled from 'styled-components';
import { ValignTextBottom } from '../ValignTextBottom';

const Next = () => {
  return (
    <Next1>
      <Title />
    </Next1>
  );
};

export default Next;

const Next1 = styled.div`
  height: 50px;
  display: flex;
  padding: 0 144px;
  align-items: center;
  min-width: 349px;
  border-radius: 20px;
  background-size: 100% 100%;
  background-image: url('./images/nextBtn.png');
`;

const Title = styled.h1`
  ${ValignTextBottom}
  height: 24px;
  min-width: 61px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

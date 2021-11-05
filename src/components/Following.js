import React from 'react';
import styled from 'styled-components';

const Following = ({ content, grade }) => {
  return <Button grade={grade}>{content}</Button>;
};

export default Following;

const Button = styled.div`
  width: ${({ grade }) => (grade === 'ama' ? '186px;' : '120px;')};
  height: 30px;
  border-radius: 5px;
  background: linear-gradient(90.1deg, #7ae0cc -2.23%, #47b1d1 99.89%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

import React from 'react';
import styled from 'styled-components';

const SmallBtn = ({ Title }) => {
  return <Button>{Title}</Button>;
};

export default SmallBtn;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 37px;
  background: linear-gradient(90.1deg, #7ae0cc -2.23%, #47b1d1 99.89%);
  border-radius: 20px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: white;
`;

import React from 'react';
import styled from 'styled-components';

const Rates = ({ Title, Num }) => {
  return (
    <CountBox>
      <CountTitle>{Title}</CountTitle>
      <CountNum>{Num}</CountNum>
    </CountBox>
  );
};

export default Rates;

const CountBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CountTitle = styled.div``;

const CountNum = styled.div``;

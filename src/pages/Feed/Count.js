import React from 'react';
import styled from 'styled-components';
import DocRating from '../../components/DocRating/DocRating';

const Count = ({ Title, Num }) => {
  return (
    <CountBox>
      <CountTitle>{Title}</CountTitle>
      <CountNum>{Num === 'Rate' ? <DocRating /> : Num}</CountNum>
    </CountBox>
  );
};

export default Count;

const CountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const CountTitle = styled.div`
  padding-right: 30px;
`;

const CountNum = styled.div``;

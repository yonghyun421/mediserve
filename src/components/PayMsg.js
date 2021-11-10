import React from 'react';
import styled from 'styled-components';

const PayMsg = ({ credit }) => {
  return (
    <MdsBox>
      <Mds>MDS포인트</Mds>
      <MdsCount>{credit}</MdsCount>
      <Mds>개가 차감됩니다.</Mds>
    </MdsBox>
  );
};

export default PayMsg;

const MdsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 20px auto;
  color: #014d52;
`;

const Mds = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 20px;
  font-weight: 700;
`;

const MdsCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin: 0 5px;
  background: rgba(92, 221, 230, 0.2);
  font-size: 24px;
`;

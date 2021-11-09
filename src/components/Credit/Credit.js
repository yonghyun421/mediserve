import React from 'react';
import styled from 'styled-components';

const Credit = () => {
  return (
    <MdsBox>
      <Mds>MDS포인트</Mds>
      <MdsCount>2.5</MdsCount>
      <Mds>개가 차감됩니다.</Mds>
    </MdsBox>
  );
};

export default Credit;

const MdsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 46px;
  margin-bottom: 19px;
`;

const Mds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #014d52;
`;

const MdsCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin: 0 5px;
  background: rgba(92, 221, 230, 0.2);
  font-size: 24px;
`;

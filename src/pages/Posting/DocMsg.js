import React from 'react';
import styled from 'styled-components';

const DocMsg = ({ Text, Pic }) => {
  return (
    <MsgBox>
      <Profile src={`/images/${Pic}`} />
      <Msg>{Text}</Msg>
    </MsgBox>
  );
};

export default DocMsg;

const MsgBox = styled.div`
  width: 100%;
  padding: 18px 22px;
  display: flex;
  justify-content: flex-start;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`;

const Msg = styled.div`
  width: 145px;
  background: #e5e5e5;
  border-radius: 10px;
  padding: 8px 7px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
`;

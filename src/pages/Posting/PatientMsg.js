import React from 'react';
import styled from 'styled-components';

const PatientMsg = ({ Text, Pic }) => {
  return (
    <MsgBox>
      <Msg>{Text}</Msg>
      <Profile src={`/images/${Pic}`} />
    </MsgBox>
  );
};

export default PatientMsg;

const MsgBox = styled.div`
  width: 100%;
  padding: 18px 22px;
  display: flex;
  justify-content: flex-end;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 12px;
`;

const Msg = styled.div`
  width: 145px;
  background: #ffffff;
  border-radius: 10px;
  padding: 8px 7px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
`;

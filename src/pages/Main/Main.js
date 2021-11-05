import React, { useState } from 'react';
import Content from '../../components/Content/Content';
import Profile from '../../components/Content/Profile';
import Rating from '../../components/Content/Rating';
import styled from 'styled-components';

const Main = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const modalToggle = () => {
    setIsModalOn(!isModalOn);
  };

  const today = () => {
    const today = new Date();
    let month = `${today.getMonth() + 1}`;
    let day = `${today.getDate()}`;
    const year = today.getFullYear();
    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    const getDate = `${year}년 ${month}월 ${day}일`;
    return `${getDate}`;
  };

  return (
    <Wrapper>
      <Profile
        modalToggle={modalToggle}
        isModalOn={isModalOn}
        Name="Scalpel"
        Class="M-class"
        ProfildImg="/images/picture1.png"
        DoctorIconImg="/images/doctor.png"
      />
      <Rating />
      <Content />
      <Replys />
      <Days>{today()}</Days>
    </Wrapper>
  );
};

export default Main;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 414px;
`;

const Replys = styled.div``;
const Days = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #646363;
  margin: 8px 13px;
`;

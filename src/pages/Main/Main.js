import React, { Component } from 'react';
import Content from '../../components/Content/Content';
import styled from 'styled-components';

class Main extends Component {
  today = () => {
    const today = new Date();
    let month = `${today.getMonth() + 1}`;
    let day = `${today.getDate()}`;
    const year = today.getFullYear();
    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    const getDate = `${year}년 ${month}월 ${day}일`;
    return `${getDate}`;
  };

  render() {
    return (
      <Wrapper>
        <Content />
        <Replys />
        <Days>{this.today()}</Days>
      </Wrapper>
    );
  }
}

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

import React, { useState } from 'react';
import styled from 'styled-components';

const MainColorBtn = ({ Body, backToCamera }) => {
  return (
    <Wrapper onClick={backToCamera} Body={Body}>
      <Title>{Body}</Title>
    </Wrapper>
  );
};

export default MainColorBtn;

const Wrapper = styled.button`
  width: 8rem;

  height: 3rem;
  background: ${props =>
    props.Body === '취소' || props.Body === '재촬영' || props.Body === '취소'
      ? 'lightgray;'
      : 'linear-gradient(90.1deg, #7ae0cc -2.23%, #47b1d1 99.89%);'};
  border-radius: 20px;
  border: none;
  margin: 0rem 1rem;
`;
const Title = styled.p`
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
`;

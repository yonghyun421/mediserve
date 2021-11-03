import React from 'react';
import styled from 'styled-components';

const MainColorBtn = ({ Body }) => {
  return (
    <Wrapper Body={Body}>
      <Title>{Body}</Title>
    </Wrapper>
  );
};

export default MainColorBtn;
const Wrapper = styled.button`
  width: 150px;
  height: 50px;
  background: ${props =>
    props.Body === '취소' || props.Body === '재촬영'
      ? 'lightgray;'
      : 'linear-gradient(90.1deg, #7ae0cc -2.23%, #47b1d1 99.89%);'};
  border-radius: 20px;
  border: none;
`;
const Title = styled.p`
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
`;

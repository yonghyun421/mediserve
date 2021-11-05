import React from 'react';
import styled from 'styled-components';

const SortBtn = () => {
  return (
    <SortBox>
      <Sort>평점순</Sort>
      <Sort>캐럿순</Sort>
      <Sort>상담건수순</Sort>
    </SortBox>
  );
};

export default SortBtn;

const SortBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 28px;
`;

const Sort = styled.div`
  width: 110px;
  padding: 10px 18px;
  background-color: #e5e5e5;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5cdde5;
    color: white;
  }
`;

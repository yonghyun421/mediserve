import React from 'react';
import styled from 'styled-components';

const QBox = ({ Title }) => {
  return (
    <Question>
      <QTab>{Title}</QTab>
    </Question>
  );
};

export default QBox;

const QTab = styled.div`
  position: absolute;
  left: -12px;
  top: -18px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 80px; */
  height: 40px;
  border-radius: 15px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  padding: 8px 17px;
  color: white;
  background-color: #646363;
`;

const Question = styled.div`
  position: relative;
  width: 350px;
  height: 62px;
  border-radius: 20px;
  background-color: #f5f5f5;
  margin: 31px 0 0 0;
`;

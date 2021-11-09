import React from 'react';
import styled from 'styled-components';

const QBox = ({ Title }) => {
  return (
    <QSection>
      <QTab>{Title}</QTab>
      <Question>
        이 질문은 쌸라쌸라 어쩌구저쩌구 이 질문은 쌸라쌸라 어쩌구저쩌구 이
        질문은 쌸라쌸라 어쩌구저쩌구 이 질문은 쌸라쌸라 어쩌구저쩌구 이 질문은
        쌸라쌸라 어쩌구저쩌구 이 질문은 쌸라쌸라 어쩌구저쩌구이 질문은 쌸라쌸라
        어쩌구저쩌구 이 질문은 쌸라쌸라 어쩌구저쩌구 이 질문은 쌸라쌸라
        어쩌구저쩌구 이 질문은 쌸라쌸라 어쩌구저쩌구 이 질문은 쌸라쌸라
        어쩌구저쩌구 이 질문은 쌸라쌸라 어쩌구저쩌구
      </Question>
    </QSection>
  );
};

export default QBox;

const QSection = styled.div`
  width: 100%;
  padding: 0 33px;
`;

const QTab = styled.span`
  position: relative;
  left: -14px;
  top: 30px;
  color: white;
  background-color: #646363;
  padding: 8px 12px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 15px;
`;

const Question = styled.div`
  border-radius: 20px;
  background-color: #f5f5f5;
  margin: 21px 0 0 0;
  padding: 30px;
`;

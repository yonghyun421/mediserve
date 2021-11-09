import React from 'react';
import styled from 'styled-components';

const ReplyInput = () => {
  return (
    <Wrapper>
      <ReplyInputContent type="text" />
      <SendButton>게시</SendButton>
    </Wrapper>
  );
};

export default ReplyInput;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 10px 2px 0px;
  margin: 10px 10px 0px 10px;
  border: 1px solid lightgrey;
  font-size: 20px;
`;

const ReplyInputContent = styled.input`
  border: 0;
  width: 80%;
`;
const SendButton = styled.button`
  background-color: white;
  border: 0;
  color: #4ae2eb;
`;

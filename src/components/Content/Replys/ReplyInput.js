import React, { useRef } from 'react';
import styled from 'styled-components';

const ReplyInput = ({ handleAdd, handleAddByEnter }) => {
  const inputRef = useRef();
  const onSubmit = event => {
    event.preventDefault();
    const replyInput = inputRef.current.value;
    replyInput && handleAdd(replyInput);
    inputRef.current.value = '';
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <ReplyInputContent type="text" ref={inputRef} />
      <SendButton onKeyPress={handleAddByEnter}>게시</SendButton>
    </Wrapper>
  );
};

export default ReplyInput;

const Wrapper = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 2px 10px 2px 0px;
  margin: 20px 10px 0px 10px;
  border: 1px solid lightgrey;
  font-size: 20px;
`;

const ReplyInputContent = styled.input`
  border: 0;
  width: 89%;
`;
const SendButton = styled.button`
  background-color: white;
  border: 0;
  color: #4ae2eb;
`;

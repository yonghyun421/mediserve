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
      <ReplyInputContent
        placeholder="댓글 입력하기.."
        type="text"
        ref={inputRef}
      />
      <SendButton onKeyPress={handleAddByEnter}>게시</SendButton>
    </Wrapper>
  );
};

export default ReplyInput;

const Wrapper = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 0px 15px;
  font-size: 20px;
`;

const ReplyInputContent = styled.input`
  border: 0;
  width: 89%;
  outline: none;
`;
const SendButton = styled.button`
  background-color: white;
  padding: 0px 0px;
  border: 0;
  color: #4ae2eb;
`;

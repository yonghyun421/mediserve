import React from 'react';
import styled from 'styled-components';

const Reply = ({ reply, handleDelete, comment_writer, comment_content }) => {
  const replyDelete = () => {
    handleDelete(reply);
  };

  return (
    <Wrapper>
      <ReplyLeft>
        <OwnerId>
          <b>{comment_writer}</b>
        </OwnerId>
        <Content>{comment_content}</Content>
      </ReplyLeft>
      <ReplyRight>
        <DeleteBtn onClick={replyDelete}>X</DeleteBtn>
      </ReplyRight>
    </Wrapper>
  );
};

export default Reply;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 10px 2px 0px;
  font-size: 20px;
  height: 15px;
  margin: 3px 0px;
`;
const ReplyLeft = styled.div`
  margin-left: 10px;
  padding: 2px 0px 0px 3px;
`;
const OwnerId = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  padding-right: 3px;
`;
const Content = styled.span`
  width: 100%;
  word-break: break-all;
  font-size: 14px;
  line-height: 16px;
`;
const ReplyRight = styled.div``;
const DeleteBtn = styled.button`
  background-color: white;
  border: 0;
`;

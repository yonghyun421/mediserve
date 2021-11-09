import React from 'react';
import styled from 'styled-components';

const Reply = ({ handleDelete, comment_writer, comment_content }) => {
  console.log(comment_content);
  return (
    <Wrapper>
      <ReplyLeft>
        <OwnerId>
          <b>{comment_writer}</b>
        </OwnerId>
        <Content>{comment_content}</Content>
      </ReplyLeft>
      <ReplyRight>
        <DeleteBtn onClick={handleDelete}>X</DeleteBtn>
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
  height: 10px;
  margin: 5px 0px;
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
  font-size: 14px;
  line-height: 16px;
`;
const ReplyRight = styled.div``;
const DeleteBtn = styled.button`
  background-color: white;
  border: 0;
`;

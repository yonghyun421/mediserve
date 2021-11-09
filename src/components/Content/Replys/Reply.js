import React from 'react';
import styled from 'styled-components';

const Reply = () => {
  return (
    <Wrapper>
      <ReplyLeft>
        <OwnerId>{/* <b>{userId}</b> */}</OwnerId>
        <Content>{/* {content} */}</Content>
      </ReplyLeft>
      <ReplyRight>
        <DeleteBtn>X</DeleteBtn>
      </ReplyRight>
    </Wrapper>
  );
};

export default Reply;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2px 10px 2px 0px;
  font-size: 20px;
`;
const ReplyLeft = styled.div`
  margin-left: 10px;
  padding: 2px 0px 0px 3px;
`;
const OwnerId = styled.span``;
const Content = styled.span``;
const ReplyRight = styled.div``;
const DeleteBtn = styled.button`
  background-color: white;
  border: 0;
`;

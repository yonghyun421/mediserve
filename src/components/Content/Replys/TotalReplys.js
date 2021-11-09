import React, { useState } from 'react';
import Replys from './Replys';
import styled from 'styled-components';

const TotalReplys = ({ comment_info, posting_info }) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const replyOpenToggle = () => {
    setIsReplyOpen(!isReplyOpen);
    console.log(isReplyOpen);
  };
  return (
    <ReplyWrapper>
      {isReplyOpen ? (
        <Replys posting_info={posting_info} comment_info={comment_info} />
      ) : comment_info.length > 0 ? (
        <TotalReplyBtn onClick={replyOpenToggle}>
          {`${comment_info.length}개의 댓글 전체보기`}
        </TotalReplyBtn>
      ) : (
        ''
      )}
    </ReplyWrapper>
  );
};

export default TotalReplys;

const ReplyWrapper = styled.div`
  padding: 2px 10px 2px 0px;
  font-size: 20px;
  margin: 5px 0px;
`;

const TotalReplyBtn = styled.div`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;
  color: #646363;
  margin-left: 10px;
  padding: 2px 0px 0px 3px;
`;

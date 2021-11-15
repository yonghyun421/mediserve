import React, { useState, useEffect } from 'react';
import Reply from './Reply';
import ReplyInput from './ReplyInput';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Replys = ({ comment_info }) => {
  const [totalreplys, setTotalReplys] = useState([]);

  useEffect(() => {
    setTotalReplys(comment_info);
  }, []);

  const handleDelete = reply => {
    const replys = totalreplys.filter(
      item => item.comment_id !== reply.comment_id
    );
    setTotalReplys(replys);
  };

  const handleAdd = replyInput => {
    if (replyInput.trim() === '') {
      return;
    }
    const replys = [
      ...totalreplys,
      {
        comment_content: replyInput,
        comment_writer: comment_info.comment_writer
          ? comment_info.comment_writer
          : '원래는 로그인 유저아이디 들어가야됌',
      },
    ];
    setTotalReplys(replys);
  };

  const handleAddByEnter = e => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <>
      <Wrapper>
        {totalreplys.map(reply => {
          return (
            <Reply
              reply={reply}
              handleDelete={handleDelete}
              comment_writer={reply.comment_writer}
              comment_content={reply.comment_content}
            />
          );
        })}
      </Wrapper>
      <ReplyInput handleAdd={handleAdd} handleAddByEnter={handleAddByEnter} />
    </>
  );
};

const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

export default Replys;
const Wrapper = styled.div`
  margin-bottom: 30px;
`;

import React, { useState } from 'react';
import Reply from './Reply';
import ReplyInput from './ReplyInput';

const Replys = () => {
  const [replys, setReplys] = useState([]);

  const handleDelete = reply => {
    const replys = replys.filter(item => item.id !== reply.id);
    setReplys(replys);
  };

  const handleAdd = replyInput => {
    if (replyInput.trim() === '') {
      return;
    }

    const replys = [
      ...replys,
      { id: Date.now(), userId: '71summsernight', comment: replyInput },
    ];
    setReplys(replys);
  };

  const handleAddByEnter = e => {
    if (e.key === 'Enter') {
      this.handleAdd();
    }
  };

  return (
    <>
      <Reply handleDelete={handleDelete} />
      <ReplyInput handleAdd={handleAdd} handleAddByEnter={handleAddByEnter} />
    </>
  );
};

export default Replys;

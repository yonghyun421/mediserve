import { ADD_REPLYS, DELETE_REPLYS } from './type';

export const addReplys = replyInput => {
  return {
    type: 'ADD_REPLYS',
    replyInput: replyInput,
  };
};

export const deleteReplys = () => {
  return {
    type: 'DELETE_REPLYS',
  };
};

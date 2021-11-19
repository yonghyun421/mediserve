import { FOLLOW, UNFOLLOW } from './types';

const initialState = {
  isfollowing: false,
};

const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        isfollowing: true,
      };
    case UNFOLLOW:
      return {
        isfollowing: false,
      };
    default:
      return state;
  }
};
export default followReducer;

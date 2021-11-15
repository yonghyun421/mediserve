import { FOLLOW, UNFOLLOW } from './types';

export const follower = () => {
  return {
    type: FOLLOW,
  };
};

export const unfollower = () => {
  return {
    type: UNFOLLOW,
  };
};

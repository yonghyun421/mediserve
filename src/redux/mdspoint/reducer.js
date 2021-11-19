import { COUNSEL_CHARGE, MDS_CHARGE, MDS_RECHARGE } from './types';

const initialState = {
  mds: 250,
};

const mdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MDS_CHARGE:
      return {
        ...state,
        mds: state.mds - 10,
      };
    case MDS_RECHARGE:
      return {
        ...state,
        mds: state.mds + 10,
      };
    case COUNSEL_CHARGE:
      return {
        ...state,
        mds: state.mds - 2.5,
      };
    default:
      return state;
  }
};
export default mdsReducer;

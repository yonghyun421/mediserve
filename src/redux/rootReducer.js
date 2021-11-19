import { combineReducers } from 'redux';
import followReducer from './following/reducer';
import mdsReducer from './mdspoint/reducer';

const rootReducer = combineReducers({
  mdspoint: mdsReducer,
  following: followReducer,
});

export default rootReducer;

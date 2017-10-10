import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import avatars from './avatars';

const rootReducer = combineReducers({
  user,
  flash,
  avatars,
});

export default rootReducer;
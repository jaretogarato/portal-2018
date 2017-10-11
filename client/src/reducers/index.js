import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import avatars from './avatars';
import courses from './courses';
import sections from './sections';
import groups from './groups';

const rootReducer = combineReducers({
  user,
  flash,
  avatars,
  courses,
  sections,
  groups,
});

export default rootReducer;
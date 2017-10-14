import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import flash from './flash';
import avatars from './avatars';
import courses from './courses';
import sections from './sections';
import groups from './groups';
import activeCourseId from './activeCourseId';
import activeSectionId from './activeSectionId';

const rootReducer = combineReducers({
  user,
  users,
  flash,
  avatars,
  courses,
  sections,
  groups,
  activeCourseId,
  activeSectionId,
});

export default rootReducer;

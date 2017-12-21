import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import flash from './flash';
import avatars from './avatars';
import courses from './courses';
import course from './course';
import userCourses from './userCourses';
import sections from './sections';
import groups from './groups';
import group from './group';
import groupId from './groupId';
import courseId from './courseId';
import lectures from './lectures';
import sectionId from './sectionId';
import currentDate from './currentDate';

const rootReducer = combineReducers({
  user,
  users,
  flash,
  avatars,
  courses,
  course,
  userCourses,
  sections,
  groups,
  group,
  groupId,
  lectures,
  courseId,
  sectionId,
  currentDate,
});

export default rootReducer;

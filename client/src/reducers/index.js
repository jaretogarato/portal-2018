import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import flash from './flash';
import avatars from './avatars';
import courses from './courses';
import course from './course';
import userCourses from './userCourses';
import sections from './sections';
import subSections from './subSections';
import subSection from './subSection';
import subSectionId from './subSectionId';
import courseId from './courseId';
import lectures from './lectures';
import sectionId from './sectionId';
import currentDate from './currentDate';
import quizzes from './quizzes';
import userId from './userId';


const rootReducer = combineReducers({
  user,
  users,
  flash,
  avatars,
  courses,
  course,
  userCourses,
  sections,
  subSections,
  subSection,
  subSectionId,
  lectures,
  courseId,
  sectionId,
  currentDate,
  quizzes,
  userId,
});

export default rootReducer;

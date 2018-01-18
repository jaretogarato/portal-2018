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
import quizQuestions from './quizQuestions';
import quizOptions from './quizOptions';
import quizResponses from './quizResponses';
import singleQuiz from './singleQuiz';
import questionUpdates from './questionUpdates';
import userId from './userId';
import notes from './notes';
import permissions from './permissions';
import groups from './groups';
import courseContent from './courseContent';
import assignments from './assignment';


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
  notes,
  quizOptions,
  singleQuiz,
  quizQuestions,
  questionUpdates,
  quizResponses,
  assignments,
  permissions,
  groups,
  courseContent
});

export default rootReducer;

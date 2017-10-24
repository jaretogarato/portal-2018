import axios from 'axios';

export const getAttendance = (courseId, currentDate) => {
  debugger
  return(dispatch) => {
    axios.get(`/api/courses/${courseId}/attendances`)
  }
}

export const addAttendance = (course_id, students, date) => {
  const fullRecord = { ...students, date, course_id };
  return(dispatch) => {
    axios.post(`/api/courses/${course_id}/attendances`, fullRecord);
  }
}
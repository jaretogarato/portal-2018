import axios from 'axios';

export const addAttendance = (course_id, students, date) => {
  const fullRecord = { ...students, date, course_id };
  return(dispatch) => {
    axios.post(`/api/courses/${course_id}/attendances`, fullRecord);
      // .then(res => {
      //   debugger
      // })
      // .catch( err => {
      //   debugger
      // })
  }
}
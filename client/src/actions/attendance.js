import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';


export const getAttendance = (courseId, currentDate, callback = () => {}) => {
  return(dispatch) => {
    axios.get(`/api/courses/${courseId}/attendances?current_date=${currentDate}`)
      .then( res => {
        dispatch(setHeaders(res.headers));
        callback(res.data)
      }).catch( err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed To Retrieve Attendance', 'red'));
    });
  }
}

export const addAttendance = (course_id, students, date) => {
  const fullRecord = { ...students, date, course_id };
  return(dispatch) => {
    axios.post(`/api/courses/${course_id}/attendances`, fullRecord)
      .then( res => setHeaders(res.headers) )
      .catch( err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed To Post Attendance', 'red'));
    });
  }
}

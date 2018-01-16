import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getCourseContent = () => {
  return(dispatch) => {
    axios.get(`/api/course_contents/`)
      .then( res => {
        dispatch({ type: 'GET_COURSE_CONTENT', courseContent: res.data, headers: res.headers })
      })
      .catch( err => {
        dispatch(setFlash('Failed To Retrieve Course Content', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}

export const clearCourseContent = () => {
  return ({ type: "CLEAR_COURSE_CONTENT", courseContent: [] })
}
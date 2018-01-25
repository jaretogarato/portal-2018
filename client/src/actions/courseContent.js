import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';


export const getCourseContent = () => {
  return(dispatch) => {
    axios.get(`/api/course_contents/`)
      .then( res => {
        dispatch({ type: 'GET_COURSE_CONTENT', courseContent: res.data, headers: res.headers })
      }).catch( err => {
        dispatch(setFlash('Failed To Retrieve Course Content', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}

export const addCourseContent = (course_content) => {
  return(dispatch) => {
    axios.post('/api/course_contents', { course_content } )
      .then( ({data, headers}) => {
        dispatch({ type: "ADD_COURSE_CONTENT", courseContent: data, headers })
      }).catch( err => {
        dispatch(setFlash('Failed To Add Course Content', 'red'))
        dispatch(setHeaders(err.headers))  
    });
  }
}

export const deleteCourseContent = (cc) => {
  return(dispatch) => {
    axios.delete(`/api/course_contents/${cc}`)
      .then( res => dispatch({
        type: 'DELETE_COURSE_CONTENT', cc: cc, headers: res.headers
      })).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed to delete content', 'red'));
    });
  }
}

export const clearCourseContent = () => {
  return ({ type: "CLEAR_COURSE_CONTENT", courseContent: [] })
}
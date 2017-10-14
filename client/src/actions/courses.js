import axios from 'axios';
import { setFlash } from './flash';

export const getCourses = (callback) => {
  return(dispatch) => {
    axios.get('/api/courses')
      .then( res => dispatch({  type: 'GET_COURSES', courses: res. data }))
      .then( callback() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Courses', 'red'));
      });

  }
}

export const addCourse = (course) => {
  return(dispatch) => {
    axios.post('/api/courses', course)
      .then( res => {
        dispatch(setFlash('Course Successfully Created!', 'success'))
        dispatch({ type: 'ADD_COURSE', course: res.data })
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Add Course', 'red'));
    });
  }
}

export const updateCourse = (course) => {
  return(dispatch) => {
    axios.post(`/api/courses/${course.id}`, { course })
      .then( res => dispatch({ type: 'UPDATE_COURSE', course: res.data }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Update Course', 'red'));
    });
  }
}

export const deleteCourse = (course) => {
  return(dispatch) => {
    axios.delete(`/api/courses/${course.id}`)
      .then( res => dispatch({ type: 'DELETE_APP', course }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Delete Course', 'red'));
    });
  }
}
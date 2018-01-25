import axios from 'axios';
import { setFlash } from './flash';


export const setCourse = (courseId) => {
  return { type: 'SET_COURSE', courseId };
};

export const getCourses = () => {
  return(dispatch) => {
    axios.get('/api/courses')
      .then( res => {
        dispatch({  type: 'GET_COURSES', courses: res.data, headers: res.headers })
      }).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Courses', 'red'));
    });
  }
}

export const getCoursesByStudent = (userId) => {
  return(dispatch) => {
    axios.get(`/api/user_courses/${userId}`)
      .then( ({ data, headers } ) => {
        dispatch({ type: 'GET_USER_COURSES', userCourses: data, headers })
      }).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve User Courses', 'red'));
    });
  }
}

export const addCourse = (course) => {
  return(dispatch) => {
    axios.post('/api/courses', course)
      .then( res => {
        dispatch(setFlash('Course Successfully Created!', 'success'))
        dispatch({ type: 'ADD_COURSE', course: res.data, headers: res.headers })
      }).catch( err => {
        const message = err.response.data.errors;
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash(message, 'red'));
    });
  }
}

export const updateCourse = (course, id) => {
  return(dispatch) => {
    axios.put(`/api/courses/${id}`, { course })
      .then( res => {
        dispatch({ type: 'UPDATE_COURSE', course: res.data, headers: res.headers });
      }).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Update Course', 'red'));
    });
  }
}

export const deleteCourse = (course) => {
  return(dispatch) => {
    axios.delete(`/api/courses/${course.id}`)
      .then( res => dispatch({
        type: 'DELETE_APP', course, headers: res.headers
      })).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Delete Course', 'red'));
    });
  }
}

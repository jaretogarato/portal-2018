import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from '../actions/headers';

export const updateUserStatus = (id, status) => {
  return(dispatch) => {
    dispatch({ type: 'UPDATE_USER_STATUS', newStatus: { id, status } })
  }
}

export const markAllPresent = () => {
  return({ type: 'MARK_ALL_PRESENT', status: 'present' })
}

export const getUsersByCourse = (courseId, callback = () => {}) => {
  return(dispatch) => {
    axios.get(`/api/course/${courseId}/users`)
      .then(res => {
        dispatch({type: 'GET_USERS_BY_COURSE', usersByCourse: res.data, headers: res.headers})
      })
      .then( callback() )
      .catch(err => {
        dispatch(setFlash('Failed to get class users', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}

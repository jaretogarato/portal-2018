import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from '../actions/headers';

export const getUsers = () => {
  return(dispatch) => {
    axios.get('/api/course_users')
      .then( res => {
        dispatch({ type: 'GET_COURSE_USERS', courseUsers: res.data })
      })
      .catch( err => {
        const { headers } =  err;
        dispatch(setFlash('Failed to get users', 'red'));
        dispatch(setHeaders(headers));
      })
  }
}

export const updateUserStatus = (id, status) => {
  return(dispatch) => {
    dispatch({ type: 'UPDATE_USER_STATUS', newStatus: { id, status } })
  }
}
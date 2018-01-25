import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getPermissions = (courseId) => {
  return(dispatch) => {
    axios.get(`/api/courses/${courseId}/permissions`)
      .then(res => {
        dispatch({ type: 'GET_USER_PERMISSIONS', userRole: res.data[0], headers: res.headers})
      })
      .catch(err => {
        dispatch(setFlash(`Failed to update user avatar. Please try again!`, 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}

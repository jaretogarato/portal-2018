import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const getUser = (id) => {
  return (dispatch) => {
    axios.get(`/api/users/${id}`)
      .then( res => {
        dispatch({ type: 'GET_USER_BY_ID', userId: res.data, headers: res.headers });
      }).catch( err => {
        dispatch(setFlash('Failed to fetch user', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}

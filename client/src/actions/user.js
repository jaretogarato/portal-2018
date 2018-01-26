import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const editUser = (user, id) => {
  return(dispatch) => {
    axios.put(`/api/users/${id}`, {user})
      .then( res => {
        dispatch({ type: 'UPDATE_USER', user: res.data, headers: res.headers });
      }).catch( err => {
        dispatch(setFlash('Failed to Update', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}

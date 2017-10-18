import axios from 'axios';
import { setFlash } from './flash';

export const editUser = (user, id) => {
  return(dispatch) => {
    axios.put(`/api/users/${id}`, {user})
      .then( res => {
        dispatch({ type: 'UPDATE_USER', user: res.data })
      })
      .catch( err => {
        dispatch(setFlash('Failed to Update', 'red'));
      });
  }
}


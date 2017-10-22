import axios from 'axios';
import { setFlash } from './flash';

export const getLectures = (groupId, callback) => {
  return(dispatch) => {
    axios.get(`/api/groups/${groupId}/lectures/`)
      .then( res => {
        dispatch({ type: 'GET_LECTURES', lectures: res.data });
      })
      .then( callback() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Lectures', 'red'));
    });
  }
}

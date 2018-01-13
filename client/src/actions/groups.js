import axios from 'axios';
import { setFlash } from './flash';

export const getGroups = (courseId, callback) => {
  return(dispatch) => {
    axios.get(`/api/ta_groups?course_id=${courseId}`)
      .then( res => dispatch({ type: 'GET_GROUPS', groups: res.data, headers: res.headers }))
      .then( callback() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Groups', 'red'));
      });
  }
}

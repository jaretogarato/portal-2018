import axios from 'axios';
import { setFlash } from './flash';

export const getLectures = (subSectionId, callback) => {
  return(dispatch) => {
    axios.get(`/api/sub-sections/${subSectionId}/lectures/`)
      .then( res => {
        dispatch({ type: 'GET_LECTURES', lectures: res.data, headers: res.headers });
      })
      .then( callback() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Lectures', 'red'));
    });
  }
}

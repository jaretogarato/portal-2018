import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const addAssignment = (assignment, history) => {
  return (dispatch) => {
    axios.post('/api/assignments', { assignment })
      .then(res => {
        dispatch({ type: 'ADD_ASSIGNMENT', assignments: res.data, headers: res.headers })
        history.push('./assignments')
      })
      .catch(err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed To Add Assignment', 'red'));
      });
  }
}


export const getAssignments = () => {
  return (dispatch) => {
    axios.get('/api/assignments')
      .then(res => {
        dispatch({ type: 'GET_ASSIGNMENTS', assignments: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Assignments', 'red'));
      });
  }
}
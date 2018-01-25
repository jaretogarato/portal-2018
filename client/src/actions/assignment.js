import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';


export const getAssignment = (id) => {
  return (dispatch) => {
    axios.get(`/api/assignments/${id}`)
    .then( res => {
        dispatch({ type: 'SINGLE_ASSIGNMENT', singleAssignment: res.data, headers: res.headers })
      }).catch( err => {
        dispatch(setFlash('Failed to update assigment', 'red'))
        dispatch(setHeaders(err.headers))
    });
  }
}

export const updateAssignment = (assignment, id) => {
  return (dispatch) => {
    axios.put(`/api/assignments/${id}`, { assignment })
      .then( res => {
        dispatch({ type: 'UPDATE_SINGLE', singleAssignment: res.data, headers: res.headers })
      }).catch( err => {
        dispatch(setFlash('Failed to update assignment', 'red'))
        dispatch(setHeaders(err.headers))
    });
  }
}
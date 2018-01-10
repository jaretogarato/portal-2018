import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const addLecture = (lecture, history) => {
  return (dispatch) => {
    axios.post('/api/lectures', { lecture })
      .then(res => {
        dispatch({ type: 'ADD_LECTURE', lectures: res.data, headers: res.headers })
        history.push(`./${res.data.id}`)
      })
      .catch(err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed To Add Lecture', 'red'));
      });
  }
}


export const getLectures = () => {
  return (dispatch) => {
    axios.get('/api/lectures')
      .then(res => {
        dispatch({ type: 'GET_LECTURES', lectures: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Lectures', 'red'));
      });
  }
}
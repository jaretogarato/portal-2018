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

export const getLecture = (id) => {
  return (dispatch) => {
    axios.get(`/api/lectures/${id}`)
      .then( res => {
        dispatch({ type: 'GET_LECTURE', lecture: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed to Retreive this Lecture', 'red'));
      });
  }
}

export const editLecture = ( lecture, id ) => {
  return(dispatch) => {
    axios.put(`/api/lectures/${id}`, { lecture })
      .then(res => {
        dispatch({ type: 'EDIT_LECTURE', lecture: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch(setFlash('Failed to update lecture', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}

export const deleteLecture = (id, history) => {
  return(dispatch) => {
    axios.delete(`/api/lectures/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_LECTURE', id, headers: res.headers })
        history.push(`/courses/${id}/lectures/`)
      })
      .catch( err => {
        dispatch(setFlash('Failed to Delete!', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}

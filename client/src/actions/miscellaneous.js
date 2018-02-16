import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const addMiscellaneous = (miscellaneou, history) => {
  return(dispatch) => {
    axios.post('/api/miscellaneous', { miscellaneou })
      .then( res => {
        dispatch({ type: 'ADD_MISCELLANEOU', miscellaneous: res.data, headers: res.headers })
        history.push(`./miscellaneous/${res.data.id}`)
      }).catch( err => {
        dispatch(setFlash('Failed To Add Content', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}

export const getMiscellaneous = () => {
  return(dispatch) => {
    axios.get('/api/miscellaneous')
      .then( res => {
        dispatch({ type: 'GET_MISCELLANEOUS', miscellaneous: res.data, headers: res.headers })
      }).catch( err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed To Retrieve Contents', 'red'));
    });
  }
}

export const getMiscellaneou = (id) => {
  return (dispatch) => {
    axios.get(`/api/miscellaneous/${id}`)
      .then( res => {
        dispatch({ type: 'GET_MISCELLANEOU', miscellaneou: res.data, headers: res.headers })
      }).catch( err => {
        dispatch(setFlash('Failed to get misc', 'red'))
        dispatch(setHeaders(err.headers))
    });
  }
}

export const updateMiscellaneou = (misc, id) => {
  return (dispatch) => {
    axios.put(`/api/miscellaneous/${id}`, { misc })
      .then( res => {
        dispatch({ type: 'UPDATE_MISC', misc: res.data, headers: res.headers })
      }).catch( err => {
        dispatch(setFlash('Failed to update misc', 'red'))
        dispatch(setHeaders(err.headers))
    });
  }
}

export const clearMiscellaneous = () => {
  return ({ type: 'CLEAR_MISCELLANEOUS', miscellaneous: [] })
}
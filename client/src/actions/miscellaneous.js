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

export const clearMiscellaneous = () => {
  return ({ type: 'CLEAR_MISCELLANEOUS', miscellaneous: [] })
}
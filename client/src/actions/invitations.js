import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const ADD_USER = 'ADD_USER';

export const sendInvitation = (user) => {
  return(dispatch) => {
    axios.post('/api/invitation/send', {user})
      .then( res => {
        debugger
        const { data, headers } = res;
        dispatch({ type: ADD_USER, user: data, headers });
      })
      .catch( err => {
        const { firstName, lastName } = user;
        dispatch(setFlash(`Failed to invite ${firstName} ${lastName}`, 'red'));
        dispatch(setHeaders(err.headers))
      });
  }
}

export const acceptInvitation = (invite, history) => {
  return(dispatch) => {
    axios.post('/api/invitation/accept', { invite })
      .then( res => {
        dispatch(setHeaders(res.headers));
        dispatch(setFlash('Welcome to Portal please log in', 'info'))
        history.push('/login');
      })
      .catch( err => {
        const message = err.response.data.errors;
        dispatch(setFlash(message, 'red'));
        dispatch(setHeaders(err.headers));
      })
  }
}

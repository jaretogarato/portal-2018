import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const addNote = (note, userId) => {
  return(dispatch) => {
    axios.post('/api/notes', { note , user_id: userId } )
      .then(res => {
        dispatch({ type: 'ADD_NOTE', note: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch(setFlash('Failed to add this note, try again', 'red'))
        dispatch(setHeaders(err.headers))
    })
  }
}

export const fetchNotes = (id, cb = {}) => {
  return(dispatch) => {
    axios.get(`/api/notes/${id}`)
    .then(res => {
      dispatch({ type: 'FETCH_NOTES_BY_ID', notes: res.data, headers: res.headers, meta: { recipient_id: id } })
    })
    .then( cb() )
    .catch(err => {
      dispatch(setFlash('Failed to fetch notes, try again', 'red'))
      dispatch(setHeaders(err.headers))
    })
  }
}

export const fetchSenderData = (id) => {
  return(dispatch) => {
    axios.get(`/api/sender/${id}`)
      .then(res => {
        dispatch({type: 'FETCH_SENDERS_DATA', senders: res.data, headers: res.headers})
      })
      .catch(err => {
        dispatch(setFlash('Failed to find who sent these notes', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}

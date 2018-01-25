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

export const deleteNote = (id, recipientId) => {
  return(dispatch) => {
    axios.delete(`/api/notes/${id}?user_id=${recipientId}`)
      .then(res => {
        dispatch({type: 'DELETE_NOTE', id, headers: res.headers})
      })
      .catch(err => {
        dispatch(setFlash('Failed to delete note', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}

export const editNote = (note, recipientId) => {
  return(dispatch) => {
    axios.put(`/api/notes/${note.id}?user_id=${recipientId}`, { note })
      .then(res => {
        dispatch({type: 'EDIT_NOTE', note: res.data, headers: res.headers})
      })
      .catch(err => {
        dispatch(setFlash('Failed to update note', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}

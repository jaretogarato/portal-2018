import axios from 'axios';
import { setFlash } from './flash';

export const getAnnouncements = courseId => {
  return(dispatch) => {
    axios.get(`/api/courses/${courseId}/announcements`)
      .then( res => {
        const announcements = res.data;
        dispatch({ type: 'GET_ANNOUNCEMENTS', announcements });
      })
      .catch( res => {
        const { headers } = res;
        dispatch(setFlash('Failed to get announcement. Please try again!', 'red'));
        dispatch({ type: 'SET_HEADERS', headers });
      })
  }
}

export const addAnnouncement = (courseId, announcement) => {
  return(dispatch) => {
    axios.post(`/api/courses/${courseId}/announcements`, announcement)
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'ADD_ANNOUNCEMENT', announcement: res.data, headers })
      })
      .catch( res => {
        const { headers } = res;
        dispatch(setFlash('Failed to add announcement. Please try again!', 'red'));
        dispatch({ type: 'SET_HEADERS', headers });
      })
  }
}

export const editAnnouncement = (courseId, announcement, id) => {
  return(dispatch) => {
    axios.put(`/api/courses/${courseId}/announcements/${id}`, announcement) 
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'EDIT_ANNOUNCEMENT', announcement: res.data, headers })
      })
      .catch( res => {
        const { headers } = res;
        dispatch(setFlash('Failed to update announcement. Please try again!', 'red'));
        dispatch({ type: 'SET_HEADERS', headers })
      })
  }
}

export const deleteAnnouncement = (courseId, id) => {
  return(dispatch) => {
    axios.delete(`/api/courses/${courseId}/announcements/${id}`)
      .then( res => {
        const { headers } = res;
        dispatch({ type: 'DELETE_ANNOUNCEMENT', id, headers })
      })
      .catch( res => {
        const { headers } = res;
        dispatch(setFlash('Failed to delete announcement.', 'red'))
        dispatch({ type: 'SET_HEADERS', headers })
      })
  }
}
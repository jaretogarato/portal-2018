import axios from 'axios';
import { setFlash } from './flash';

export const getAnnouncements = (courseId) => {
  return(dispatch) => {
    axios.get(`/api/courses/${courseId}/announcements`)
      .then( res => {
        const announcements = res.data;
        dispatch({ type: 'GET_ANNOUNCEMENTS', announcements });
      })
      .catch( res => {
        console.log(res.message);
      })
  }
}

export const addAnnouncement = (courseId, announcement) => {
  return(dispatch) => {
    axios.post(`/api/courses/${courseId}/announcements`, announcement)
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'ADD_ANNOUNCEMENT', announcement })
      })
      .catch( res => {
        dispatch(setFlash('Failed to add announcement. Please try again!', 'red'));
        dispatch({ type: 'SET_HEADERS', headers: res.headers });
      })
  }
}
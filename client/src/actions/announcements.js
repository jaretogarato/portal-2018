import axios from 'axios';

export const getAnnouncements = (course_id) => {
  return(dispatch) => {
    axios.get(`/api/courses/${course_id}/announcements`)
      .then( res => {
        const announcements = res.data;
        dispatch({ type: 'GET_ANNOUNCEMENTS', announcements });
      })
      .catch( res => {
        console.log(res.message);
      })
  }
}
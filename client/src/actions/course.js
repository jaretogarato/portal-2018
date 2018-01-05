import axios from 'axios';

export const setActiveCourse = (id) => {
  return (dispatch) => {
    axios.get(`/api/courses/${id}`)
      .then( res => {
        dispatch({ type: 'SET_ACTIVE_COURSE', course: res.data, headers: res.headers })
      })
      .catch( err => {/* TODO add error flash */} )
  }
}

export const clearActiveCourse = () => {
  return { type: 'CLEAR_ACTIVE_COURSE' }
}

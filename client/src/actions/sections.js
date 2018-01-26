import axios from 'axios';
import { setFlash } from './flash';


export const getSections = (courseId, callback) => {
  return(dispatch) => {
    axios.get(`/api/courses/${courseId}/sections`)
      .then( res => dispatch({ type: 'GET_SECTIONS', sections: res.data, headers: res.headers }))
      .then( callback() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Sections', 'red'));
    });
  }
}

export const addSection = (title, courseId) => {
  return(dispatch) => {
    axios.post(`/api/courses/${courseId}/sections`, { title })
      .then( res => {
          dispatch({ type: 'ADD_SECTION', section: res.data, headers: res.headers })
      }).catch( err => {
          dispatch({ type: 'SET_HEADERS', headers: err.headers });
          dispatch(setFlash('Failed To Add Section', 'red'));
    });
  }
}

export const updateSection = (section) => {
  return(dispatch) => {
    axios.put(`/api/sections/${section.id}`, {section})
      .then( res => dispatch({
        type: 'UPDATE_SECTION',
        section: res.data,
        headers: res.headers })
      ).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Update Section', 'red'));
    });
  }
}

export const deleteSection = (section) => {
  return(dispatch) => {
    axios.delete(`/api/sections/${section.id}`)
      .then( res => {
        dispatch({ type: 'DELETE_SECTION', section, headers: res.headers })
        dispatch({ type: 'CLEAR_SUB_SECTIONS', subSections: [], headers: res.headers })
      }).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Delete Section', 'red'));
    });
  }
}

export const clearSections = () => {
  return ({ type: "CLEAR_SECTIONS", sections: [] })
}

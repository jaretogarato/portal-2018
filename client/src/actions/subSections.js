import axios from 'axios';
import { setFlash } from './flash';

export const addSubSection = (subSection) => {
  return(dispatch) => {
    axios.post('/api/sub-sections', { subSection })
      .then( res => dispatch({ type: 'ADD_SUB_SECTION', subSection: res.data, headers: res.headers }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Add Sub-Section', 'red'));
    });
  }
}

export const getSubSections = (sectionId, callback) => {
  return(dispatch) => {
    axios.get(`/api/sections/${sectionId}/sub-section`)
      .then( res => {
        dispatch({ type: 'GET_SUB_SECTIONS', subSections: res.data, headers: res.headers })
      })
      .then( callback() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Sub-Sections', 'red'));
    });
  }
}

export const updateSubSection = (subSection) => {
  return(dispatch) => {
    axios.put(`/api/sub-sections/${subSection.id}`, { subSection })
      .then( res => dispatch({ type: 'UPDATE_SUB_SECTION', subSection: res.data, headers: res.headers }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Update Sub-Sections', 'red'));
    });
  }
}

export const deleteSubSection = (subSection) => {
  return(dispatch) => {
    axios.delete(`/api/sub-sections/${subSection.id}`)
      .then( res => dispatch({ type: 'DELETE_SUB_SECTION', subSection, headers: res.headers }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Delete Sub-Sections', 'red'));
    });
  }
}

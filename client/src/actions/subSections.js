import axios from 'axios';
import { setFlash } from './flash';

export const getSubSections = (sectionId, callback) => {
  return(dispatch) => {
    axios.get(`/api/sections/${sectionId}/sub_sections`)
    .then( res => {
      dispatch({ type: 'GET_SUB_SECTIONS', subSections: res.data, headers: res.headers })
    })
    .then( callback() )
    .catch( err => {
      dispatch({ type: 'SET_HEADERS', headers: err.headers });
      dispatch(setFlash('Failed To Retrieve Subsections', 'red'));
      console.log(err)
    });
  }
}

export const addSubSection = (title, sectionId) => {
  return(dispatch) => {
    axios.post(`/api/sections/${sectionId}/sub_sections`, { title })
      .then( res => dispatch({ type: 'ADD_SUB_SECTION', subSection: res.data, headers: res.headers }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Add Subsection', 'red'));
    });
  }
}


export const updateSubSection = (subSectionId, title, sectionId) => {
  return(dispatch) => {
    axios.put(`/api/sections/${sectionId}/sub_sections/${subSectionId}`, { sub_section: { title } } )
      .then( res => dispatch({ type: 'UPDATE_SUB_SECTION', subSection: res.data, headers: res.headers }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Update Subsection', 'red'));
    });
  }
}

export const deleteSubSection = (ss) => {
  return(dispatch) => {
    axios.delete(`/api/sections/${ss.section_id}/sub_sections/${ss.id}`)
      .then( res => dispatch({ type: 'DELETE_SUB_SECTION', ss, headers: res.headers }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Delete Subsection', 'red'));
    });
  }
}

export const clearSubSections = () => {
  return({ type: "CLEAR_SUB_SECTIONS", subSections: [] })
}

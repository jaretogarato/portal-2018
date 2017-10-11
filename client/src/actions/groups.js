import axios from 'axios';

export const addGroup = (group) => {
  return(dispatch) => {
    axios.post('/api/groups', { group })
      .then( res => dispatch({ type: 'ADD_GROUP', group: res.data }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Add Group', 'red'));
  }
}

export const getGroups = (callback) => {
  return(dispatch) => {
    axios.get('/api/groups')
      .then( res => dispatch({ type: 'GET_GROUPS', groups: res.data }))
      .then( callback() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Groups', 'red'));
  }
}

export const updateGroup = (group) => {
  return(dispatch) => {
    axios.put(`/api/groups/${group.id}`, { group })
      .then( res => dispatch({ type: 'UPDATE_GROUP', group: res.data }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Update Group', 'red'));
  }
}

export const deleteGroup = (group) => {
  return(dispatch) => {
    axios.delete(`/api/groups/${group.id}`)
      .then( res => dispatch({ type: 'DELETE_GROUP', group }))
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Delete Group', 'red'));
  }
}
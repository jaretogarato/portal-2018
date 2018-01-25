import axios from 'axios';
import { setFlash } from './flash';


export const getGroups = (courseId, callback) => {
  return(dispatch) => {
    axios.get(`/api/ta_groups?course_id=${courseId}`)
      .then( res => dispatch({ type: 'GET_GROUPS', groups: res.data, headers: res.headers }))
      .then( callback() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Groups', 'red'));
    });
  }
}

const firstMembership = (course, first) => {
  return axios.put(`/api/update_groups/${first.membership_id}?course_id=${course.id}&user_id=${first.id}`,
    { group_membership: { ta_group_id: first.ta_group_id } })
}

const secondMembership = (course, second) => {
  return axios.put(`/api/update_groups/${second.membership_id}?course_id=${course.id}&user_id=${second.id}`,
    { group_membership: { ta_group_id: second.ta_group_id } })
}

export const updateGroup = (course, first, second) => {
  return(dispatch) => {
    axios.all([firstMembership(course, first), secondMembership(course, second)])
      .then(axios.spread( (res1, res2) => {
        dispatch({ type: 'UPDATE_GROUP', groups: res1.data, headers: res1.headers })
        dispatch({ type: 'UPDATE_GROUP', groups: res2.data, headers: res2.headers })
      })).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers })
        dispatch(setFlash('Failed to Update Group', 'red'));
    });
  }
}

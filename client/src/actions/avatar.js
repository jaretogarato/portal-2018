import { setFlash } from './flash';
import axios from 'axios';
import avatars from '../reducers/avatars'

const addAvatar = (avatar) => {
  return { type: 'ADD_AVATAR', avatar }
}

export const handleUpload = (avatar, callback) => {
  // where our axios post request to create a new avatar
  // dispatch addAvatar action
  return(dispatch) => {
    let data = new FormData();
    console.log(avatar )
    data.append( avatar.name, avatar);
    axios.post('/api/avatars', data)
      .then( res => {
        dispatch(addAvatar(res.data));
        callback(res.data);
      })
      .catch( res => {
        dispatch(setFlash('Error uploading file. Please try again!', 'error'));
    });
  }
}

export const setAvatars = () => {
  return(dispatch) => {
    axios.get('/api/avatars')
      .then( res => {
        dispatch({ type: 'SET_AVATARS', avatars: res.data });
      })
      .catch( res => {
        dispatch(setFlash('Error Fetching Avatar', 'error'));
    });
  }
}

export default avatars;
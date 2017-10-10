import { setFlash } from './flash';
import axios from 'axios';

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
        callback();
      })
      .catch( res => {
        dispatch(setFlash('Error uploading file. Please try again!', 'error'));
    });
  }
}
 
const avatars = ( state = [], action ) => {
  switch ( action.type ) {
    case 'ADD_AVATAR':
      return [...state, action.avatar]
    default:
      return state;
  }
}

export default avatars;
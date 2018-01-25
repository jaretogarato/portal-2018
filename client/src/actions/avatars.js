import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


const addAvatar = (avatar) => {
  return { type: 'ADD_AVATAR', avatar }
}

export const handleUpload = (avatar, user, callback) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(avatar.name, avatar);
    axios.post('/api/avatars', data)
      .then( res => {
        dispatch(addAvatar(res.data));
        callback();
        user.avatar_url = `${res.data.url}`;
        axios.put(`/api/users/${user.id}`, { user } )
          .then( res => {
            dispatch(setHeaders(res.headers));
          }).catch( err => {
            dispatch(setFlash(`Failed to update user avatar. Please try again!`, 'red'));
            dispatch(setHeaders(err.headers));
        });
      }).catch( err => {
        dispatch( setFlash('Error uploading file. Please try again!', 'error') );
    });
  }
}

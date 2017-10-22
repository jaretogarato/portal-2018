import axios from 'axios';
import { setFlash } from './flash';

export const setGroupId = groupId => {
  return { type: 'SET_GROUP_ID', groupId };
}

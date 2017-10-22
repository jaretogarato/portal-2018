import axios from 'axios';
import { setFlash } from './flash';

export const setGroup = group => {
  return { type: 'SET_GROUP', group };
}

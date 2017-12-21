import axios from 'axios';
import { setFlash } from './flash';

export const setSubSection = subSection => {
  return { type: 'SET_SUB_SECTION', subSection };
}

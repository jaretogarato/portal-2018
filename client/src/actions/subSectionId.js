import axios from 'axios';
import { setFlash } from './flash';

export const setSubSectionId = subSectionId => {
  return { type: 'SET_SUB_SECTION_ID', subSectionId };
}

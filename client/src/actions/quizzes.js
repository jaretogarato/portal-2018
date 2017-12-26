import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const addQuiz = (quiz) => {
  return(dispatch) => {
    axios.get('/api/quizzes')
      .then( res => dispatch({ type: 'ADD_QUIZ', quizzes: res.data, headers: res.headers }))
      .catch( err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed To Add Quiz', 'red'));
      });
  }
}


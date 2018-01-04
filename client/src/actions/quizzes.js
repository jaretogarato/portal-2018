import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const addQuiz = (quiz, history) => {
  return(dispatch) => {
    axios.post('/api/quizzes', { quiz })
      .then( res => {
        dispatch({ type: 'ADD_QUIZ', quizzes: res.data, headers: res.headers })
        history.push('/quizzes')
      })
      .catch( err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed To Add Quiz', 'red'));
      });
  }
}


export const getQuizzes = () => {
  return(dispatch) => {
    axios.get('/api/quizzes')
      .then( res => {
        dispatch({  type: 'GET_QUIZZES', quizzes: res.data, headers: res.headers })
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Quizzes', 'red'));
      });
  }
}
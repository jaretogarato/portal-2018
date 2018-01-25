import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';


export const addQuiz = (quiz, history) => {
  return(dispatch) => {
    axios.post('/api/quizzes', { quiz })
      .then( res => {
        dispatch({ type: 'ADD_QUIZ', quizzes: res.data, headers: res.headers })
        history.push(`./quizzes/${res.data.id}`)
      }).catch( err => {
        dispatch(setFlash('Failed To Add Quiz', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}


export const getQuizzes = () => {
  return(dispatch) => {
    axios.get('/api/quizzes')
      .then( res => {
        dispatch({  type: 'GET_QUIZZES', quizzes: res.data, headers: res.headers })
      }).catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Quizzes', 'red'));
    });
  }
}

export const clearQuizzes = () => {
  return ({ type: "CLEAR_QUIZZES", quizzes: [] })
}
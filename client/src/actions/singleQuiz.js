import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';


export const getQuiz = (id) => {
  return (dispatch) => {
    axios.get(`/api/quizzes/${id}`)
      .then( res => {
        dispatch({ type: 'GET_QUIZ', quiz: res.data, headers: res.headers })
      })
      .catch( err => {
        dispatch(setFlash('Failed to update quiz', 'red'))
        dispatch(setHeaders(err.headers))
    });
  }
}

export const updateQuiz = (quiz, id) => {
  return (dispatch) => {
    axios.put(`/api/quizzes/${id}`, {quiz})
      .then( res => {
        dispatch({ type: 'UPDATE_QUIZ', quiz: res.data , headers: res.headers })
      })
      .catch( err => {
        dispatch(setFlash('Failed to update quiz', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}


export const deleteQuiz = (id, history) => {
  return(dispatch) => {
    axios.delete(`/api/quizzes/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_QUIZ', id, headers: res.headers })
        history.push(`/courses/${id}/quizzes/`)
      })
      .catch( err => {
        dispatch(setFlash('Failed to Delete Quiz!', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}

import axios from 'axios'
import { setHeaders } from './headers'
import { setFlash } from './flash'

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

export const updateQuiz = (quiz) => {
  return (dispatch) => {
    axios.put(`/api/quizzes/${quiz.id}`, quiz)
      .then( res => {
        dispatch({ type: 'UPDATE_QUIZ', quiz, headers: res.headers })
      })
      .catch( err => {
        dispatch(setFlash('Failed to update quiz', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}

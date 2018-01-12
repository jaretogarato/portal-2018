import axios from 'axios'
import { setHeaders } from './headers'
import { setFlash } from './flash'

export const getQuestions = (quizId) => {
  return (dispatch) => {
    axios.get(`/api/quizzes/${quizId}/quiz_questions`)
      .then( res => {
        dispatch({ type: 'GET_QUESTIONS', questions: res.data, headers: res.headers })
      })
      .catch( err => {
        dispatch(setFlash('Failed to get questions', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}

export const addQuestion = (quizId, question) => {
  return (dispatch) => {
    axios.post(`/api/quizzes/${quizId}/quiz_questions`, question)
      .then( res => {
        dispatch({ type: 'ADD_QUESTION', question: res.data, headers: res.headers})
      })
      .catch( err => {
        dispatch(setHeaders(err.headers))
        dispatch(setFlash('Failed to add question', 'red'))
      })
  }
}

export const updateQuestion = (quizId, question) => {
  return (dispatch) => {
    axios.put(`/api/quizzes/${quizId}/quiz_questions/${question.id}`, question)
      .then( res => {
        dispatch({ type: 'UPDATE_QUESTION', question: res.data, headers: res.headers})
      })
      .catch( err => {
        dispatch(setFlash('Failed to update question', 'red'))
        dispatch(setHeaders(err.headers))
      })
    }
  }

export const deleteQuestion = (quizId, questionId) => {
  return(dispatch) => {
    axios.delete(`/api/quizzes/${quizId}/quiz_questions/${questionId}`)
      .then(res => {
        dispatch({type: 'DELETE_QUESTION', questionId , headers: res.headers})
      })
      .catch(err => {
        dispatch(setFlash('Failed to delete question', 'red'))
        dispatch(setHeaders(err.headers))
      })
    }
}


import axios from 'axios';

export const addQuiz = (quiz) => {
  return(dispatch) => {
    axios.get('/api/quizzes')
      .then( res => dispatch({ type: 'ADD_QUIZ', quizzes: res.data }))
  }
}

// create a controller
// create the routes
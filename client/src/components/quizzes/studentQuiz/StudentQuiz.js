import React from 'react';
import { Segment, Header, List, Button, Grid, Sticky } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EssayQuestion from './EssayQuestion';
import MultipleChoice from './MultipleChoice';
import MultipleAnswer from './MultipleAnswer';
import TrueFalse from './TrueFalse';
import { getQuiz } from '../../../actions/singleQuiz';
import { getQuestions } from '../../../actions/quizQuestions';


class StudentQuiz extends React.Component {
  state = {}

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getQuiz(id))
    this.props.dispatch(getQuestions(id))
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  displayList = () => {
    const { questions } = this.props
    return questions.map((q, i) => (

        <List.Item key={q.id} >
        <a href={`#${q.id}`} >
          Question: {(i + 1) }
       </a>
        </List.Item>
    ))
  }

  displayQuestions = () => {
    const { questions } = this.props
    return questions.map( q => {
      if(q.multiple_choice) {
        if(q.true_false) {
          return (
            <Header as='a' id={q.id} key={q.id}>
              <TrueFalse key={q.id} question={q}/>
            </Header>
          )
        } else if(q.multiple_correct) {
          return (
            <Header as='a' id={q.id} key={q.id}>
              <MultipleAnswer key={q.id} id={q.id} question={q}/>
            </Header>
          )
        } else {
          return (
            <Header as='a' id={q.id} key={q.id}>
              <MultipleChoice key={q.id} id={q.id} question={q}/>
            </Header>
          )
        }
      } else {
        return (
          <Header as='a' id={q.id} key={q.id}>
            <EssayQuestion key={q.id} id={q.id} question={q}/>
          </Header>
         )
      }
    })
  }

  render() {
    const { quiz } = this.props
    return(
      <Segment basic>
        <div ref={this.handleContextRef}>
        <Grid>
          <Grid.Column width={13}>
           <Header as ='h2' textAlign='center'>{quiz.title}</Header>
            {this.displayQuestions()}
          </Grid.Column>
          <Grid.Column width={3}>
          <Sticky context={this.state.contextRef}>
           {this.displayList()}
           </Sticky>
          </Grid.Column>
        </Grid>
        <Button color='green'> Submit </Button>
        <Button color='blue'> Save Quiz </Button>
        </div>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { quiz: state.singleQuiz, questions: state.quizQuestions }
}

export default connect(mapStateToProps)(StudentQuiz)

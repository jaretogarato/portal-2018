import React from 'react';
import {
  Segment,
  Header,
  List,
  Button,
  Grid,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import EssayQuestion from './EssayQuestion';
import MultipleChoice from './MultipleChoice';
import MultipleAnswer from './MultipleAnswer';
import TrueFalse from './TrueFalse';
import { PageTitle } from '../../../styles/styledComponents';


class TakeQuiz extends React.Component {
  state = { ready: false }

  ready = () => {
    this.setState({ready: !this.state.ready})
  }

  displayList = () => {
    const { questions } = this.props
    return questions.map((q, i) => (
        <List.Item key={q.id} style={{fontSize: '1.2em', marginBottom: '2%'}}>
        <a href={`#${q.id}a`}>
          Question {(i + 1) }
       </a>
        </List.Item>
    ))
  }

  displayQuestions = () => {
    const { questions } = this.props
    return questions.map( (q, i) => {
      if(q.multiple_choice) {
        if(q.true_false) {
          return (
            <div>
              <div id={`${q.id}a`} style={styles.anchor} />
              <Header key={q.id}>
                <TrueFalse key={q.id} id={q.id} question={q} number={(i + 1)}/>
              </Header>
            </div>
          )
        } else if(q.multiple_correct) {
          return (
            <div>
              <div id={`${q.id}a`} style={styles.anchor} />
              <Header key={q.id}>
                <MultipleAnswer key={q.id} id={q.id} question={q} number={(i + 1)}/>
              </Header>
            </div>
          )
        } else {
          return (
            <div>
              <div id={`${q.id}a`} style={styles.anchor} />
              <Header key={q.id}>
                <MultipleChoice key={q.id} id={q.id} question={q} number={(i + 1)}/>
              </Header>
            </div>
          )
        }
      } else {
        return (
          <div>
            <div id={`${q.id}a`} style={styles.anchor} />
            <Header key={q.id}>
              <EssayQuestion key={q.id} id={q.id} question={q} number={(i + 1)}/>
            </Header>
          </div>
         )
      }
    })
  }

  render() {
    const { quiz } = this.props
    if (!this.state.ready){
      return(
      <div>
        <Button basic onClick={ this.ready }>Click to Start Quiz</Button>
      </div>
      )
    } else {
      return(
        <Segment basic>
          <Grid>
            <Grid.Column width={13}>
             <PageTitle>{quiz.title}</PageTitle>
              {this.displayQuestions()}
            </Grid.Column>
            <Grid.Column width={3}>
            <Segment basic style={{position:'fixed'}}>
             {this.displayList()}
             </Segment>
            </Grid.Column>
          </Grid>
          <Button basic>Submit</Button>
          <Button basic>Save Quiz</Button>
        </Segment>
      )
    }
  }
}

const styles = {
  anchor: {
    display: 'block',
    position: 'relative',
    visibility: 'hidden',
    top: '-86px',
  }
}

const mapStateToProps = (state) => {
  return {
    quiz: state.singleQuiz,
    questions: state.quizQuestions,
    responses: state.quizResponses
  }
}

export default connect(mapStateToProps)(TakeQuiz)

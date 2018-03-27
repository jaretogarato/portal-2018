import React from 'react';
import {
  Segment,
  Checkbox,
  Divider
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  addResponse,
  updateResponse,
  removeResponse,
} from '../../../actions/quizResponses';
import { PageSubTitle } from '../../../styles/styledComponents';


const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

class MultipleAnswer extends React.Component {
  state = { responses: [] }

  handleChange = (_, { id } ) => {
    const { responses } = this.state
    if (responses.includes(id)) {
      const newResponses = responses.filter( r => r !== id )
      this.setState({ responses: newResponses }, this.sendResponse)
    } else {
      const newResponses = [...responses, id]
      this.setState({ responses: newResponses }, this.sendResponse)
    }
  }

  sendResponse = () => {
    const { responses, hasResponse } = this.state
    const { dispatch, question: { id } } = this.props
    const theResponse = { type: 'multipleAnswer', responses, questionId: id }
    if (!hasResponse) {
      dispatch(addResponse(theResponse))
      this.setState({ hasResponse: true })
    } else {
      if (responses.length)
        dispatch(updateResponse(theResponse))
      else {
        dispatch(removeResponse(id))
        this.setState({ hasResponse: false })
      }
    }
  }

  render() {
    const { question } = this.props
    return(
      <Segment style={{marginBottom: '2%'}}>
        <PageSubTitle> Question {this.props.number}</PageSubTitle>
        <Divider />
        <PageSubTitle><div dangerouslySetInnerHTML={{__html: question.question}}></div></PageSubTitle>
        {
          question.options.map( (o,i) => {
            return(
              <Segment basic key={o.id}>
                {optionLetters[i]})
                &nbsp;
                <Checkbox
                  label={o.content}
                  value={o.content}
                  id={o.id}
                  onChange={this.handleChange}
                />
              </Segment>
            )
          })
        }
      </Segment>
    )
  }
}

export default connect()(MultipleAnswer)

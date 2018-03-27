import React from 'react';
import {
  Form,
  Segment,
  Divider
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  addResponse,
  updateResponse,
  removeResponse,
} from '../../../actions/quizResponses';
import { PageSubTitle } from '../../../styles/styledComponents';


class EssayQuestion extends React.Component {
  state = { response: '', hasResponse: false }

  handleChange = (e, { value }) => {
    this.setState({ response: value })
  }

  sendResponse = () => {
    const { response, hasResponse } = this.state
    const { dispatch, question: { id } } = this.props
    const theResponse = { type: 'essay', response, questionId: id }
    if (!hasResponse) {
      dispatch(addResponse(theResponse))
      this.setState({ hasResponse: true })
    } else {
      if (response)
        dispatch(updateResponse(theResponse))
      else {
        dispatch(removeResponse(id))
        this.setState({ hasResponse: false })
      }
    }}

  render() {
    const { question } = this.props
    const { response } = this.state
    return(
      <Segment style={{marginBottom: '2%'}}>
        <PageSubTitle> Question {this.props.number}</PageSubTitle>
        <Divider />
        <PageSubTitle><div dangerouslySetInnerHTML={{__html: question.question}}></div></PageSubTitle>
        <Form>
          <Form.TextArea value={response} onChange={this.handleChange} onBlur={this.sendResponse} />
        </Form>
      </Segment>
    )
  }
}

export default connect()(EssayQuestion)

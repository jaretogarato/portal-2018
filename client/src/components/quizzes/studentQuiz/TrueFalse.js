import React from 'react';
import { Segment, Radio } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addResponse, updateResponse } from '../../../actions/quizResponses';
import { PageSubTitle } from '../../../styles/styledComponents';

class TrueFalse extends React.Component {
  state = { response: '', hasResponse: false }

  handleChange = (_, { id } ) => {
    this.setState({ response: id }, () => {
      const { response, hasResponse } = this.state
      const theResponse = { type: 'multipleChoice', response, questionId: this.props.question.id }
      if (!hasResponse) {
        this.props.dispatch(addResponse(theResponse))
        this.setState({ hasResponse: true })
      } else {
        this.props.dispatch(updateResponse(theResponse))
      }
    })
  }

  render() {
    const { question } = this.props
    const id1 = question.options[0].id
    const id2 = question.options[1].id
    const { response } = this.state
    return(
      <Segment>
        <PageSubTitle style={{ textAlign: 'center'}}>{question.question}</PageSubTitle>
        <Segment basic>
          <Radio
            label='True'
            value='true'
            id={id1}
            name={`radioGroup${question.id}`}
            checked={response === id1}
            onChange={this.handleChange}
          />
          <br />
          <Radio
            label='False'
            value='false'
            id={id2}
            name={`radioGroup${question.id}`}
            checked={response === id2}
            onChange={this.handleChange}
          />
        </Segment>
      </Segment>
    )
  }
}

export default connect()(TrueFalse)

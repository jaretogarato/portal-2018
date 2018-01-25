import React from 'react';
import { Segment, Radio, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addResponse, updateResponse } from '../../../actions/quizResponses';
import { PageSubTitle } from '../../../styles/styledComponents';


const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

class MultipleChoice extends React.Component {
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
    const { response } = this.state
    return(
      <Segment style={{marginBottom: '2%'}}>
        <PageSubTitle> Question {this.props.number}</PageSubTitle>
        <Divider /> 
        <PageSubTitle>{question.question}</PageSubTitle>
        {
          question.options.map( (o,i) => {
            return(
              <Segment basic key={o.id}>
                {optionLetters[i]})
                &nbsp;
                <Radio
                  label={o.content}
                  value={o.content}
                  id={o.id}
                  name={`radioGroup${question.id}`}
                  checked={response === o.id}
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

export default connect()(MultipleChoice)

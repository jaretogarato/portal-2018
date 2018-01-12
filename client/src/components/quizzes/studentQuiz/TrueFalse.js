import React from 'react';
import { Header, Segment, Radio } from 'semantic-ui-react';

class TrueFalse extends React.Component {
  state = { response: '' }

  handleChange = (_, { value } ) => this.setState({ response: value })

  render() {
    const { question } = this.props
    const { response } = this.state
    return(
      <Segment>
        <Header textAlign='center'>{question.question}</Header>
        <Segment basic>
          <Radio
            label='True'
            value='true'
            name={`radioGroup${question.id}`}
            checked={response === 'true'}
            onChange={this.handleChange}
          />
          <br />
          <Radio
            label='False'
            value='false'
            name={`radioGroup${question.id}`}
            checked={response === 'false'}
            onChange={this.handleChange}
          />
        </Segment>
      </Segment>
    )
  }
}

export default TrueFalse

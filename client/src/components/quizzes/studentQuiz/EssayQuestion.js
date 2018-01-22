import React from 'react';
import { Form, Segment, Header } from 'semantic-ui-react';

class EssayQuestion extends React.Component {
  state = { response: '' }

  handleChange = (_, { value }) => this.setState({ response: value })

  render() {
    const { question } = this.props
    const { response } = this.state
    return(
      <Segment>
        <Header as='h2'>{question.question}</Header>
        <Form>
          <Form.TextArea value={response} onChange={this.handleChange} />
        </Form>
      </Segment>
    )
  }
}

export default EssayQuestion

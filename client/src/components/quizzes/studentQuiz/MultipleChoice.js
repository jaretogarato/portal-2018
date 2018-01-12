import React from 'react';
import { Segment, Header, Radio } from 'semantic-ui-react';

const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

class MultipleChoice extends React.Component {
  state = { response: '' }

  handleChange = (_, { value } ) => this.setState({ response: value })

  render() {
    const { question } = this.props
    const { response } = this.state
    return(
      <Segment>
        <Header textAlign='center'>{question.question}</Header>
        {
          question.options.map( (o,i) => {
            return(
              <Segment basic key={o.id}>
                {optionLetters[i]})
                &nbsp;
                <Radio
                  label={o.content}
                  value={o.content}
                  name={`radioGroup${question.id}`}
                  checked={response === o.content}
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

export default MultipleChoice

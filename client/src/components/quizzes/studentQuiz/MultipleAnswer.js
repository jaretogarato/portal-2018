import React from 'react';
import { Segment, Header, Checkbox } from 'semantic-ui-react';

const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

class MultipleAnswer extends React.Component {
  state = { responses: [] }

  handleChange = (_, { id } ) => {
    const { responses } = this.state
    if (responses.includes(id)) {
      const newResponses = responses.filter( r => r !== id )
      this.setState({ responses: newResponses })
    } else {
      const newResponses = [...responses, id]
      this.setState({ responses: newResponses })
    }
  }

  render() {
    const { question } = this.props
    return(
      <Segment>
        <Header textAlign='center'>{question.question}</Header>
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

export default MultipleAnswer

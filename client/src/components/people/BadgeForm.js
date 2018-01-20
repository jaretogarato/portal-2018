import React from 'react';
import { 
  Form, 
  Button, 
  Card } from 'semantic-ui-react'

class BadgeForm extends React.Component {
  state = { content: '' }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   let { content } = this.state
  //   this.setState({ content: '' })
  // }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  cancelInput = () => this.setState({ content: '' })

  badgeForm = () => {
    const { content } = this.state
    return(
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            name='content'
            value={content}
            width={16}
            placeholder='Badge Title' 
            required
            onChange={this.handleChange}/>
        </Form>
        <Button.Group>
          <Button basic>Save</Button>
          <Button 
            basic
            onClick = {this.cancelInput}
          >Cancel</Button>
        </Button.Group>
      </Card>
    )};

  render() {
    return (
      <Card>
        {this.badgeForm()}
      </Card>
    )
  }

}

export default BadgeForm;


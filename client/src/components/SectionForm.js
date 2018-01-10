import React from 'react';
import { addSection } from '../actions/sections.js';
import { connect } from 'react-redux';
import { Button, Form, Grid, Menu, Segment } from 'semantic-ui-react';

class SectionForm extends React.Component {
  state = { title: '', showForm: false };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { course, dispatch } = this.props
    dispatch(addSection(title, course.id))
    this.setState({ title: '', showForm: false })
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });  

  render() {
    const { title } = this.state    
    return (
      <Segment basic>
        { this.state.showForm ?
          <Grid>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Segment raised>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <Form.Input
                      name='title'
                      placeholder='Name'
                      required
                      id='section'
                      value={title}
                      onChange={this.handleChange}
                      autoFocus
                    />
                  </Form.Field>
                  <Button.Group fluid>
                    <Button 
                      color='red' 
                      onClick={() => { this.setState({ title: '', showForm: false }) }} 
                      content="X"
                    />
                    <Button primary content="Add"/>
                  </Button.Group>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid> 
        :     
          <Menu.Item>
            <Button
              fluid
              onClick={() => { this.setState({ showForm: true }) }} 
              content="Add Section"
            />
          </Menu.Item>
        }
      </Segment> 
    )
  }
}

const mapStateToProps = (state) => {
  return { sections: state.sections, course: state.course }
}

export default connect(mapStateToProps)(SectionForm);
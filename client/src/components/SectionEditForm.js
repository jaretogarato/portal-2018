import React from 'react';
import { updateSection } from '../actions/sections';
import { connect } from 'react-redux';
import { Button, Form, Grid, Menu, Segment } from 'semantic-ui-react';


class SectionEditForm extends React.Component {
  state = { showForm: false };

  handleSubmit = (e) => {
    const { sectionId, dispatch, sections } = this.props
    const section = sections.find((s) => s.id === sectionId)
    console.log(section)
    dispatch(updateSection(section.id, {title: this.state.title }))
    this.setState({ title: '', showForm: false })
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });  

  render() {
    const { title } = this.state
    { return this.state.showForm ?
      <Grid>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment raised>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input
                  name='title'
                  required
                  value={title}
                  onChange={this.handleChange}
                  autoFocus
                />
              </Form.Field>
              <Button.Group>
                <Button 
                  color='red' 
                  onClick={() => { this.setState({ showForm: false }) }} 
                  content="X"
                />
                <Button primary fluid content="Update" />
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
          content='Edit'
        />
      </Menu.Item>
    }
  }
}

const mapStateToProps = (state) => {
  return { 
    sections: state.sections,
    sectionId: state.sectionId,
  }
}

export default connect(mapStateToProps)(SectionEditForm);
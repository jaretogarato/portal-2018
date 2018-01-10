import React from 'react';
import { addSubSection } from '../../actions/subSections.js';
import { connect } from 'react-redux';
import { Button, Form, Grid, Menu, Segment } from 'semantic-ui-react';

class SubSectionForm extends React.Component {
  state = { title: '', showForm: false };

  handleSubmit = () => {
    const { title } = this.state;
    const { dispatch, sectionId } = this.props
    dispatch(addSubSection(title, sectionId))
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
                      content="Cancel"
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
              floated="right"
              onClick={() => { this.setState({ showForm: true }) }} 
              content="Add Subsection"
            />
          </Menu.Item>
        }
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { sectionId: state.sectionId }
}

export default connect(mapStateToProps)(SubSectionForm);
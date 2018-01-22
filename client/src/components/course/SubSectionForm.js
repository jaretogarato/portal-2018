import React from 'react';
import { addSubSection, updateSubSection } from '../../actions/subSections.js';
import { connect } from 'react-redux';
import { Button, Form, Grid, Segment, Icon } from 'semantic-ui-react';

class SubSectionForm extends React.Component {
  state = { title: '' };

  componentDidMount() {
    if( this.props.showForm && !this.state.showForm )
      this.setState({ showForm: true })
  }

  handleSubmit = (e) => {
    const { title } = this.state;
    const { dispatch, sectionId, editing, id } = this.props
    if( editing )
      dispatch(updateSubSection( id, title, sectionId ))
    else
      dispatch(addSubSection(title, sectionId))
    this.setState({ title: '', showForm: false })
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value }); 

  render() {
    const { title } = this.state
    return (
      <span>
        { this.state.showForm ?
          <Grid>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Segment raised>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <Form.Input
                      name='title'
                      placeholder={ this.props.originalTitle || "Name" }
                      required
                      id='section'
                      value={title}
                      onChange={this.handleChange}
                      autoFocus
                    />
                  </Form.Field>
                  <Button.Group fluid>
                    <Button 
                      basic
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
          <span> 
          <Icon
            float='right'
            link
            size='large'
            name='edit'
            onClick={() => { this.setState({ showForm: true }) }} 
            // content={ this.props.editing ? "Edit" : "Add Subsection" }
          >
          </Icon> 
          </span>
        }
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return { sectionId: state.sectionId }
}

export default connect(mapStateToProps)(SubSectionForm);
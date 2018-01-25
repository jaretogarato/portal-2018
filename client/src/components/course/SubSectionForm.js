import React from 'react';
import { addSubSection, updateSubSection } from '../../actions/subSections.js';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Grid,
  Popup,
  Segment,
  Icon,
} from 'semantic-ui-react';


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
          <Grid style={ this.props.editing ? {position: "fixed", right: 50, zIndex: 1} : {} }>
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
                  <Button 
                    basic
                    fluid
                    onClick={() => { this.setState({ title: '', showForm: false }) }} 
                    content="Cancel"
                  />
                  <Button basic fluid content="Add"/>
              </Form>
            </Segment>
          </Grid> 
        : this.props.editing ? 
          <Popup basic content="Edit Subsection" trigger={
            <Icon 
              link 
              size="large" 
              name='edit' 
              style={{float: "right"}} 
              onClick={() => { this.setState({ showForm: true }) }} /> 
            }  
          />
        : 
        <Button
          basic
          content="Add Subsection"
          onClick={() => { this.setState({ showForm: true }) }} 
        />        }
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return { sectionId: state.sectionId }
}

export default connect(mapStateToProps)(SubSectionForm);
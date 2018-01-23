import React from 'react';
import { updateSection } from '../actions/sections';
import { connect } from 'react-redux';
import { Button, Form, Grid, Segment, Icon } from 'semantic-ui-react';


class SectionEditForm extends React.Component {
  state = { showForm: false };

  handleSubmit = (e) => {
    const { sectionId, dispatch, sections } = this.props
    const section = sections.find((s) => s.id === sectionId)
    dispatch(updateSection({...section, title: this.state.title }))
    this.setState({ title: '', showForm: false })
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const { title } = this.state
    const { sectionId, sections } = this.props
    return (
      <span>
        { this.state.showForm ?
          <Grid>
            <Grid.Column style={{ width: '130%'}}>
              <Segment raised>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <Form.Input
                      name='title'
                      required
                      placeholder={ sections.find((s) => s.id === sectionId).title || "Title" }
                      value={title}
                      onChange={this.handleChange}
                      autoFocus
                    />
                  </Form.Field>
                  <Button basic fluid content="Update" />
                  <Button basic fluid content='Cancel' onClick={() => { this.setState({ title: '', showForm: false }) }} />
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        :
          <span>
            <Icon
              size='large'
              onClick={() => { this.setState({ showForm: true }) }}
              name='edit'
            >
          </Icon>
          </span> 
        }
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.sections,
    sectionId: state.sectionId,
  }
}

export default connect(mapStateToProps)(SectionEditForm);

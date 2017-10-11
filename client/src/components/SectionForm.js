import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Grid, Segment, Header } from 'semantic-ui-react';
import { addSection } from '../actions/sections.js'
import { connect } from 'react-redux';


class SectionForm extends Component {

  state = { title: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    this.props.dispatch(addSection(title))
    this.setState({ title: '' })
  }

  handleChange = (e) => {
    let { title, value } = e.target;
    this.setState({ [title]: value });
  }

  render() {
    const { title } = this.state;

    return(
      <div>
        <Grid>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment raised>
              <Header>Create a Section</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label htmlFor='section'>Section</label>
                  <input
                    fluid
                    title='title'
                    placeholder='Section'
                    required
                    id='section'
                    value={title}
                    onChange={this.handleChange}
                    autoFocus
                  />
                </Form.Field>
                <Button>Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { sections: state.sections }
}

export default connect(mapStateToProps)(SectionForm);

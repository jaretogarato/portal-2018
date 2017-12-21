import React from 'react';
import axios from 'axios';
import { addSubSection } from '../actions/subSections.js';
import { Button, Form } from 'semantic-ui-react';

class SubSectionForm extends Component {
  state = { title: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    this.props.dispatch(addSubSection(title))
    this.setState({ title: '' })
  }

  handleChange = (e) => {
    let { title, value } = e.target;
    this.setState({ [title]: value });
  }

  render() {
    let { title, value } = this.state;

    return(
      <div>
        <Grid>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment raised>
              <Header>Create a Sub-Section</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label htmlFor='subSection'>Group</label>
                  <input
                    fluid
                    title='title'
                    placeholder='Sub-Section'
                    required
                    id='subSection'
                    value={subSection}
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
  return { subSections: state.subSections }
}

export default connect(mapStateToProps)(SubSectionForm);
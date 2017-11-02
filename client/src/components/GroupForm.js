import React from 'react';
import axios from 'axios';
import { addGroup } from '../actions/groups.js';
import { Button, Form } from 'semantic-ui-react';

class GroupForm extends Component {
  state = { title: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    this.props.dispatch(addGroup(title))
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
              <Header>Create a Group</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label htmlFor='group'>Group</label>
                  <input
                    fluid
                    title='title'
                    placeholder='Group'
                    required
                    id='group'
                    value={group}
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
  return { groups: state.groups }
}

export default connect(mapStateToProps)(GroupForm);
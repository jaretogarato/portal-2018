import React, { Component } from 'react';
import { Header, Form, Button, Segment, Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';
import styled from 'styled-components';

const RegisterHeader = styled(Header)`
  text-align: center;
  font-size: 2em !important;
`;

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', firstName: '', lastName: '' };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, passwordConfirmation, firstName, lastName } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser(email, password, passwordConfirmation, firstName, lastName, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = event => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, passwordConfirmation, firstName, lastName } = this.state;

    return (
      <Segment raised>
        <RegisterHeader>Portal</RegisterHeader>
        <Form onSubmit={this.handleSubmit}>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label htmlFor='firstName'>First Name</label>
                  <input
                    id='firstName'
                    placeholder='First Name'
                    required
                    value={firstName}
                    onChange={this.handleChange}
                    error
                  />
                  </Form.Field>
                </Grid.Column>
              <Grid.Column>         
                <Form.Field>
                  <label htmlFor='lastName'>Last Name</label>
                  <input
                    id='lastName'
                    placeholder='Last Name'
                    required
                    value={lastName}
                    onChange={this.handleChange}
                    error
                  />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <label htmlFor='email'>Email</label>
                      <input
                        id='email'
                        placeholder='Email'
                        required
                        value={email}
                        onChange={this.handleChange}
                        error
                      />
                    </Form.Field>
                  </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label htmlFor='password'>Password</label>
                    <input
                      id='password'
                      placeholder='Password'
                      type='password'
                      required
                      value={password}
                      onChange={this.handleChange}
                      error
                    />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <label htmlFor='passwordConfirmation'>Password Confirmation</label>
                      <input
                        id='passwordConfirmation'
                        placeholder='Password Confirmation'
                        type='password'
                        required
                        value={passwordConfirmation}
                        onChange={this.handleChange}
                        error
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              <Segment basic textAlign='center'>
                <Button color='purple' animated>
                  <Button.Content visible>Register</Button.Content>
                  <Button.Content hidden>
                    <Icon loading name='lab' />
                </Button.Content>
              </Button>
            </Segment>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Register);

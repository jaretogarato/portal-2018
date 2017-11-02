import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import { Button, Form, Header, Grid, Segment } from 'semantic-ui-react';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Grid textAlign='center'>
          <Grid.Column style={{ maxWidth: 450, padding: '5%' }}>
            <Segment>
              <Header>Login</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label htmlFor='email'>Email</label>
                  <input
                  icon='user'
                  iconposition='left'                  
                  required
                  id='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <input
                  icon='lock'
                  iconposition='left'
                  required
                  id='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button color='blue'>Login</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default connect()(Login);
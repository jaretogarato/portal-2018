import React, { Component } from 'react';
import { Header, Segment, Form, Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import styled from 'styled-components'

const LoginHeader = styled(Header)`
  color: purple !important;
  text-align: center;
  font-size: 2em !important;
`;

const LoginGrid = styled(Grid)`
  text-align: center;
  justify-content: center;
`;

const LoginSegment = styled(Segment)`
  justify-content: center;
`;

const LoginButton = styled(Button)`
  background-color: purple !important;
  color: white !important;
`;

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
        <LoginGrid>
          <Grid.Column style={{ maxWidth: 450, padding: '5%' }}>
            <LoginSegment>
              <LoginHeader>Login</LoginHeader>
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
              <LoginButton
                >Login
                </LoginButton>
              </Form>
            </LoginSegment>
          </Grid.Column>
        </LoginGrid>
      </div>
    )
  }
}
export default connect()(Login);

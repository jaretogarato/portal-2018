import React, { Component } from 'react';
import HomeBg from '../assets/images/home-image-2880w.jpg';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import { Button, Container, Form, Header, Grid, Segment } from 'semantic-ui-react';
import { HomeBody, HomeWrapper } from '../styles/home-images.js';


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
      <Container fluid>
        <HomeBody bgImage={HomeBg}>
          <HomeWrapper>
            <Segment basic textAlign='center'>
              <Grid textAlign='center' style={styles.login_grid}>
                <Grid.Column style={styles.login_container} mobile={16} tablet={8} computer={8} largeScreen={5} widescreen={5}>
                  <Header as="h2">Login</Header>
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
                </Grid.Column>
              </Grid>
            </Segment>
          </HomeWrapper>
        </HomeBody>
      </Container>
    )
  }
}

const styles = {
  login_container: {
    backgroundColor: 'rgba(255, 255, 255, .55)',
    padding: '30px 20px',
    maxWidth: '100%',
  },
  login_grid: {
    // maxWidth: '45%',
    padding: '5%',
    margin: '0 auto',
  },
}

export default connect()(Login);

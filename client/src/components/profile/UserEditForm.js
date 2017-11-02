import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user';
import { 
  Button, 
  Divider, 
  Form, 
  Grid, 
  Header, 
  Input, 
  Segment, 
  TextArea 
} from 'semantic-ui-react';

class UserEditForm extends React.Component {
  state = { 
    firstName: '', 
    lastName: '', 
    bio: '', 
    email:  '', 
    nickname: '' 
  };

  componentDidMount() {
    const { first_name, last_name, bio, email, nickname } = this.props.user;
    this.setState({ firstName: first_name, bio, email, nickname });
  }

  handleSubmit = (e) => {
    const { firstName, lastName, bio, email, nickname } = this.state;
    this.props.dispatch(editUser({ first_name: firstName, last_name: lastName, bio, email, nickname }, this.props.user.id))
    this.setState({ bio, email, nickname });
    this.props.toggleEdit();
  }

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  render()  {
    const { firstName, lastName, bio, email, nickname } = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Segment textAlign='center' basic>
          <Header as='h2'>{firstName} {lastName}'s  Edit Profile</Header>
        </Segment>
        <Divider />
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment basic style={{ display: 'flex', alignSelf: 'center'}}>
                <Dropzone
                  onDrop={this.onDrop}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h3'>{firstName}'s Bio</Header>
                <Divider />
                  <Form.TextArea
                    name='bio'
                    value={bio}
                    onChange={ this.handleChange }
                  />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h4'>{firstName}'s Email Address: </Header>
                <Divider />
                <Input
                  required
                  type='email'
                  name='email'
                  value={email}
                  onChange={ this.handleChange }
                />
              </Segment>
              <Segment>
                <Header as='h4'>Nickname</Header>
                <Divider />
                <Input
                  name='nickname'
                  value={nickname}
                  onChange={ this.handleChange }
                />
              </Segment>
              <Button type='submit'>Submit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    )
  }    
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserEditForm);
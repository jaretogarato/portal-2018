import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Message,
  Header,
  Divider,
  Button,
  Form,
  Image,
  Card,
  Segment,
  Icon,
} from 'semantic-ui-react';
import moment from 'moment';
import { editNote, deleteNote } from '../../actions/notes';
import { isAdmin, isStudent } from '../../utils/permissions';

class Note extends React.Component {
  state = {
    editing: false,
    visible: false,
  }

  componentDidMount() {
    const { sender_id, updated_at, image, first_name, last_name, id, title, content, visible } = this.props
    this.setState({ sender_id, updated_at, image, first_name, last_name, id, title, content, visible })
  }

  renderEditButton = () => {
    return (
      <Button basic floated='right'
        onClick={ () => this.setState({ editing: !this.state.editing }) }
      >
        Edit
      </Button>
    )
  }

  renderDeleteButton = (note_id) => {
    const { userId } = this.props
    return(
      <Button basic floated='right'
        onClick={ () => this.props.dispatch(deleteNote(note_id, userId)) }
      >
        Delete
      </Button>
    )
  }

  displayNote = () => {
    const { user, permission } = this.props
    const { sender_id, updated_at, image, first_name, last_name, id, title, content } = this.state
    let date = moment(updated_at).format('MMMM D, YYYY')
    const fullName = `${first_name} ${last_name}`
      return(
        <Grid.Row key={id}>
          <Segment info fluid='true'>
            <Card.Content>
              {isAdmin(permission) && this.renderDeleteButton(id)}
              {user.id === sender_id && this.renderEditButton(id)}
              <Image floated='left' size='mini' spaced='left' verticalAlign='top' bordered src={image} />
                <Header as='h4' style={styles.noMargin}>
                 {fullName}
                </Header>
              <Card.Header as='h3'>{title}</Card.Header>
              <Divider fitted />
              <Card.Description>
                {content}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              { !this.props.visible && <Icon name='hide' />}
              <Header as='h6' floated='right'>{ date }</Header>
            </Card.Content>
          </Segment>
      </Grid.Row>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId, dispatch, id } = this.props;
    const { title, content, visible } = this.state;
    const note = { title, content, visible, id };
    this.setState( {editing: false } );
    dispatch(editNote(note, userId));
  }

  handleChecked = (e) => {
    this.setState({ visible: !this.state.visible })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  editNote = () => {
    const { user, title, content } = this.props
    return(
      <Segment as='form' onSubmit={this.handleSubmit}>
        <Button
          floated='right'
          onSubmit={this.handleSubmit}
          basic
        >
          Submit
        </Button>
        <Button
          onClick={ () => this.setState({ editing: !this.state.editing })}
          floated='right'
          basic
        >
          Cancel
        </Button>
        <Image floated='left' size='mini' spaced='left' verticalAlign='top' bordered src={user.image} /> { }
          <Header as='h4' style={ styles.noMargin }>
            {`${user.first_name} ${user.last_name}`}
          </Header>
          <Form.Input
            autoFocus
            name='title'
            defaultValue={title}
            width={7}
            onChange={this.handleChange}
          />
          <Form.Field
            label='Visible to student?'
            checked={this.state.visible}
            control='input'
            type='checkbox'
            onChange={this.handleChecked}
          />
        <Divider fitted />
        <Card.Description>
          <Form.TextArea
            style={{ minHeight: 75, width: '100%' }}
            name='content'
            defaultValue={content}
            onChange={this.handleChange}
          />
        </Card.Description>
      </Segment>
    )
  }

  checkForStudentStatus = () => {
    let isBoolean = this.props.user.enrollments.map( enr => {
      return enr.role === 'student'
    })
    return isBoolean[0]
  }

  whoCanSeeNotes = () => {
    const { permission } = this.props
    const { visible } = this.state
    if(isStudent(permission)){
      return (
        <div>
          { visible && this.displayNote() }
        </div>
      )
    }
    else {
      if(this.checkForStudentStatus()){
        return(
          <div>
            { visible && this.displayNote() }
          </div>
        )
      }else{
        return(
          <div>
            { this.state.editing ? this.editNote() : this.displayNote() }
          </div>
        )
      }
    }
  }

  render () {
    return(
      <Grid.Column style={ styles.padding } width={16}>
        { this.whoCanSeeNotes() }
      </Grid.Column>
    )
  }
}

const styles = {
  noMargin: {
    margin: '0',
  },
  padding: {
    padding: '1%',
  },
}

const mapStateToProps = (state) => {
  return {
    permission: state.permissions,
    user: state.user
  }
}

export default connect(mapStateToProps)(Note);

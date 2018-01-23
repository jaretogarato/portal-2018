import React, { Component } from 'react';
import { Header, Button, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getLecture, deleteLecture } from '../../actions/lectures';
import EditLecture from './EditLecture';
import moment from 'moment';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styles';

class Lecture extends Component {
  state = { edit: false };

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getLecture(id))
  }

  toggleEdit = () => {
    const { edit } = this.state
    this.setState({ edit: !edit})
  }

  deleteLecture = (id) => {
    const deleted = window.confirm('Delete Lecture?')
    if (deleted)
    this.props.dispatch(deleteLecture(id, this.props.history ))
  }


  render() {
    const { user, lecture: { title, id, content, created_at } } = this.props
    let created = moment(created_at).format('MMMM D, YYYY')
    if(this.state.edit) {
      return(
        <Segment basic>
          <Button basic onClick={this.toggleEdit}>
            Cancel Editing
          </Button>
        <EditLecture toggleEdit={this.toggleEdit}/>
        </Segment>
      )
    } else {
    return (
      <Segment basic name="lecture">
      { user.is_admin &&
        [
          <Link to={'./'} >
            <Button basic floated='right'>Cancel</Button>
          </Link>,
          <Button basic floated='right' name='delete' onClick={() => this.deleteAssignment(id)}>Delete</Button>,
          <Button basic  floated='right' onClick={this.toggleEdit}>Edit</Button>
        ]
      }
        <Header as='h1' className="page_title">{title}</Header>
        <PageTitle>{title}</PageTitle>
        <List>
          <List.Item>
            <Header as='h3' style={ styles.listItemHeader }>Description:</Header> {content}
          </List.Item>
          <List.Item>
            <Header as='h3' style={ styles.listItemHeader }>Created:</Header> {created}
          </List.Item>
        </List>
      </Segment>
    );
  }
}
}

const styles = {
  listItemHeader: {
    display: 'inline-block',
  },
}

const mapStateToProps = (state) => {
  return { lecture: state.lectures, user: state.user }
}

export default connect(mapStateToProps)(Lecture);

import React, { Component } from 'react';
import {
  Button,
  Segment,
  List,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAssignment } from '../../actions/assignment';
import EditAssignment from './EditAssignment';
import axios from 'axios';
import { PageTitle } from '../../styles/styledComponents';



class Assignment extends Component {
  state = { loaded: false, edit: false };

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getAssignment(id))
    this.checkLoaded()
  }

  componentDidUpdate() {
    this.checkLoaded()
  }

  checkLoaded = () => {
    if (!this.state.loaded && this.props.currentAssignment) {
      this.setState({ loaded: true })
    }
  }

  deleteAssignment = () => {
    const deleted = window.confirm("Delete Assignment?")
    if (deleted) {
      axios.delete(`/api/assignments/${this.props.currentAssignment.id}`)
        .then(res => {
          this.props.history.push('./')
        }).catch(err => {
          // TODO - Display flash message
      });
    }
  }

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({ edit: !edit })
  }

  displayAssignment = () => {
    const {
      user,
      currentAssignment: {
        title, id, points, content,
        published, group_assignment,
        created_at,
        submission_type, due_date
      }
    } = this.props;

    if (this.state.edit) {
      return (
        <Segment basic>
          <Button basic onClick={this.toggleEdit}>
            Cancel Editing
        </Button>
          <EditAssignment toggleEdit={this.toggleEdit} />
        </Segment>
      )
    } else {
      return (
        <Segment clearing >
          <PageTitle>{title}</PageTitle>
          { user.is_admin &&
            [
              <Link to={'./'} >
                <Button basic floated='right'>View All Assignments</Button>
              </Link>,
              <Button basic floated='right' name='delete' onClick={() => this.deleteAssignment(id)}>Delete</Button>,
              <Button basic  floated='right' onClick={this.toggleEdit}>Edit</Button>
            ]
          }
          <List>
            <List.Item>
              Points: {points}
            </List.Item>
            <List.Item>
              Status: {published ? "Published" : "Unpublished"}
            </List.Item>
            <List.Item>
              Created: {created_at}
            </List.Item>
            <List.Item>
              Due Date: {due_date}
            </List.Item>
            <List.Item>
              Submission Type: {submission_type} {group_assignment ? " - Group Assignment" : ""}
            </List.Item>
            <List.Item>
              <br />
              Description:
              <hr /> 
              <div dangerouslySetInnerHTML={{__html: content}}></div>
            </List.Item>
          </List>
        </Segment>
      );
    }
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return this.displayAssignment()
    } else {
      return (
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { currentAssignment: state.singleAssignment, user: state.user }
}

export default connect(mapStateToProps)(Assignment);

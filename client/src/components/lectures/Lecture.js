import React, { Component } from 'react';
import {
  Button,
  Segment,
  List,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getLecture, deleteLecture } from '../../actions/lectures';
import EditLecture from './EditLecture';
import moment from 'moment';
import { connect } from 'react-redux';
import { PageTitle, PageSubTitle } from '../../styles/styledComponents';


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
            <Button basic floated='right'>View All Lectures</Button>
          </Link>,
          <Button basic floated='right' name='delete' onClick={() => this.deleteLecture(id)}>Delete</Button>,
          <Button basic  floated='right' onClick={this.toggleEdit}>Edit</Button>
        ]
      }
        <PageTitle>{title}</PageTitle>
        <List>
          <List.Item>
            <PageSubTitle style={ styles.listItemHeader }>Description:</PageSubTitle> {content}
          </List.Item>
          <List.Item>
            <PageSubTitle style={ styles.listItemHeader }>Created:</PageSubTitle> {created}
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

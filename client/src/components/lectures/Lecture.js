import React, { Component } from 'react';
import { Header, Button, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getLecture, deleteLecture } from '../../actions/lectures';
import EditLecture from './EditLecture';
import moment from 'moment';
import { connect } from 'react-redux';

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
    const { title, id, content, created_at } = this.props.lecture
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
        <Link to={'./'} >
          <Button floated='right' basic color='yellow'>All Lectures</Button>
        </Link>
        <Button floated='right' basic color='red' name='delete' onClick={() => this.deleteLecture(id)}>Delete</Button>
        <Button floated='right' basic color='purple' onClick={this.toggleEdit}>Edit</Button>
        <Header as='h1' textAlign='center' style={styles.pageTitle}>{title}</Header>
        <List>
          <List.Item>
            <Header as='h2' style={ styles.listItemHeader }>Description:</Header> {content}
          </List.Item>
          <List.Item>
            <Header as='h2' style={ styles.listItemHeader }>Created:</Header> {created}
          </List.Item>
        </List>
      </Segment>
    );
  }
}
}

const styles = {
  pageTitle: {
    paddingTop: '2%',
    textDecoration: 'underline',
    fontWeight: 'bolder',
  },
  listItemHeader: {
    display: 'inline-block',
  },
}

const mapStateToProps = (state) => {
  return { lecture: state.lectures }
}

export default connect(mapStateToProps)(Lecture);



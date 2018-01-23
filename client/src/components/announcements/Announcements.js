import React from 'react';
import AnnouncementForm from './AnnouncementForm';
import DisplayAnnouncements from './DisplayAnnouncements';
import { Button, Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Announcements extends React.Component {
  state = { showForm: false };

  toggleForm = () => this.setState({ showForm: !this.state.showForm });

  render() {
    const { showForm } = this.state;
    return(
      <Segment basic>
        <Header as='h2'>Announcements</Header>
        { this.props.user.is_admin && 
          <Button onClick={this.toggleForm}>
            {showForm ? 'Close Form' : 'Add Announcement'}
          </Button> 
        }
          { showForm && <AnnouncementForm toggleForm={this.toggleForm} /> }
        <DisplayAnnouncements />
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    user: state.user,
    course: state.course,
  }
}

export default connect(mapStateToProps)(Announcements);

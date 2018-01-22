import React from 'react';
import DisplayAnnouncements from './DisplayAnnouncements';
import { Button, Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Announcements extends React.Component {
  render() {
    return(
      <Segment basic>
        <Header as='h2'>Announcements</Header>
        { this.props.user.is_admin && <Button>Add Announcement</Button> }
        <DisplayAnnouncements />
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Announcements);

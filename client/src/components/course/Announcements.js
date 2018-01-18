import React from 'react';
import DisplayAnnouncements from './DisplayAnnouncements';
import { Button, Header, Segment } from 'semantic-ui-react';

class Announcements extends React.Component {
  render() {
    return(
      <Segment basic>
        <Header as='h1'>Announcement</Header>
        <Button>Add Announcement</Button>
        <DisplayAnnouncements />
      </Segment>
    )
  }
}

export default Announcements;
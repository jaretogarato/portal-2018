import React from 'react';
import DisplayAnnouncements from './DisplayAnnouncements';
import { Button, Segment } from 'semantic-ui-react';
import { PageTitle } from '../../styles/styledComponents';


class Announcements extends React.Component {
  render() {
    return(
      <Segment basic>
        <PageTitle>Announcement</PageTitle>
        <Button basic>Add Announcement</Button>
        <DisplayAnnouncements />
      </Segment>
    );
  }
}

export default Announcements;
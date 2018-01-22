import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

class Announcement extends React.Component {
  render() {
    const { announcement: { title, body } } = this.props;
    return(
      <Segment fluid>
        <Header as='h2'>{title}</Header>
        <Header as='h5'>{body}</Header>
      </Segment>
    )
  }
}

export default Announcement;
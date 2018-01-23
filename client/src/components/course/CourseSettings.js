import React from 'react';
import { Segment } from 'semantic-ui-react';
import { PageTitle } from '../../styles/styledComponents';

class CourseSettings extends React.Component {
  render() {
    return(
      <Segment basic>
        <PageTitle>Course Settings</PageTitle>
      </Segment>
    )
  }
}

export default CourseSettings;

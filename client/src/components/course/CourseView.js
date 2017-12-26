import React from 'react';
import SectionSelect from '../SectionSelect';
import SectionShow from '../SectionShow';
import { Container, Grid, Segment } from 'semantic-ui-react';
import CourseSideNav from '../CourseSideNav';
import { Route } from 'react-router-dom';

class CourseView extends React.Component {

  render() {
    return (
      <div>
        <Segment basic />
        <Container fluid style={styles.noBorder}>
          <Grid style={styles.noBorder}>
            <Grid.Column width={3}>
              <Segment style={styles.sideBar}>
                <Route component={CourseSideNav} />
              </Segment> 
            </Grid.Column>
            <Grid.Column width={3}>
              <Segment>
                <SectionSelect />
              </Segment>
            </Grid.Column>
            <Grid.Column width={9}>
              <Segment>
                <SectionShow />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

const styles = {
  noBorder: {
    border:'none',
  },
  
  sideBar: {
    height: "65vh",
    width: '11em',
  }
}

export default CourseView;

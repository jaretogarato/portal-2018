import React from 'react';
import NavBarSecondary from './NavBarSecondary';
import SectionSelect from '../SectionSelect';
import SectionShow from '../SectionShow';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';
import CourseSideNav from '../CourseSideNav';
import { Link, Route } from 'react-router-dom';

class CourseView extends React.Component {
  state = {};

  handleContextRef = (contextRef) => {
    this.setState({ contextRef })
  }

  render() {
    let { contextRef } = this.state;

    return (
      <div ref={this.handleContextRef}>
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
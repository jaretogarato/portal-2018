import React from 'react';
import NavBarSecondary from './NavBarSecondary';
import SectionSelect from '../SectionSelect';
import SectionShow from '../SectionShow';
import { Container, Grid, Header, Segment, Sticky } from 'semantic-ui-react';

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
        <Container style={styles.noBorder}>
        </Container>
      </div>
    );
  }
}

const styles = {
  noBorder: {
    border:'none',
  }
}

export default CourseView;
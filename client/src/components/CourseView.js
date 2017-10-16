import React, { Component } from 'react';
import { Container, Grid, Header, Segment, Sticky } from 'semantic-ui-react';
import SectionSelect from './SectionSelect';
import SectionShow from './SectionShow';
import RightTab from './RightTab';
import NavBarSecondary from './NavBarSecondary';


class CourseView extends Component {
  state = {
    active: true,
    title:'Devpoint',
    body:'Portal',
    bgImg:'ImgHero',
  }

  handleContextRef = (contextRef) => {
    this.setState({ contextRef })
  }

  render() {
    let { contextRef, active } = this.state;
    // const { bgImg, title, body } = this.props;

    return (
      <div ref={this.handleContextRef}>
        <NavBarSecondary />
        <Segment basic />
        {/* ---------- 3 col grid --------- */}
        <Container style={styles.noBorder}>
          <Grid style={styles.noBorder}>
            <Grid.Column width={3}>
              <Segment>
                <SectionSelect />
              </Segment>
            </Grid.Column>
            <Grid.Column width={9}>
              <Segment>
                <SectionShow />
                {/* <OurMainViewComponent course="fall_2017" role="student" page="2" />  */}
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Sticky active={active} context={contextRef}>
                <RightTab />
              </Sticky>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

const styles = {
  headerSqueezed: {
    maxHeight: '300px',
    overflow: 'hidden',
  },
  fluidHeader: {
    minHeight:'300px',
  },
  noBorder: {
    border:'none',
  },
}

export default CourseView;

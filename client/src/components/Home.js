import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Footer from './Footer';
import { Container, Grid, Header, Segment, Sticky } from 'semantic-ui-react';
// import Lorem from 'react-lorem-component';
import ImgHero from '../assets/images/hero-image.png';
import SectionSelect from './SectionSelect';
import SectionShow from './SectionShow';
import RightTab from './RightTab';
// import HeroHeader from './HeroHeader';
// import ImageSectionDiv from '../../styles/ImageSectionDiv'
import NavBarSecondary from './NavBarSecondary';
import {
  HeroHeader,
  HeroHeaderTextContainer,
  HeroHeaderImageContainer,
} from '../styles/styles';

class Home extends Component {
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
        {/* ---------- header --------- */}
        <Container fluid basic>
          <HeroHeader bgImage={ImgHero}>
            <div className='layer'>
              <HeroHeaderTextContainer>
                <Header as='h1' style={styles.h1}>{'DevPoint'}</Header>
                <Header as='h3' style={styles.h3}>{'Portal'}</Header>
                <br/>
              </HeroHeaderTextContainer>
            </div>
          </HeroHeader>
          <NavBarSecondary />
          <Segment basic />
        </Container>

        {/* ---------- 3 col grid --------- */}
        <Container>
          <Grid>
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
  h1: {
    color:'#FFF',
    fontSize: '4em',
  },
  h3: {
    color:'#FFF',
    fontSize: '3em',
  }
}

export default Home;

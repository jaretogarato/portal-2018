import React, { Component } from 'react';
import ImgHero from '../assets/images/hero-image.png';
import { Container, Header, Segment, } from 'semantic-ui-react';
import {
  HeroHeader,
  HeroHeaderTextContainer,
} from '../styles/styles';

class Home extends Component {
  render () {
    return(
      <Container fluid>
        <HeroHeader bgImage={ImgHero}>
          <div className='layer'>
            <HeroHeaderTextContainer>
              <Header as='h1' style={styles.h1}>{'Portal'}</Header>
              <Header as='h3' style={styles.h3}>{'by DevPoint'}</Header>
              <br />
            </HeroHeaderTextContainer>
          </div>
        </HeroHeader>
      </Container>
    )
  }
}

const styles = {
  h1: {
    color: '#FFF',
    fontSize: '5em',
  },
  h3: {
    color: '#FFF',
    fontSize: '2.5em',
    paddingTop: '0',
    marginTop: '-25px',
  },
}

export default Home;
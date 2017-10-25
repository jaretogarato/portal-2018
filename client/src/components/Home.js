import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../actions/courses';
import { HomeBody, HomeWrapper, HomeLogo } from '../styles/home-images.js';
import { Container, Header, Segment } from 'semantic-ui-react';
import ImgHero from '../assets/images/hero-image.png';
import HomeBg from '../assets/images/home-image-2880w.jpg';
import PortalLogo from '../assets/images/dps-portal-logo.png';
import { HeroHeader, HeroHeaderTextContainer } from '../styles/styles';

class Home extends Component {
  state = { loaded: false, userCourses: [] }

  componentDidMount()  {
    const { dispatch, userId } = this.props;
    if(userId)
      dispatch(getCoursesByStudent(userId, this.loaded))
  }

  loaded = () => {
    this.setState({ loaded: true });
  }

  render () {
    return(
      <Container fluid>
        {/* <HeroHeader bgImage={ImgHero}>
          <div className='layer'>
            <HeroHeaderTextContainer>
              <Header as='h1' style={styles.h1}>{'Portal'}</Header>
              <Header as='h3' style={styles.h3}>{'by DevPoint'}</Header>
              <br />
            </HeroHeaderTextContainer>
          </div>
        </HeroHeader> */}
        {/* <HomeImage /> */}
        <HomeBody bgImage={HomeBg}>
          <HomeWrapper>
            <HomeLogo bgImage={PortalLogo}>
              {/* {PortalLogo} */}
              {/* <img src='../assets/images/dps-portal-logo.png' /> */}
              {/* <img src='../assets/images/hero-image.png' /> */}
            </HomeLogo>
            {/* <div id="Stage" class="EDGE-145598600">{HomeAnimation}</div> */}
            {/* <div id="Stage" class="EDGE-145598600">{HomeAnimation}</div> */}
          </HomeWrapper>
        </HomeBody>
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
const mapStateToProps = (state) => {
  return {
    userId: state.user.id
  }
}

export default connect(mapStateToProps)(Home);

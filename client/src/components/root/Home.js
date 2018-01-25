import React from 'react';
import HomeBg from '../../assets/images/home-image-2880w.jpg';
import PortalLogo from '../../assets/images/dps-portal-logo.png';
import { Container} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../../actions/courses';
import {
  HomeBody,
  HomeLogo,
  HomeWrapper,
} from '../../styles/home-images.js';
import { PortalButton } from '../../styles/styledComponents';


class Home extends React.Component {
  state = { loaded: false, userCourses: [] };

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
        <HomeBody bgImage={HomeBg} style={styles.heroImage}>
          <HomeWrapper>
            <HomeLogo bgImage={PortalLogo} />
            <PortalButton yes>Yes</PortalButton>
            <PortalButton no>No</PortalButton>
            <PortalButton maybe>Maybe</PortalButton>
            <PortalButton neutral>Neutral</PortalButton>
            <PortalButton>Default</PortalButton>
          </HomeWrapper>
        </HomeBody>
      </Container>
    )
  }
}

const styles = {
  heroImage: {
    position: 'fixed',
    top: 0, bottom: 0, left: 0, right: 0,
  },
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id
  }
}

export default connect(mapStateToProps)(Home);

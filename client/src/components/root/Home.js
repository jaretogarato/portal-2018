import React from 'react';
import HomeBg from '../../assets/images/home-image-2880w.jpg';
import PortalLogo from '../../assets/images/dps-portal-logo.png';
import { Container} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../../actions/courses';
import { HomeBody, HomeLogo, HomeWrapper } from '../../styles/home-images.js';

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
        <HomeBody bgImage={HomeBg}>
          <HomeWrapper>
            <HomeLogo bgImage={PortalLogo}>
            </HomeLogo>
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
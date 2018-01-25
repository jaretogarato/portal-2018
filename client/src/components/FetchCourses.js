import React from 'react';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../actions/courses';
import {
  Dimmer,
  Loader,
} from 'semantic-ui-react';

import NavBar from './shared/NavBar';

class FetchCourses extends React.Component {
  state = { loaded: true, userCourses: [] };

  componentDidMount() {
    const { dispatch, userId } = this.props;
    if(userId)
    dispatch(getCoursesByStudent(userId, this.loaded))
  }

  render() {
    const { loaded } = this.state;
    if(loaded) {
      return(
        <div>
          <NavBar />
        </div>
      )
    }
    return(
      <div>
        <br />
        <Dimmer active inverted>
	        <Loader inverted size='large'>Loading</Loader>
	      </Dimmer>
      </div>
    )
  }
}

export default connect()(FetchCourses);

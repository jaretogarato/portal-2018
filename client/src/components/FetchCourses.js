import React from 'react';
import Home from './root/Home';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../actions/courses';
import { Dimmer, Loader } from 'semantic-ui-react';

class FetchCourses extends React.Component {
  state = { loaded: true };

  componentDidMount() {
    const { dispatch, userId } = this.props;
    dispatch(getCoursesByStudent(userId, this.state.loaded))
  }

  render() {
    const { loaded } = this.state;
    if(loaded) {
      return(
        <div>
          <Route exact path='/' component={Home} />
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
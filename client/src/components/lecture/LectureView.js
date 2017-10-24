import React, { Component } from 'react';
import { connect } from 'react-redux';

class LectureView extends Component {
  state = { lecture: {} }

  componentWillMount = () => {
    const { lecture } = this.props;
    if(lecture){
      this.setState({lecture});
    }else{
      this.props.history.push('/course_view');
    }
  }

  render() {
    const { title } = this.state.lecture;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    lecture: state.lectures.filter(lecture => lecture.id == props.match.params.id)[0]
  }
}
export default connect(mapStateToProps)(LectureView);

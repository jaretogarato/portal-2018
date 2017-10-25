import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Segment } from 'semantic-ui-react';

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
    const { title, content, lecture } = this.state.lecture;
    return (
      <Container>
        <Container as='h1' textAlign='center'>{title}</Container>
        <div dangerouslySetInnerHTML={{ __html: content}} />
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    lecture: state.lectures.filter(lecture => lecture.id == props.match.params.id)[0]
  }
}
export default connect(mapStateToProps)(LectureView);
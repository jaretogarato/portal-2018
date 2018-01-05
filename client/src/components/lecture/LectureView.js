import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

class LectureView extends React.Component {
  state = { lecture: {} };

  componentWillMount = () => {
    const { lecture } = this.props;
    if(lecture){
      this.setState({lecture});
    } else {
      this.props.history.push('/courses');
    }
  }

  render() {
    const { title, content } = this.state.lecture;
    
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
    lecture: state.lectures.find(lecture => lecture.id === parseInt(props.match.params.id, 10))
  }
}

export default connect(mapStateToProps)(LectureView);

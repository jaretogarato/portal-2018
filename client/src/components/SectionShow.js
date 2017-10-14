import React, { Component } from 'react';
import { Container, Accordion, Segment, Icon, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import axios from 'axios';

// parent
// const dummySections = [
//   { id: 0, name: 'Week 1' },
//   { id: 1, name: 'Week 2' },
//   { id: 2, name: 'Week 3' },
// ]
//
// // groups belong to sections
// const dummyGroups = [
//   { id: 0, name: 'Day 1', section: 0},
//   { id: 1, name: 'Day 2', section: 0},
//   { id: 2, name: 'Day 3', section: 0},
//   { id: 3, name: 'Day 4', section: 0},
//   { id: 4, name: 'Day 5', section: 0},
//
//   { id: 5, name: 'Day 1', section: 1},
//   { id: 6, name: 'Day 2', section: 1},
//   { id: 7, name: 'Day 3', section: 1},
//   { id: 8, name: 'Day 4', section: 1},
//   { id: 9, name: 'Day 5', section: 1},
//
//   { id: 10, name: 'Day 1', section: 2},
//   { id: 11, name: 'Day 2', section: 2},
//   { id: 12, name: 'Day 3', section: 2},
//   { id: 13, name: 'Day 4', section: 2},
//   { id: 14, name: 'Day 5', section: 2},
// ]
const getSections = (course_id) => {
  return(dispatch) => {
    //         vvvvvvvv first argument is path, defined by routes
    // const course_id = 0;

    axios.get(`/api/courses/1/sections`)
      .then(res => {
        // res will return an object
        const {} = res;
        // dispatch(login(user));
        console.log('******* res from getSections in SectionShow component **');
        console.log(res);
      })
      .catch( err => {
        console.log('we are in the catch');
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Retrieve Sections', 'red'));

      });
  }
}

class SectionShow extends Component {
  state = { activeSectionId: 1, activeGroupId: 1 }

  componentWillMount() {
    // set the active section id upon mount
    this.setState({ activeSectionId: this.props.activeSectionId });
    this.setState({ activeCourseId: this.props.activeCourseId });
    console.log('vvvvv');
    console.log(this.props.activeCourseId);
    console.log('vvvvv');
    console.log(this.props.activeSectionId);
  }

  // componentDidMount(){
  //   this.setState({ activeCourseId: this.props.activeCourseId });
  //   console.log('vvvvv');
  //   console.log(this.props.activeCourseId);
  //
  //   // this.props.dispatch(getSections(this.props.activeCourseId));
  // }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ activeCourseId: nextProps.activeCourseId });
    this.setState({ activeSectionId: nextProps.activeSectionId });
  }

  getGroups = (section) => {
    // get groups
  }

  renderSection = () => {
    return(
      <div>
        <h3>activeCourseId: {this.state.activeCourseId} :: activeSectionId: {this.state.activeSectionId}</h3>
      </div>
    )
  }

  handleModClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeGroupId } = this.state;
    const newIndex = activeGroupId === index ? -1 : index;

    this.setState({ activeGroupId: newIndex });
  }

  // const showSection (activeSectionId) => {
  //
  // }

  render() {
    const { activeGroupId } = this.state;
    // console.log(this.state);
    // console.log(activeGroupId);
    return (
      <div>
        {/* {getSections()} */}
        <Container textAlign='left'>
          {/* vvv just renders section id so far  */}
          {this.renderSection()}

          <Header as='h3' align='center'>Week 1</Header>
          <Accordion styled>
            <Accordion.Title active={activeGroupId === 0} index={0} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day1
            </Accordion.Title>
            <Accordion.Content active={activeGroupId === 0}>
              <Segment.Group>
                <Segment>
                  <p>Stuff about day 1</p>
                </Segment>
                <Segment>
                  <p>More stuff about day 1</p>
                </Segment>
                <Segment>
                  <p>Even more stuff about day 1</p>
                </Segment>
              </Segment.Group>
            </Accordion.Content>
            <Accordion.Title active={activeGroupId === 1} index={1} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day2
            </Accordion.Title>
            <Accordion.Content active={activeGroupId === 1}>
              <Segment.Group>
                <Segment>
                  <p>Stuff about day 2</p>
                </Segment>
                <Segment>
                  <p>More stuff about day 2</p>
                </Segment>
                <Segment>
                  <p>Even more stuff about day 2</p>
                </Segment>
              </Segment.Group>
            </Accordion.Content>
            <Accordion.Title active={activeGroupId === 2} index={2} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day2
            </Accordion.Title>
            <Accordion.Content active={activeGroupId === 2}>
              <Segment.Group>
                <Segment>
                  <p>Stuff about day 3</p>
                </Segment>
                <Segment>
                  <p>More stuff about day 3</p>
                </Segment>
                <Segment>
                  <p>Even more stuff about day 3</p>
                </Segment>
              </Segment.Group>
            </Accordion.Content>
          </Accordion>
        </Container>
        <Divider />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("-----");
  // console.log(state);
  // debugger;
  return{activeSectionId: state.activeSectionId, activeCourseId: state.activeCourseId};
  // ^^^^^^^ arbitrary name :   ^^^^^ look in redux store for activeSectionId
}

export default connect(mapStateToProps)(SectionShow);

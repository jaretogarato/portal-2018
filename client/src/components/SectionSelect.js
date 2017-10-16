import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu} from 'semantic-ui-react';
import { setSection } from '../actions/section';
import { getSections } from '../actions/sections';
import { getCourses } from '../actions/courses';

// const getCourses = () => {
//   this.props.dispatch(getCourses);
//   console.log('vv this.props vv');
//   console.log(this.props);
// }

class SectionSelect extends Component {
  state = {courses: {}, activeSectionId: 1}

  componentDidMount(){
    // get all courses
    // this.props.dispatch({ type: 'GET_COURSES', courses: this.state.courses })

    // set up initial course id
    // this.props.dispatch({ type: 'SET_COURSE', course: this.state.activeCourseId });

    // set up initial section id
    // this.props.dispatch({ type: 'SET_SECTION', section: this.state.activeSectionId });

    // console.log('vv this.state from componentDidMount vv');
    // console.log(this.state);
  }

  handleClick = (e) => {
    this.setState({ activeSectionId: parseInt(e.currentTarget.id, 10) }, () => {
      console.log('**-- from SectionSelect component --**')
      console.log(this.state);
      console.log(this.state.activeSectionId);
      this.props.dispatch(setSection(this.state.activeSectionId));
    });
  }

  render() {
    let { activeCourseId, activeSectionId } = this.state;
    return(
      <Menu fluid vertical tabular>
        <Menu.Item id='1' name='week1' active={activeSectionId === 1} onClick={e => this.handleClick(e)}></Menu.Item>
        <Menu.Item id='2' name='week2' active={activeSectionId === 2} onClick={this.handleClick}></Menu.Item>
        <Menu.Item id='3' name='week3' active={activeSectionId === 3} onClick={this.handleClick}></Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeSectionId: state.activeSectionId }
}

export default connect(mapStateToProps)(SectionSelect);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Dimmer, Loader, Menu, Segment } from 'semantic-ui-react';
import { setSection } from '../actions/section';
import { getSections } from '../actions/sections';
import { getCourses } from '../actions/courses';
import { setCourse } from '../actions/course';

class SectionSelect extends Component {
  state = {
    coursesLoaded: false,
    sectionsLoaded: false,
    groupsLoaded: false,
    itemsLoaded: false,
    courses: [],
    sections: [],
    activeCourseId: 1,
    activeSectionId: 1,
  }

  setCoursesLoaded = () => this.setState({ coursesLoaded: true });
  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });
  setGroupsLoaded = () => this.setState({ groupsLoaded: true });
  setItemsLoaded = () => this.setState({ itemsLoaded: true });

  componentWillMount() {
    const { dispatch } = this.props;
    const { activeCourseId, activeSectionId } = this.state;

    // set up initial course id
    dispatch(setCourse(activeCourseId));

    // set up initial section id for the course
    dispatch(setSection(activeSectionId));

    // pre-populate redux store with courses
    dispatch(getCourses());
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { activeCourseId } = this.state;

    // load sections for active course
    dispatch(getSections(activeCourseId, this.setSectionsLoaded));
  }

  handleClick = (e) => {
    this.setState({ activeSectionId: parseInt(e.currentTarget.id, 10) }, () => {
      this.props.dispatch(setSection(this.state.activeSectionId));
    });
  }

  render() {
    let { activeCourseId, activeSectionId } = this.state;
    if(this.state.sectionsLoaded) {
      return(
        <div>
          <h3>Sections</h3>
          <Menu fluid vertical tabular>
            {this.props.sections.map( section =>
              <Menu.Item
                key={section.id}
                id={section.id}
                name={section.title}
                active={activeSectionId === section.id}
                onClick={e => this.handleClick(e)}>
              </Menu.Item>
              )
            }
          </Menu>
        </div>
      );
    } else {
      return(
        <div>
          <Dimmer active inverted>
            <Loader inverted size='large'>Loading</Loader>
          </Dimmer>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { sections: state.sections, activeSectionId: state.activeSectionId, activeCourseId: state.activeCourseId }
}

export default connect(mapStateToProps)(SectionSelect);

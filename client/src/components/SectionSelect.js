import React from 'react';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../actions/courses';
import { getGroups} from '../actions/groups';
import { getSections } from '../actions/sections';
import { setCourse } from '../actions/courses';
import { setGroup } from '../actions/group';
import { setGroupId } from '../actions/groupId';
import { setSection } from '../actions/section';
import { Dimmer, Loader, Menu } from 'semantic-ui-react';

class SectionSelect extends React.Component {
  state = {
    coursesLoaded: false,
    sectionsLoaded: false,
    groupsLoaded: false,
    courseId: 1,
    sectionId: 1
  };

  setCoursesLoaded = () => this.setState({ coursesLoaded: true });

  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });

  setGroupsLoaded = () => this.setState({ groupsLoaded: true });

  componentWillMount() {
    const { dispatch, user: { id: userId, first_name } } = this.props;
    const { courseId, sectionId } = this.state;

    // set up initial course id
    dispatch(setCourse(this.state.courseId));

    // get the courses to which a user belongs
    dispatch(getCoursesByStudent(userId, this.setCoursesLoaded));

    // set up initial section id for the course
    dispatch(setSection(sectionId));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { courseId, sectionId } = this.state;

    // load sections for active course
    dispatch(getSections(courseId, this.setSectionsLoaded));

    // testing, testing
    dispatch(setSection(sectionId));
  }

  componentWillReceiveProps = (nextProps) => {
    const { sectionId } = this.state;
    const { dispatch, groupId } = this.props;

    if( sectionId != nextProps.sectionId){
      dispatch(setSection(sectionId));
    }
  }

  handleClick = (e) => {
    this.setState({ sectionId: parseInt(e.currentTarget.id, 10) }, () => {
      this.props.dispatch(setSection(this.state.sectionId));
    });
  }

  render() {
    let { coursesLoaded, sectionsLoaded, courseId, sectionId } = this.state;

    if(sectionsLoaded && coursesLoaded) {
      return(
        <div>
          <h3>Sections</h3>
          <Menu fluid vertical tabular>
            {this.props.sections.map( section =>
              <Menu.Item
                key={section.id}
                id={section.id}
                name={section.title}
                active={sectionId === section.id}
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
  return {
    user: state.user,
    sections: state.sections,
    sectionId: state.sectionId,
    section: state.section,
    courses: state.courses,
    courseId: state.courseId,
  }
}

export default connect(mapStateToProps)(SectionSelect);
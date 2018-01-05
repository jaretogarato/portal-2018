import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../../actions/courses';
import { getSections } from '../../actions/sections';
import { setCourse } from '../../actions/courses';
import { setSection } from '../../actions/section';
import { Accordion, Dimmer, Grid, Loader, Icon, Menu, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class SectionSelect extends React.Component {
  state = {
    activeIndex: 0,
    coursesLoaded: false,
    sectionsLoaded: false,
    subSectionLoaded: false,
    courseId: null,
    sectionId: null,
  };

  setCoursesLoaded = () => this.setState({ coursesLoaded: true });

  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });

  setSubSectionLoaded = () => this.setState({ subSectionsLoaded: true });

  componentWillMount() {
    const { dispatch, user: { id: userId } } = this.props;
    const { courseId, sectionId } = this.state;

    // set up initial course id
    // TODO: prevent user from navigating to any page via URL
    this.setState({
      courseId: parseInt(this.props.match.params.id, 10),
      coursesLoaded: true
    })
    dispatch(setCourse(courseId));

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
    const { dispatch } = this.props;

    if( sectionId !== nextProps.sectionId){
      dispatch(setSection(sectionId));
    }
  }

  handleClick = (e) => {
    this.setState({ sectionId: parseInt(e.currentTarget.id, 10) }, () => {
      this.props.dispatch(setSection(this.state.sectionId));
    });
  }

  handleSubClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  displaySubSections = () => {
    return subSections.map( ss => (
      <Accordion fluid styled>
        <Accordion.Title active={this.state.activeIndex === ss.id} index={ss.id} onClick={this.handleSubClick}>
          <Icon name='dropdown' />
          { ss.title }
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === ss.id}>
          { this.displayItems() }
        </Accordion.Content>
      </Accordion>
    ))
  }

  displayItems = () => {
    return items.map( (item, index) => (
      <Link id={index} to='/courses/1/sections'>
        <Segment>{item.title}</Segment>
      </Link>
    ))
  }


  render() {
    let { coursesLoaded, sectionsLoaded, sectionId } = this.state;

    if(sectionsLoaded && coursesLoaded) {
      return(
        <Grid>
          <Grid.Column width={3}>
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
          </Grid.Column>
          <Grid.Column width={13}>
            <h3>SubSections</h3>
            { this.displaySubSections() }
          </Grid.Column>
        </Grid>
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

const subSections = [
  {
    id: 0,
    title: 'Day 1'
  },
  {
    id: 1,
    title: 'Day 2'
  },
  {
    id: 2,
    title: 'Day 3'
  },
  {
    id: 3,
    title: 'Day 4'
  },
  {
    id: 4,
    title: 'Day 5'
  },
  {
    id: 5,
    title: 'Week Blah Resources'
  }
]

const items = [
  { id: 0, title: 'Lecture Item 1' },
  { id: 1, title: 'Lecture Item 2' },
  { id: 2, title: 'Assignment Item' },
  { id: 3, title: 'File Item' }
]

const mapStateToProps = (state) => {
  return {
    user: state.user,
    sections: state.sections,
    sectionId: state.sectionId,
    section: state.section,
    courses: state.courses,
  }
}

export default withRouter(connect(mapStateToProps)(SectionSelect));

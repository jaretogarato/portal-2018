import React from 'react';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../../actions/courses';
import { getSections, deleteSection, clearSections } from '../../actions/sections';
import { setSection, clearSection } from '../../actions/section';
import { getSubSections, clearSubSections } from '../../actions/subSections';
import { getCourseContent, clearCourseContent } from '../../actions/courseContent';
import { getQuizzes, clearQuizzes } from '../../actions/quizzes';
import { getLectures, clearLectures } from '../../actions/lectures';
import SectionForm from '../SectionForm'
import SectionEditForm from '../SectionEditForm'
import SubSectionForm from './SubSectionForm';
import Section from './Section';
import SectionSelectMobile from './SectionSelectMobile';
import { Dimmer, Grid, Loader, Menu, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { getAssignments } from '../../actions/assignments';

class SectionSelect extends React.Component {
  state = {
    courseLoaded: false,
    sectionsLoaded: false,
    subSectionsLoaded: false,
  };

  setCourseLoaded = () => this.setState({ courseLoaded: true });
  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });
  setSubSectionsLoaded = () => this.setState({ subSectionsLoaded: true });

  componentWillMount() {
    const { dispatch, user: { id: userId }, course } = this.props;
    // TODO: prevent user from navigating to any page via URL
    dispatch(getCoursesByStudent(userId));
    if(course) this.setCourseLoaded()
  }

  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(getSections(id, this.setSectionsLoaded));
    dispatch(getQuizzes());
    dispatch(getCourseContent());
    dispatch(getAssignments());
    dispatch(getLectures());
  }

  componentWillUnmount() {
    const { dispatch } = this.props
    dispatch(clearSections())
    dispatch(clearSubSections())
    dispatch(clearSection())
    dispatch(clearQuizzes())
    dispatch(clearCourseContent())
    dispatch(clearLectures())
  }

  handleClick = (e) => {
    const sectionId = parseInt(e.currentTarget.id, 10)
    const { dispatch, subSections } = this.props;
    this.props.dispatch(setSection(sectionId));
    if( subSections.length === 0 )
      dispatch(getSubSections(sectionId, this.setSubSectionsLoaded));
    else if( subSections[0].section_id !== sectionId )
      dispatch(getSubSections(sectionId, this.setSubSectionsLoaded));
  }

  
  deleteButtonClick = (section) => {
    if( window.confirm("Are you sure?"))
      this.props.dispatch(deleteSection(section))
  }
  
  render() {
    let { courseLoaded, sectionsLoaded, subSectionsLoaded } = this.state;
    const { user: { is_admin }, sectionId, sections } = this.props
    if(sectionsLoaded && courseLoaded) {
      return(
        <Grid>
          <Grid.Row only='tablet computer'>
            <Grid.Column width={3}>
              <h3>Sections</h3>
              <Menu fluid vertical tabular>
                {sections.map( section =>
                  <Menu.Item
                    key={section.id}
                    id={section.id}
                    active={sectionId === section.id}
                    onClick={e => this.handleClick(e)}
                  >
                    {section.title}
                    { is_admin && 
                      <Button.Group>
                        <Button 
                          floated='right' 
                          onClick={() => this.deleteButtonClick(section) } 
                          size='mini' 
                          color='red'
                          content='X'
                        />
                        <SectionEditForm />
                      </Button.Group>
                    }
                  </Menu.Item>
                  )
                }
                { is_admin && <SectionForm /> }
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              <h3>Subsections</h3>
              <Section />
              { is_admin && subSectionsLoaded && <SubSectionForm/> } 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <SectionSelectMobile />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else {
      return(
        <Dimmer active inverted>
          <Loader inverted size='large'>Loading</Loader>
        </Dimmer>
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
    course: state.course,
    subSections: state.subSections,
    courseContent: state.courseContent,
    assignments: state.assignments,
  }
}

export default withRouter(connect(mapStateToProps)(SectionSelect));
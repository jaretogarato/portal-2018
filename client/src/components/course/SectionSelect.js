import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../../actions/courses';
import { getSections, deleteSection, clearSections } from '../../actions/sections';
import { setSection, clearSection } from '../../actions/section';
import { getSubSections, deleteSubSection, clearSubSections } from '../../actions/subSections';
import { getCourseContent, clearCourseContent } from '../../actions/courseContent';
import { getQuizzes, clearQuizzes } from '../../actions/quizzes';
import SectionForm from '../SectionForm'
import SectionEditForm from '../SectionEditForm'
import SubSectionForm from './SubSectionForm';
import SectionSelectMobile from './SectionSelectMobile';
import AddCourseContent from './AddCourseContent';
import { Accordion, Dimmer, Grid, Loader, Icon, Menu, Segment, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class SectionSelect extends React.Component {
  state = {
    activeIndexes: [],
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
  }

  componentWillUnmount() {
    const { dispatch } = this.props
    dispatch(clearSections())
    dispatch(clearSubSections())
    dispatch(clearSection())
    dispatch(clearQuizzes())
    dispatch(clearCourseContent())
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

  // what happens when you click on a subsection accordion 
  handleSubClick = (e, titleProps) => {
    const { activeIndexes } = this.state;
    const newIndex = titleProps.index;
    // checks to see if the index of the subsection is in the array, if not it adds it and if so it removes it
    if(activeIndexes.includes(newIndex)) {
      this.setState({ activeIndexes: activeIndexes.filter(i => i !== newIndex) });
    } else {
      this.setState({ activeIndexes: [...activeIndexes, newIndex] });
    }
  }

  checkActiveIndex = (index) => this.state.activeIndexes.includes(index)

  deleteSubClick = (ss) => {
    if( window.confirm("Are You Sure?"))
      this.props.dispatch(deleteSubSection(ss))
  }

  displaySubSections = () => {
    return this.props.subSections.map( ss => (
      <Accordion key={ss.id} fluid styled>
        { this.props.user.is_admin && 
          <Button.Group floated="right">
            <AddCourseContent id={ss.id} />
            <SubSectionForm originalTitle={ss.title} id={ss.id} editing={true} />
            <Button 
              color='red'
              content='X'
              onClick={ () => this.deleteSubClick(ss)}              
            />
          </Button.Group>
        }
        <Accordion.Title 
          active={this.state.activeIndexes === ss.id} 
          index={ss.id} 
          onClick={this.handleSubClick}
        >
          <Icon name='dropdown' />
          { ss.title }
        </Accordion.Title>
        <Accordion.Content active={this.checkActiveIndex(ss.id)}>
          { this.displayItems() }
        </Accordion.Content>
      </Accordion>
    ))
  }
  
  displayItems = () => {
    return this.props.subSections.map( ss => (
      <Link key={ss.id} to={`/courses/${this.props.course.id}/section/${ss.id}`}>
        <Segment>{ss.item_title}</Segment>
      </Link>
    ))
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
              { this.displaySubSections() }
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
  }
}

export default withRouter(connect(mapStateToProps)(SectionSelect));

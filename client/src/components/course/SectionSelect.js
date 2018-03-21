import React from 'react';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../../actions/courses';
import {
  getSections,
  deleteSection,
  clearSections,
} from '../../actions/sections';
import { setSection, clearSection } from '../../actions/section';
import { getSubSections, clearSubSections } from '../../actions/subSections';
import { getCourseContent, clearCourseContent } from '../../actions/courseContent';
import { getQuizzes, clearQuizzes } from '../../actions/quizzes';
import { getLectures, clearLectures } from '../../actions/lectures';
import SectionForm from '../SectionForm';
import SectionEditForm from '../SectionEditForm';
import Section from './Section';
import SectionSelectMobile from './SectionSelectMobile';
import {
  Dimmer,
  Grid,
  Loader,
  Menu,
  Icon,
  Popup,
  Modal,
  Header,
  Button
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { getAssignments } from '../../actions/assignments';
import { PageSubTitle } from '../../styles/styledComponents';
import styled from 'styled-components';

const MenuItemText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  font-weight: bold;
`
const MenuItemIcons = styled.div`
  display: flex;
  align-self: right;
  justify-content: flex-end !important;

`

const MenuItemContainer = styled.div`
  display: flex;
`

class SectionSelect extends React.Component {
  state = {
    courseLoaded: false,
    sectionsLoaded: false,
    modalOpen: false,
    modalSection: {}
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
    dispatch(setSection(sectionId))        
    if( subSections.length === 0 ) {
      dispatch(getSubSections(sectionId, this.setSubSectionsLoaded));
    } else if( subSections[0].section_id !== sectionId ) {
      dispatch(clearSubSections())
      dispatch(getSubSections(sectionId, this.setSubSectionsLoaded));
    }
  }

  journalEntryClick = (section) => {
    const { course } = this.props;
    this.props.history.push(`/courses/${course.id}/journal_entries`, { section: section.id })
  }

  handleConfirm = (section) => {
    this.props.dispatch(deleteSection(section))
    this.toggleModal()
  }

  toggleModal = (section = {}) => {
    this.setState( state => {
      return { modalOpen: !this.state.modalOpen, modalSection: section }
    })
  }
  
  render() {
    let open = {}
    if (this.state.modalOpen) 
      open = { open: true }
    let { courseLoaded, sectionsLoaded } = this.state;
    const { user: { is_admin }, sectionId, sections } = this.props;
    let current = sections.filter( s => s.id === sectionId )[0]
    if(sectionsLoaded && courseLoaded) {
      return(
        <Grid>
          <Grid.Row only='tablet computer'>
            <Grid.Column width={4}>
              <PageSubTitle>Sections</PageSubTitle>
              <Menu vertical style={styles.menu}>
                {sections.map( section =>
                  <Menu.Item
                    as={MenuItemContainer}
                    key={section.id}
                    id={section.id}
                    active={sectionId === section.id}
                    onClick={e => this.handleClick(e)}
                  >
                    <Popup basic content={section.title} trigger={
                      <MenuItemText>
                        {section.title}
                      </MenuItemText>
                    }
                    />
                    <MenuItemIcons>
                      <div>
                        <Popup basic content="Add Journal Entry" trigger={
                          <Icon 
                            link
                            name='book'
                            size='large'
                            style={{float: "right"}}                           
                            onClick={() => this.journalEntryClick(section) }/>
                          }
                        />
                      </div>
                      { is_admin && 
                        <div>
                          <Modal basic {...open} onClose={() => this.toggleModal()}>
                            <Header icon='archive' content='Delete Subsection' />
                            <Modal.Content>
                              <p>Are you sure you want to delete "{this.state.modalSection.title}"?</p>
                            </Modal.Content>
                            <Modal.Actions>
                              <Button onClick={() => this.toggleModal()} color='red' inverted>
                                <Icon name='remove' /> No
                              </Button>
                              <Button onClick={() => this.handleConfirm(this.state.modalSection)} color='green' inverted>
                                <Icon name='checkmark' /> Yes
                              </Button>
                            </Modal.Actions>
                          </Modal>
                          <Popup basic content="Delete Section" trigger={
                            <Icon 
                              link 
                              size="large" 
                              name='delete' 
                              style={{float: "right"}} 
                              onClick={() => this.toggleModal(section) }/> 
                            }  
                          />
                          <SectionEditForm />
                        </div>
                      }
                    </MenuItemIcons>
                  </Menu.Item>
                )}
                { is_admin && <SectionForm /> }
              </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
              { sectionId && <Section title={ current ? current.title : "Subsection" } /> }
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

const styles = {
  menu : {
    borderRadius: '0px'
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

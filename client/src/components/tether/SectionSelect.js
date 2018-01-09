import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoursesByStudent } from '../../actions/courses';
import { getSections } from '../../actions/sections';
import { setSection } from '../../actions/section';
import { getSubSections } from '../../actions/subSections';
import SectionForm from '../SectionForm'
import { Accordion, Dimmer, Grid, Loader, Icon, Menu, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class SectionSelect extends React.Component {
  state = {
    activeIndex: 0,
    courseLoaded: false,
    sectionsLoaded: false,
    subSectionLoaded: false,
  };

  setCourseLoaded = () => this.setState({ courseLoaded: true });
  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });
  setSubSectionLoaded = () => this.setState({ subSectionsLoaded: true });

  componentWillMount() {
    const { dispatch, user: { id: userId }, course } = this.props;
    // TODO: prevent user from navigating to any page via URL
    dispatch(getCoursesByStudent(userId));
    if(course) this.setCourseLoaded()
  }

  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(getSections(id, this.setSectionsLoaded));
  }

  handleClick = (e) => {
    let sectionId = e.currentTarget.id
    const { dispatch } = this.props;
    this.setState({ sectionId: parseInt(e.currentTarget.id, 10) }, () => {
      this.props.dispatch(setSection(this.state.sectionId));
    });
    dispatch(getSubSections(sectionId, this.setSubSectionLoaded));
  }

  handleSubClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  displaySubSections = () => {
    return this.props.subSections.map( ss => (
      <Accordion key={ss.id} fluid styled>
        <Accordion.Title 
          active={this.state.activeIndex === ss.id} 
          index={ss.id} 
          onClick={this.handleSubClick}
        >
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
    return this.props.subSections.map( ss => (
      <Link key={ss.id} to={`/courses/${this.props.course.id}/section/${ss.id}`}>
        <Segment>{ss.item_title}</Segment>
      </Link>
    ))
  }
  
  
  render() {
    let { courseLoaded, sectionsLoaded } = this.state;
    
    if(sectionsLoaded && courseLoaded) {
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
                  active={this.props.sectionId === section.id}
                  onClick={e => this.handleClick(e)}>
                  </Menu.Item>
                )
              }
              { this.props.user.is_admin ? <SectionForm /> : "" }
            </Menu>
          </Grid.Column>
          <Grid.Column width={13}>
            <h3>Subsections</h3>
            { this.displaySubSections() }
          </Grid.Column>
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
  }
}

export default withRouter(connect(mapStateToProps)(SectionSelect));

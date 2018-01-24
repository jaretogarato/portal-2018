import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSection } from '../../actions/section';
import { getSubSections } from '../../actions/subSections';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

class SectionSelectMobile extends React.Component {
  state = { activeIndexes: [], activeSubIndexes: [], sectionId: '' };

  setSubSectionsLoaded = () => this.setState({ subSectionsLoaded: true });

  // what happens when you click on a section accordion 
  handleSectionClick = (e, titleProps) => {
    const sectionId = parseInt(e.currentTarget.id, 10)
    const { dispatch, subSections } = this.props;
    this.props.dispatch(setSection(sectionId));
    if (subSections.length === 0)
      dispatch(getSubSections(sectionId, this.setSubSectionsLoaded));
    else if (subSections[0].section_id !== sectionId)
      dispatch(getSubSections(sectionId, this.setSubSectionsLoaded));
    const { activeIndexes } = this.state;
    const newIndex = titleProps.index; 
    
    // checks to see if the index of the section is in the array, if not it adds it and if so it removes it
    if (activeIndexes.includes(newIndex)) {
      this.setState({ activeIndexes: activeIndexes.filter(i => i !== newIndex) });
    } else {
      this.setState({ activeIndexes: [...activeIndexes, newIndex] });
    }
  }

  handleSubClick = (e, titleProps) => {
    const { activeIndexes } = this.state;
    const newIndex = titleProps.index;
    // checks to see if the index of the subsection is in the array, if not it adds it and if so it removes it
    if (activeIndexes.includes(newIndex)) {
      this.setState({ activeIndexes: activeIndexes.filter(i => i !== newIndex) });
    } else {
      this.setState({ activeIndexes: [...activeIndexes, newIndex] });
    }
  }

  checkActiveIndex = (index) => this.state.activeIndexes.includes(index)

  displaySections = () => {
    return this.props.sections.map( section => (
      <Accordion key={section.id} fluid styled>
        <Accordion.Title
          active={this.state.activeIndexes === section.id}
          index={section.id}
          id={section.id}
          onClick={this.handleSectionClick}
        >
          <Icon name='dropdown' />
          {section.title}
        </Accordion.Title>
        <Accordion.Content active={this.checkActiveIndex(section.id)}>
          { this.displaySubSections() }
        </Accordion.Content>
      </Accordion>
    ))
  }

  displaySubSections = (ssId) => {
    return this.props.subSections.map(ss => (
      <Accordion key={ss.id} fluid styled>
        <Accordion.Title
          active={this.state.activeIndexes === ss.id}
          index={ss.id}
          onClick={this.handleSubClick}
        >
          <Icon name='dropdown' />
          {ss.title}
        </Accordion.Title>
        <Accordion.Content active={this.checkActiveIndex(ss.id)}>
          {this.displayItems()}
        </Accordion.Content>
      </Accordion>
    ))
  }

  displayItems = () => {
    return this.props.subSections.map(ss => (
      <Link key={ss.id} to={`/courses`}>
        <Segment>{ss.item_title}</Segment>
      </Link>
    ))
  }

  render() {
    return(
      <Segment basic>
        { this.displaySections() }
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.sections,
    sectionId: state.sectionId,
    subSections: state.subSections
  }
}

export default connect(mapStateToProps)(SectionSelectMobile);
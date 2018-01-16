import React from 'react';
import { connect } from 'react-redux';
import AddCourseContent from './AddCourseContent';
import SubSectionForm from './SubSectionForm';
import { deleteSubSection } from '../../actions/subSections';
import {
  Accordion,
  Button,
  Icon,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Section extends React.Component {
  state = { activeIndexes: [] }

  checkActiveIndex = (index) => this.state.activeIndexes.includes(index)

  displayItems = (content) => {
    return content.map( cc => (
      <Link key={cc.id} to={`/courses/${this.props.course.id}/section/${cc.id}`}>
        <Segment>{cc.id}</Segment>
      </Link>
    ))
  }

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

  deleteSubClick = (ss) => {
    if( window.confirm("Are You Sure?"))
      this.props.dispatch(deleteSubSection(ss))
  }

  mapContents = (ssid) => {
    const { content } = this.props
    const filtered = []
    content.filter( content => {
      return content.sub_section_id === ssid 
    }).map( content => {
      filtered.push(content)
    })
    return filtered
  }

  render() {
    return(
      this.props.subSections.map( ss => {
        let content = this.mapContents(ss.id)
        return <Accordion key={ss.id} content={this.mapContents(ss.id)} fluid styled>
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
            { this.displayItems(content) }
          </Accordion.Content>
        </Accordion>
      })
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subSections: state.subSections,
    user: state.user,
    course: state.course,
    content: state.courseContent,
  }
}

export default connect(mapStateToProps)(Section);
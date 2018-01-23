import React from 'react';
import { connect } from 'react-redux';
import AddCourseContent from './AddCourseContent';
import SubSectionForm from './SubSectionForm';
import { deleteSubSection } from '../../actions/subSections';
import { deleteCourseContent } from '../../actions/courseContent';
import { getAssignments } from '../../actions/assignments';
import {
  Accordion,
  Button,
  Icon,
  Segment,
  Menu,
  Dropdown
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const options = [
  { key: 1, text: 'Add Content', value: 1 },
  { key: 2, text: 'Edit Sub Section', value: 2 },
  { key: 3, text: 'Delete Sub Section', value: 3 },
]

class Section extends React.Component {
  state = { activeIndexes: [] }

  checkActiveIndex = (index) => this.state.activeIndexes.includes(index)

  deleteContentClick = (cc) => {
    if( window.confirm("Are You Sure?"))
      this.props.dispatch(deleteCourseContent(cc))
  }

  deleteContentButton = (cc) => {
    return(
      <Button
        basic
        color='red'
        content='X'
        floated='right'
        onClick={ () => this.deleteContentClick(cc)}
      />
    )
  }

  displayItems = (content) => {
    return content.map( (cc, i) => (
      <Segment basic key={i}>
        <Link to={`/courses/${this.props.course.id}/section/${cc.id}`}>
          <Segment>
            {cc.title}
          </Segment>
        </Link>
        {this.deleteContentButton(cc.contentId)}
      </Segment>
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
      this.props.quizzes.map(quiz => {
        if(quiz.id === content.quiz_id)
          filtered.push({...quiz, contentId: content.id})
      })
      this.props.assignments.map(assignment => {
        if(assignment.id === content.assignment_id)
          filtered.push({...assignment, contentId: content.id})
      })
      this.props.lectures.map(lecture => {
        if(lecture.id === content.lecture_id)
          filtered.push({...lecture, contentId: content.id})
      })
    })
    return filtered
  }



  render() {
    return(
      this.props.subSections.map( ss => {
        let content = this.mapContents(ss.id)
        return <Accordion key={ss.id} content={this.mapContents(ss.id)} fluid styled style={styles.corner}>
          <Accordion.Title
            active={this.state.activeIndexes === ss.id}
            index={ss.id}
            onClick={this.handleSubClick}
          >
            <Icon name='dropdown' />
            { ss.title }
          { this.props.user.is_admin &&
            <span>
              <AddCourseContent content={content} subSectionId={ss.id} />
              <SubSectionForm originalTitle={ss.title} id={ss.id} editing={true} />
              <Icon
                link
                float='right'
                size='large'
                name='delete'
                onClick={ () => this.deleteSubClick(ss)}>
             </Icon>
            </span>
          }
          </Accordion.Title>
          <Accordion.Content active={this.checkActiveIndex(ss.id)}>
            { content.length ? this.displayItems(content) : "No Content" }
          </Accordion.Content>
        </Accordion>
      })
    )
  }
}

const styles = {
  corner: {
    borderRadius: '0px',
  },
}

const mapStateToProps = (state) => {
  return {
    subSections: state.subSections,
    user: state.user,
    course: state.course,
    content: state.courseContent,
    quizzes: state.quizzes,
    lectures: state.lectures,
    assignments: state.assignments,
  }
}

export default connect(mapStateToProps)(Section);

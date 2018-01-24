import React from 'react';
import { connect } from 'react-redux';
import AddCourseContent from './AddCourseContent';
import SubSectionForm from './SubSectionForm';
import { deleteSubSection } from '../../actions/subSections';
import { deleteCourseContent } from '../../actions/courseContent';
import { getAssignments } from '../../actions/assignments';
import { PageSubTitle } from '../../styles/styledComponents'
import {
  Accordion,
  Dimmer,
  Icon,
  Segment,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Section extends React.Component {
  state = { activeIndexes: [] }

  checkActiveIndex = (index) => this.state.activeIndexes.includes(index)

  deleteContentClick = (cc) => {
    if( window.confirm("Are You Sure?"))
      this.props.dispatch(deleteCourseContent(cc))
  }

  displayItems = (content) => {
    const { user: {is_admin}, course } = this.props
    return content.map( (cc, i) => (
      <div key={i} style={is_admin? {} : {height: "6em", marginTop: -10, marginBottom: -20}}>
        <Segment basic as={Link} to={`/courses/${course.id}/${cc.type}/${cc.id}`}>
          <Segment>
            {cc.title}
          </Segment>
        </Segment>
        { is_admin &&
          <Icon
            style={{float: "right"}}
            name='delete'
            onClick={ () => this.deleteContentClick(cc)}
          />
        } { is_admin &&
          //TODO: Make this publish the content
          <Icon
            style={{float: "right"}}
            name='check'
          />
        }
      </div>
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
    const { content, quizzes, assignments, lectures } = this.props
    const filtered = []
    content.filter( content => {
      return content.sub_section_id === ssid
    }).map( content => {
      quizzes.map(quiz => {
        if(quiz.id === content.quiz_id)
          filtered.push({...quiz, contentId: content.id, type: 'quizzes'})
      })
      assignments.map(assignment => {
        if(assignment.id === content.assignment_id)
          filtered.push({...assignment, contentId: content.id, type: 'assignments'})
      })
      lectures.map(lecture => {
        if(lecture.id === content.lecture_id)
          filtered.push({...lecture, contentId: content.id, type: 'lectures'})
      })
    })
    return filtered
  }

  render() {
    const { subSections = null, user: { is_admin }, title } = this.props
    if(subSections && this.props.loaded) {
      return(
        <div>
          <PageSubTitle>{title}</PageSubTitle>
          { subSections.map( ss => {
            let content = this.mapContents(ss.id)
            return <Accordion key={ss.id} content={content} fluid styled>
              <Accordion.Title
                active={this.state.activeIndexes === ss.id}
                index={ss.id}
                onClick={this.handleSubClick}
              >
            { ss.title }
            <br/>
              </Accordion.Title>
              <Accordion.Content active={this.checkActiveIndex(ss.id)}>
                { is_admin &&
                  <div style={{float: "right"}}>
                    <Icon size="large" name='delete' onClick={ () => this.deleteSubClick(ss)}/>
                    <SubSectionForm originalTitle={ss.title} id={ss.id} editing={true}/>
                    <AddCourseContent content={content} subSectionId={ss.id} />
                  </div>
                }
                { content.length ? this.displayItems(content) : "No Content" }
              </Accordion.Content>
            </Accordion>
          })}
        </div>
      )
    } else {
      return(
        <Dimmer active inverted style={styles.dimmer}>
          <Loader inverted size='medium'>Loading subsections</Loader>
        </Dimmer>
      )
    }
  }
}

const styles = {
  corner: {
    borderRadius: '0px',
  },
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    course: state.course,
    content: state.courseContent,
    quizzes: state.quizzes,
    lectures: state.lectures,
    assignments: state.assignments,
  }
}

export default connect(mapStateToProps)(Section);

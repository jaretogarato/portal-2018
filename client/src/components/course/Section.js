import React from 'react';
import { connect } from 'react-redux';
import AddCourseContent from './AddCourseContent';
import SubSectionForm from './SubSectionForm';
import { deleteSubSection } from '../../actions/subSections';
import { getAssignments } from '../../actions/assignments';
import {
  Accordion,
  Button,
  Dimmer,
  Icon,
  Loader,
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
  state = { activeIndexes: [], activeType: ''}
  
  selectSection = (content, ss) => {
    debugger
    switch(this.state.activeType) {
      case 'Add Content':
        return <AddCourseContent content={content} subSectionId={ss.id} />
      case 'Edit Sub Section': 
        return  <SubSectionForm originalTitle={ss.title} id={ss.id} editing={true} />
      case 'Delete Sub Section': 
        return  <Button 
        basic
        color='red'
        content='X'
        onClick={ () => this.deleteSubClick(ss)}
      /> 
      default:
      return null

    }
  }

  handleChange = (_, { name, value }) => {
    this.setState({ [name]: value })
  }

  checkActiveIndex = (index) => this.state.activeIndexes.includes(index)

  displayItems = (content) => {
    return content.map( (cc, i) => (
      <Segment basic key={i}>
        <Link to={`/courses/${this.props.course.id}/${cc.type}/${cc.id}`}>
          <Segment>
            {cc.title}
          </Segment>
        </Link>
        {this.props.user.is_admin && this.deleteContentButton(cc.contentId)}
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
<<<<<<< HEAD
          filtered.push(quiz)
      })
      this.props.assignments.map(assignment => {
        if(assignment.id === content.assignment_id)
          filtered.push(assignment)
      })
      this.props.lectures.map(lecture => {
        if(lecture.id === content.lecture_id)
          filtered.push(lecture)
=======
          filtered.push({...quiz, contentId: content.id, type: 'quizzes'})
      })
      this.props.assignments.map(assignment => {
        if(assignment.id === content.assignment_id)
          filtered.push({...assignment, contentId: content.id, type: 'assignments'})
      })
      this.props.lectures.map(lecture => {
        if(lecture.id === content.lecture_id)
          filtered.push({...lecture, contentId: content.id, type: 'lectures'})
>>>>>>> updated individual viewing
      })
    })
    return filtered
  }

  render() {
<<<<<<< HEAD
    const { subSections, user: { is_admin }, title } = this.props
    if(subSections.length > 0) {
    return(
      <div>
          <h3>{title}</h3>
          { subSections.map( ss => {        let content = this.mapContents(ss.id)
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
            <Menu>
              <Dropdown text='settings' options={options} simple item />
              
            </Menu>
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
      })}
      </div>
    )
  } else {
    return(
      <Dimmer active inverted style={styles.dimmer}>
        <Loader inverted size='medium'>Loading subsections</Loader>
      </Dimmer>
    ) }
  }
}

const styles = {
  corner: { borderRadius: '0px' },
  dimmer: { height: '50vh' }
}

=======
    const { subSections, user: { is_admin } } = this.props
    if(subSections.length > 0) {
      return(
        <div>
          <h3>{is_admin}</h3>
          { subSections.map( ss => {
            let content = this.mapContents(ss.id)
            return <Accordion key={ss.id} content={content} fluid styled>
              { is_admin && 
                <Button.Group floated="right" style={{marginRight: '15%'}}>
                  <Menu text compact onChange={ this.handleChange } name='activeType'
>
                    <Dropdown 
                      text='Settings' 
                      options={options} 
                      simple 
                      item 
                      onClick={ ()=> this.selectSection(content, ss)}
                      />
                  </Menu>
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

>>>>>>> styling sections
const mapStateToProps = (state) => {
  return {
    subSections: state.subSections,
    user: state.user,
    content: state.courseContent,
    quizzes: state.quizzes,
    lectures: state.lectures,
    assignments: state.assignments,
  }
}

const styles = {
  dimmer: { height: "50vh" }
}

export default connect(mapStateToProps)(Section);
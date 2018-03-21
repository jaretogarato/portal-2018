import React from 'react';
import { connect } from 'react-redux';
import AddCourseContent from './AddCourseContent';
import SubSectionForm from './SubSectionForm';
import { deleteSubSection } from '../../actions/subSections';
import { deleteCourseContent } from '../../actions/courseContent';
import { PageSubTitle } from '../../styles/styledComponents';
import {
  Accordion,
  Dimmer,
  Icon,
  Segment,
  Popup,
  Loader,
  Modal,
  Button,
  Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Section extends React.Component {
  state = { activeIndexes: [], loaded: false, modalOpen: false, modalSub: {} }

  componentWillReceiveProps(nextProps) {
    let p = this.props.subSections.length
    let n = nextProps.subSections.length
    let i = this.props.sectionId
    let d = nextProps.sectionId
    i === d ? this.setState( p === n ? {loaded: true} : { loaded: false} ) : this.setState( {loaded: false} )
  }

  checkActiveIndex = (index) => this.state.activeIndexes.includes(index)

  deleteContentClick = (cc) => {
    if( window.confirm("Are You Sure?"))
      this.props.dispatch(deleteCourseContent(cc))
  }

  displayItems = (content) => {
    const { user: {is_admin}, course } = this.props
    return content.map( (cc, i) => (
      <div key={i} style={is_admin? {marginTop: -15} : {height: "6em", marginTop: -15, marginBottom: -20}}>
        <Segment basic as={Link} to={`/courses/${course.id}/${cc.type}/${cc.id}`}>
          <Segment>
            {cc.title}
          </Segment>
        </Segment>
        { is_admin &&
          <span>
            <Popup basic content="Delete Content" trigger={
              <Icon 
                link 
                name='delete'
                style={{float: "right"}} 
                onClick={ () => this.deleteContentClick(cc.contentId)}/>
              } 
            />
            {/* TODO: Make this publish the content */}
            <Popup basic trigger={<Icon style={{float: "right"}} link name='check'/>} content="Publish Content" />     
          </span>     
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

  mapContents = (ssid) => {
    const { content, quizzes, assignments, lectures } = this.props
    const filtered = []
    content.filter( content => {
      return content.sub_section_id === ssid
    }).forEach( content => {
      quizzes.forEach(quiz => {
        if(quiz.id === content.quiz_id)
          filtered.push({...quiz, contentId: content.id, type: 'quizzes'});
      })
      assignments.forEach(assignment => {
        if(assignment.id === content.assignment_id)
          filtered.push({...assignment, contentId: content.id, type: 'assignments'});
      })
      lectures.forEach(lecture => {
        if(lecture.id === content.lecture_id)
          filtered.push({...lecture, contentId: content.id, type: 'lectures'});
      })
    })
    return filtered
  }

  handleConfirm = (subSection) => {
    this.props.dispatch(deleteSubSection(subSection))
    this.toggleModal()
  }

  toggleModal = (ss = {}) => {
    this.setState( state => {
      return { modalOpen: !this.state.modalOpen, modalSub: ss }
    })
  }

  render() {
    let open = {}
    if (this.state.modalOpen) 
      open = { open: true }

    const { sectionId, subSections, user: { is_admin }, title } = this.props
    if( sectionId && !subSections.length && !this.state.loaded ) {
      return(
        <div>
          <PageSubTitle>{title}</PageSubTitle>
          <Dimmer active inverted style={styles.dimmer}>
            <Loader inverted size='medium'>Loading subsections</Loader>
          </Dimmer>
        </div>    
      ) 
    } else {
      return(
        <div>
          <Modal basic {...open} onClose={() => this.toggleModal()}>
            <Header icon='archive' content='Delete Subsection' />
            <Modal.Content>
              <p>Are you sure you want to delete "{this.state.modalSub.title}"?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => this.toggleModal()} color='red' inverted>
                <Icon name='remove' /> No
              </Button>
              <Button onClick={() => this.handleConfirm(this.state.modalSub)} color='green' inverted>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
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
                  <div style={{float: "right", marginTop: -30, marginBottom: 0}}>
                    <Popup basic content="Delete Subsection" trigger={
                      <Icon 
                        link 
                        size="large" 
                        name='delete' 
                        style={{float: "right"}} 
                        onClick={ () => this.toggleModal(ss)}/> 
                      }
                      />
                    <SubSectionForm originalTitle={ss.title} id={ss.id} editing={true}/>
                    <AddCourseContent content={content} subSectionId={ss.id} />
                  </div>
                }
                { content.length ? this.displayItems(content) : "No Content" }
              </Accordion.Content>
            </Accordion> 
          })
          }
          { is_admin && <SubSectionForm/> }
        </div>
      )
    }
  }
}

const styles = {
  corner: { borderRadius: '0px' },
  dimmer: { height: '50vh' }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    course: state.course,
    subSections: state.subSections,
    sectionId: state.sectionId,
    content: state.courseContent,
    quizzes: state.quizzes,
    lectures: state.lectures,
    assignments: state.assignments,
  }
}


export default connect(mapStateToProps)(Section);

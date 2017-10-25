import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Dimmer, Button,
  Loader, Accordion, Segment,
  Icon, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { getGroups} from '../actions/groups';
import { setGroup } from '../actions/group';
import { setGroupId } from '../actions/groupId';
import { getLectures } from '../actions/lectures';
import axios from 'axios';

class SectionShow extends Component {
  state = {
    loaded: false,
    itemsLoaded: false,
    groupsLoaded: false,
    lecturesLoaded: false,

    activeIndex: 0,

    sectionId: 1,
    sections: [],
    section: {},
    sectionHeader: '',

    groups: [],
    groupId: 1,
    groupNewId: 1,
    group: {},
    groupHeader: '',

    lectures: [],
    lectureId: 1,
    lecture: {},
    lectureTitle: '',
  }

  setGroupsLoaded = () => this.setState({ groupsLoaded: true });
  setItemsLoaded = () => this.setState({ itemsLoaded: true });
  setLecturesLoaded = () => this.setState({ lecturesLoaded: true })
  setLoaded = () => this.setState({ loaded: true });

  componentWillMount() {
    const { dispatch, sections, section } = this.props;
    const { sectionId, groupId } = this.state;
    console.log(sectionId);
    dispatch(getGroups(sectionId, this.setGroupsLoaded));
    dispatch(getLectures(groupId, this.setLecturesLoaded));

    this.setState({ courseId: this.props.courseId });
    this.setState({ section: this.props.section });
    this.setState({ sections: this.props.sections });

    dispatch(setGroupId(this.state.groupId));
  }

  componentDidMount() {
    const { dispatch, group, lectures } = this.props;

    this.setState({ group: group });
    this.setState({ lectures: lectures });
    this.setLoaded();
  }

  componentWillReceiveProps = (nextProps) => {
    const { sectionId, groupId, courseId } = this.state;
    const { dispatch } = this.props;
    this.setState({ courseId: nextProps.courseId });
    this.setState({ sectionId: nextProps.sectionId });
    this.setState({ lectures: nextProps.lectures });
    dispatch(getGroups(sectionId, this.setGroupsLoaded));
  }

  handleClick = (e, titleProps) => {

    const { dispatch } = this.props;
    const { groupId, lectures } = this.state;

    const { index } = titleProps; // index from where the click originates
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
    this.setState({ groupId: index });

    dispatch(setGroupId(index));
    dispatch(getLectures(groupId, this.setLecturesLoaded));
  }

  renderItems = (groupId) => {
    return this.props.lectures.map( lecture => {
      return(
        <Link  to={`/lectures/${lecture.id}`}>
          <Segment fluid key={lecture.id}>
            <h4>{lecture.title}</h4>
          </Segment>
        </Link>
      )
    })
  }

  renderGroups = () => {
    return this.props.groups.map( group => {
      return(
        <div key={group.id}>
          <Accordion.Title
            active={this.state.activeIndex === group.id}
            index={group.id}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            {group.title}
          </Accordion.Title>
          <Accordion.Content
            active={this.state.activeIndex === group.id}
            index={group.id}
          >
            <Container
              index={`${group.id}_2`}
            >
              {this.renderItems(group.id)}
            </Container>
          </Accordion.Content>
        </div>
      )
    })
  }

  render() {
    let { groupId, loaded, groupsLoaded, lecturesLoaded } = this.state;

    if(this.props.sections.length && loaded && groupsLoaded && lecturesLoaded ) {
      let sectionObject = (this.props.sections[`${this.props.sectionId-1}`]);
      let sectionTitle = sectionObject['title'];

      return (
        <Container fluid textAlign = 'left'>
          <Header as='h3' align='center'>{sectionTitle}</Header>
          <Accordion fluid styled>
            {this.renderGroups()}
          </Accordion>
        </Container>
      )
    } else {
      return(
        <div>
          <Dimmer active inverted>
            <Loader inverted size='large'>Loading</Loader>
          </Dimmer>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return{
    sectionId: state.sectionId,
    sections: state.sections,
    section: state.section,
    sectionHeader: {},

    groupId: state.groupId,
    groups: state.groups,
    group: state.group,
    groupHeader: state.groupHeader,

    lectureId: state.lectureId,
    lectures: state.lectures,
    lecture: state.lecture,
    lectureTitle: state.lectureTitle,
  };
}

export default connect(mapStateToProps)(SectionShow);

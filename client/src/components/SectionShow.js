import React, { Component } from 'react';
import { Container, Dimmer, Loader, Accordion, Segment, Icon, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { getGroups } from '../actions/groups';
import axios from 'axios';

class SectionShow extends Component {
  state = {
    loaded: false,
    itemsLoaded: false,
    groupsLoaded: false,

    sectionId: 1,
    sections: [],
    section: {},
    sectionHeader: '',

    groups: [],
    groupId: 1,
    group: {},
    groupHeader: '',
  }

  setGroupsLoaded = () => this.setState({ groupsLoaded: true });
  setItemsLoaded = () => this.setState({ itemsLoaded: true });
  setLoaded = () => this.setState({ loaded: true });

  componentWillMount() {
    const { dispatch, sections, section } = this.props;
    const { sectionId } = this.state;

    dispatch(getGroups(sectionId, this.setGroupsLoaded));

    // set the active section id upon mount
    this.setState({ section: this.props.section });
    this.setState({ sections: this.props.sections });
    this.setState({ courseId: this.props.courseId });
  }

  componentDidMount() {
    this.setLoaded();
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ courseId: nextProps.courseId });
    this.setState({ sectionId: nextProps.sectionId });
    this.setState({ section: nextProps.section })
  }

  handleModClick = (e, titleProps) => {
    const { index } = titleProps;
    const { groupId } = this.state;
    const newIndex = groupId === index ? -1 : index;

    this.setState({ groupId: newIndex });
  }

  renderGroups = () => {
    return this.props.groups.map( group => {
      return(
        <div key={group.id}>
          {/* get lectures for group and map through them */}
          <Accordion.Title
            active={this.state.groupId === group.id}
            index={group.id}
            onClick={this.handleModClick}
          >
            <Icon name='dropdown' />
            {group.title}
          </Accordion.Title>
          <Accordion.Content
            active={this.state.groupId === group.id}
            index={`${group.id}_1`}
          >
            <Segment.Group>
              <Segment>
                <p>Placeholder Lecture Notes 01</p>
              </Segment>
              <Segment>
                <p>Placeholder Lecture Notes 02</p>
              </Segment>
              <Segment>
                <p>Placeholder Lecture Notes 03</p>
              </Segment>
            </Segment.Group>
          </Accordion.Content>
        </div>
      )
    })
  }

  render() {
    let { groupId, loaded, groupsLoaded } = this.state;

    if(this.props.sections.length && loaded && groupsLoaded) {
      let sectionObject = (this.props.sections[`${this.props.sectionId-1}`]);
      let sectionTitle = sectionObject['title'];

      // console.log('-----------------------------');
      // console.log('vv --this.props.sections-- vv');
      // console.log(this.props.sections);
      // console.log('vv --this.props.sectionId-- vv');
      // console.log(this.props.sectionId);
      // console.log('vv --sectionObject-- vv');
      // console.log(sectionObject);
      // console.log('vv --sectionTitle-- vv');
      // console.log(sectionTitle);
      // console.log('vv --groups-- vv');
      // console.log(this.props.groups);
      // console.log('');

      return (
        <Container textAlign = 'left'>
          <Header as='h3' align='center'>{sectionTitle}</Header>
          <Accordion styled>
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
    groups: state.groups,
    groupId: state.groupId,
    group: state.group,
    groupHeader: state.groupHeader,
  };
}

export default connect(mapStateToProps)(SectionShow);

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
        <Accordion.Title active={this.state.groupId === group.id} index={group.id} onClick={this.handleModClick}>
          <Icon name='dropdown' />
          {group.title}
        </Accordion.Title>
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
        <div>
          <Container textAlign = 'left'>
            <Header as='h2'>------Dynamic-------</Header>
            <Header as='h3' align='center'>{sectionTitle}</Header>
            <Accordion styled>
              {this.renderGroups()}
            </Accordion>
          </Container>

          <Divider />

          <Container textAlign='left'>
            <Header as='h2'>------Static/Placeholder-------</Header>
            <Header as='h3' align='center'>Section placeholder: Week 1</Header>
            <Accordion styled>
              <Accordion.Title active={groupId === 0} index={0} onClick={this.handleModClick}>
                <Icon name='dropdown' />
                Week1 Day1
              </Accordion.Title>
              <Accordion.Content active={groupId === 0}>
                <Segment.Group>
                  <Segment>
                    <p>Stuff about day 1</p>
                  </Segment>
                  <Segment>
                    <p>More stuff about day 1</p>
                  </Segment>
                  <Segment>
                    <p>Even more stuff about day 1</p>
                  </Segment>
                </Segment.Group>
              </Accordion.Content>
              <Accordion.Title active={groupId === 1} index={1} onClick={this.handleModClick}>
                <Icon name='dropdown' />
                Week1 Day2
              </Accordion.Title>
              <Accordion.Content active={groupId === 1}>
                <Segment.Group>
                  <Segment>
                    <p>Stuff about day 2</p>
                  </Segment>
                  <Segment>
                    <p>More stuff about day 2</p>
                  </Segment>
                  <Segment>
                    <p>Even more stuff about day 2</p>
                  </Segment>
                </Segment.Group>
              </Accordion.Content>
              <Accordion.Title active={groupId === 2} index={2} onClick={this.handleModClick}>
                <Icon name='dropdown' />
                Week1 Day2
              </Accordion.Title>
              <Accordion.Content active={groupId === 2}>
                <Segment.Group>
                  <Segment>
                    <p>Stuff about day 3</p>
                  </Segment>
                  <Segment>
                    <p>More stuff about day 3</p>
                  </Segment>
                  <Segment>
                    <p>Even more stuff about day 3</p>
                  </Segment>
                </Segment.Group>
              </Accordion.Content>
            </Accordion>
          </Container>
          <Divider />
        </div>
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

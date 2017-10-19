import React, { Component } from 'react';
import { Container, Accordion, Segment, Icon, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import axios from 'axios';

class SectionShow extends Component {
  state = {    
    itemsLoaded: false,
    sectionId: 1,
    groupId: 1,
    section: '',
  }

  setItemsLoaded = () => this.setState({ itemsLoaded: true });

  componentWillMount() {
    // set the active section id upon mount
    this.setState({ sectionId: this.props.sectionId });
    this.setState({ courseId: this.props.courseId });
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ courseId: nextProps.courseId });
    this.setState({ sectionId: nextProps.sectionId });
    // console.log(this.props.sections);
  }

  renderSection = () => {
    return(
      <div>
        <h3>courseId: {this.state.courseId} :: sectionId: {this.state.sectionId} :: sections: {this.props.sections}</h3>
      </div>
    )
  }

  handleModClick = (e, titleProps) => {
    const { index } = titleProps;
    const { groupId } = this.state;
    const newIndex = groupId === index ? -1 : index;

    this.setState({ groupId: newIndex });
  }

  render() {
    const { groupId } = this.state;
    return (
      <div>
        <Container textAlign='left'>
          {this.renderSection()}

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
  }
}

const mapStateToProps = (state) => {
  return{

    sectionId: state.sectionId,
    courseId: state.courseId,
  };
}

export default connect(mapStateToProps)(SectionShow);

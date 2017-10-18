import React, { Component } from 'react';
import { Container, Accordion, Segment, Icon, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import axios from 'axios';

class SectionShow extends Component {
  state = { activeSectionId: 1, activeGroupId: 1 }

  componentWillMount() {
    // set the active section id upon mount
    this.setState({ activeSectionId: this.props.activeSectionId });
    this.setState({ activeCourseId: this.props.activeCourseId });
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ activeCourseId: nextProps.activeCourseId });
    this.setState({ activeSectionId: nextProps.activeSectionId });
  }

  renderSection = () => {
    return(
      <div>
        <h3>activeCourseId: {this.state.activeCourseId} :: activeSectionId: {this.state.activeSectionId} :: sections: {this.props.sections}</h3>
      </div>
    )
  }

  handleModClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeGroupId } = this.state;
    const newIndex = activeGroupId === index ? -1 : index;

    this.setState({ activeGroupId: newIndex });
  }

  render() {
    const { activeGroupId } = this.state;
    return (
      <div>
        <Container textAlign='left'>
          {this.renderSection()}

          <Header as='h3' align='center'>Section placeholder: Week 1</Header>
          <Accordion styled>
            <Accordion.Title active={activeGroupId === 0} index={0} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day1
            </Accordion.Title>
            <Accordion.Content active={activeGroupId === 0}>
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
            <Accordion.Title active={activeGroupId === 1} index={1} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day2
            </Accordion.Title>
            <Accordion.Content active={activeGroupId === 1}>
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
            <Accordion.Title active={activeGroupId === 2} index={2} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day2
            </Accordion.Title>
            <Accordion.Content active={activeGroupId === 2}>
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
  return{activeSectionId: state.activeSectionId, activeCourseId: state.activeCourseId};
}

export default connect(mapStateToProps)(SectionShow);

import React, { Component } from 'react';
import { Container, Accordion, Segment, Icon } from 'semantic-ui-react';

class Group extends Component {
  state = { active: true }

  handleModClick = (e, titleProps) => {
    debugger
    const { index } = titleProps
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Container textAlign='left'>
        <Accordion styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleModClick}>
            <Icon name='dropdown' />
            Week1 Day1
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
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
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleModClick}>
            <Icon name='dropdown' />
            Week1 Day2
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
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
          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleModClick}>
            <Icon name='dropdown' />
            Week1 Day2
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
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
    )
  }
}

export default Group;
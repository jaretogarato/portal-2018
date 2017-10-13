import React, { Component } from 'react';
import { Container, Accordion, Segment, Icon, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

// parent
// const dummySections = [
//   { id: 0, name: 'Week 1' },
//   { id: 1, name: 'Week 2' },
//   { id: 2, name: 'Week 3' },
// ]
//
// // groups belong to sections
// const dummyGroups = [
//   { id: 0, name: 'Day 1', section: 0},
//   { id: 1, name: 'Day 2', section: 0},
//   { id: 2, name: 'Day 3', section: 0},
//   { id: 3, name: 'Day 4', section: 0},
//   { id: 4, name: 'Day 5', section: 0},
//
//   { id: 5, name: 'Day 1', section: 1},
//   { id: 6, name: 'Day 2', section: 1},
//   { id: 7, name: 'Day 3', section: 1},
//   { id: 8, name: 'Day 4', section: 1},
//   { id: 9, name: 'Day 5', section: 1},
//
//   { id: 10, name: 'Day 1', section: 2},
//   { id: 11, name: 'Day 2', section: 2},
//   { id: 12, name: 'Day 3', section: 2},
//   { id: 13, name: 'Day 4', section: 2},
//   { id: 14, name: 'Day 5', section: 2},
// ]

class SectionShow extends Component {
  state = { activeSectionIndex: 0, activeGroupIndex: 0 }

  componentWillMount() {
    this.setState({ activeSectionIndex: this.props.activeSectionIndex });
    console.log('**-- from SectionShow CWM -- **')
    console.log(this.state)
    // get the groups that are in this section. eg:
    // this.props.dispatch(getApps(this.setLoaded))

  }

  componentWillReceiveProps = (nextProps) => {
    // console.log(nextProps);
    this.setState({ activeSectionIndex: nextProps.activeSectionIndex });
    console.log('**-- from componentWillReceiveProps --**')
    console.log(this.props);
    console.log(this.state);
  }

  getGroups = (section) => {
    // get groups
  }

  renderSection = () => {
    // debugger;
    return(
      <div>
        <h2>activeSectionIndex: {this.state.activeSectionIndex}</h2>
      </div>
    )
  }

  handleModClick = (e, titleProps) => {
    // debugger
    const { index } = titleProps;
    const { activeGroupIndex } = this.state;
    const newIndex = activeGroupIndex === index ? -1 : index;

    this.setState({ activeGroupIndex: newIndex });
  }

  // const showSection (activeSectionIndex) => {
  //
  // }

  render() {
    const { activeGroupIndex } = this.state;
    console.log(this.state);
    console.log(activeGroupIndex);
    return (
      <div>
        <Container textAlign='left'>
          {/* vvv just renders section id so far  */}
          {this.renderSection()}

          <Header as='h3' align='center'>Week 1</Header>
          <Accordion styled>
            <Accordion.Title active={activeGroupIndex === 0} index={0} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day1
            </Accordion.Title>
            <Accordion.Content active={activeGroupIndex === 0}>
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
            <Accordion.Title active={activeGroupIndex === 1} index={1} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day2
            </Accordion.Title>
            <Accordion.Content active={activeGroupIndex === 1}>
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
            <Accordion.Title active={activeGroupIndex === 2} index={2} onClick={this.handleModClick}>
              <Icon name='dropdown' />
              Week1 Day2
            </Accordion.Title>
            <Accordion.Content active={activeGroupIndex === 2}>
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
  // console.log("-----");
  // console.log(state);
  // debugger;
  return{activeSectionIndex: state.activeSectionIndex};
  // ^^^^^^^ arbitrary name :   ^^^^^ look in redux store for activeSectionIndex
}

export default connect(mapStateToProps)(SectionShow);

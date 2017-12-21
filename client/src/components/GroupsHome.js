import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setActiveCourse } from '../actions/course';
import {
  Button,
  Checkbox,
  Container,
  Grid,
  List,
  Segment
} from 'semantic-ui-react';

class GroupsHome extends React.Component {
  state = { sections: [] };

  componentDidMount() {
    const id = this.props.courseId;
    this.props.dispatch(setActiveCourse(id));
  }

  displaySections = () => {
    const { sections } = this.props;

    return sections.map(section => {
      return(
        <List.Item key={section.id}>
          <List.Content floated='right'>
            <Checkbox />
          </List.Content>
          <List.Content>
            {section.title}
          </List.Content>
        </List.Item>
      );
    });
  }

  displayGroups = () => {
    return (
      <Segment basic textAlign='center'>
        <Button primary>Generate Groups</Button>
      </Segment>
    )
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment style={styles.column}>
                <List divided verticalAlign='middle'>
                  { this.displaySections() }
                </List>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment style={styles.column}>
                { this.displayGroups() }
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const styles = {
  column: {
    height: '70vh',
    margin: '5%',
  },
}

const mapStateToProps = (state) => {
  return { sections: state.sections }
}

export default connect(mapStateToProps)(GroupsHome);

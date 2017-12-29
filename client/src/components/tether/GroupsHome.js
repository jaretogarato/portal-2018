import React from 'react';
import { connect } from 'react-redux';
import { getSections } from '../actions/sections';
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
  state = { sectionsLoaded: false };

  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });

  componentDidMount() {
    const id = this.props.courseId;
    const { dispatch } = this.props;
    dispatch(setActiveCourse(id));
    dispatch(getSections(id, this.setSectionsLoaded));
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

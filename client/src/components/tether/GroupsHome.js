import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSections } from '../../actions/sections';
import { setActiveCourse } from '../../actions/course';
import { toggleActiveSection } from '../../actions/sections';
import { setFlash } from '../../actions/flash';
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Header,
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

// No corresponding action in groups controller
  generateGroups = () => {
    const id = this.props.courseId;
    const { dispatch } = this.props;
    axios.put(`/api/courses/${id}/generate_groups`)
      .then(res => {
        console.log(res.data)
      })
      .catch( res => {
        dispatch(setFlash('Error Generating Groups. Try Again.', 'red'));
      })
  }

  handleCheck = (section) => {
    const { dispatch } = this.props;
    dispatch(toggleActiveSection(section.id));
  }

  displaySections = () => {
    const { sections } = this.props;

    return sections.map(s => {
      return(
        <List.Item key={s.id}>
          <List.Content floated='right'>
            <Checkbox
              onChange={() => this.handleCheck(s)}
              checked={s.active}
            />
          </List.Content>
          <List.Content>
            {s.title}
          </List.Content>
        </List.Item>
      );
    });
  }

  displayGroups = () => {
    return (
      <Segment basic textAlign='center'>
        <Button
          primary
          onClick={ () => this.generateGroups() }
        >
          Generate Groups
        </Button>
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
                <Header as='h1'>Course Name</Header>
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
  return { sections: state.sections, course: state.course }
}

export default connect(mapStateToProps)(GroupsHome);

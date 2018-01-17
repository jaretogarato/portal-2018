import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSections } from '../../actions/sections';
import { setFlash } from '../../actions/flash';
import { setHeaders } from '../../actions/headers';
import { updateSection } from '../../actions/sections';
import {
  Button,
  Checkbox,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';

class GroupForm extends React.Component {
  state = { sectionsLoaded: false };

  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });

  componentDidMount() {
    const { course, dispatch } = this.props;
    dispatch(getSections(course.id, this.setSectionsLoaded));
  }

  generateGroups = () => {
    const { course, dispatch } = this.props;
    axios.post(`/api/courses/${course.id}/generate_groups`)
      .then(res => {
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Error Generating Groups. Try Again.', 'red'));
        dispatch(setHeaders(err.headers));
      })
  }

  handleCheck = (s) => {
    const { dispatch } = this.props;
    const section = { ...s, active: !s.active }
    dispatch(updateSection(section));
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

  render() {
    return (
      <Segment basic>
        <Header>Select sections:</Header>
        <List divided>
          { this.displaySections() }
        </List>
        <Button
          primary
          onClick={ () => this.generateGroups() }
          >
          Generate Groups
        </Button>
      </Segment>
    );
  }

}

const mapStateToProps = (state) => {
  return { sections: state.sections, course: state.course }
}

export default connect(mapStateToProps)(GroupForm);

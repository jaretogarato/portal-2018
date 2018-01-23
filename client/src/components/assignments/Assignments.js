import React, { Component } from 'react';
import { Segment, Table, Button, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getAssignments } from '../../actions/assignments';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styledComponents';

class Assignments extends Component {
  state = { assignments: [] }

  componentDidMount() {
     this.props.dispatch(getAssignments())
  }

  displayAssignments = () => {
    const { id } = this.props.match.params
    return this.props.assignments.map( (assignment, i) => {
      return (
        <Table.Row key={i}>
          <Table.Cell>
            <Link to={`/courses/${id}/assignments/${assignment.id}`}>{assignment.title}</Link>
          </Table.Cell>
          { /*<Table.Cell>{date}</Table.Cell> */ }
        </Table.Row>
      )
    })
  }

  render() {
    const { id } = this.props.match.params
    return (
      <Segment basic>
        <PageTitle style={{ textAlign: 'left'}}>All Assignments</PageTitle>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
              <Link to={`/courses/${id}/assignments/create`}>
                <Button
                  basic
                  icon
                  labelPosition='left'
                  floated='right'>
                  <Icon name='add' />
                  Assignment
                </Button>
              </Link>
              <br />
              <br />
              <Table basic='very' striped singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width={6}>Name</Table.HeaderCell>
                    <Table.HeaderCell width={4}>Created At</Table.HeaderCell>
                    <Table.HeaderCell width={4}>Course</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.displayAssignments()}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
  }
}

export default connect(mapStateToProps)(Assignments);

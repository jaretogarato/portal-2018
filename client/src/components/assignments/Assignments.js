import React, { Component } from 'react';
import { Segment, Header, Table, Button, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getAssignments } from '../../actions/assignments';
import { connect } from 'react-redux';
import axios from 'axios';

class Assignments extends Component {
  state = { assignments: [] }

  componentDidMount() {
    this.props.dispatch(getAssignments())
  }

  displayAssignments = () => {
    const { id } = this.props.match.params
    return this.props.assignments.map(assignment => {
      return (
        <Table.Row key={assignment.id}>
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
        <Header as='h1' textAlign='center' style={styles.pageTitle}>All Assignments</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
            </Grid.Column>
            <Grid.Column width={2}>
              <Link to={`/courses/${id}/assignments/create`}>
                <Button
                  basic
                  color='blue'
                  icon
                  labelPosition='left'>
                  <Icon name='add' />
                  Assignment
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Table singleLine>
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

const styles = {
  pageTitle: {
    paddingTop: '2%',
    textDecoration: 'underline',
    fontWeight: 'bolder',
  },
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
  }
}

export default connect(mapStateToProps)(Assignments);

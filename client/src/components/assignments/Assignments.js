import React, { Component } from 'react';
import {
  Segment,
  Table,
  Button,
  Icon,
  Grid,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styledComponents';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

class Assignments extends Component {
  state = { assignments: [], column: null, direction: null }

  componentDidMount() {
    axios.get('/api/assignments')
    .then( res => {
      this.setState({ assignments: res.data })
    })
    .catch( err => {
      console.log(err);
    });
  }

  handleSort = clickedColumn => () => {
    const { column, direction, assignments } = this.state
    if (column === clickedColumn) {
      this.setState({
        column: clickedColumn,
        assignments: _.sortBy(assignments, [clickedColumn]),
        direction: 'ascending',
      })
    return
    }
    this.setState({
      assignments: assignments.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  displayAssignments = () => {
    const { id } = this.props.match.params
    return this.state.assignments.map( (assignment, i) => {
      let date = moment(assignment.due_date).format('MMMM DD, YYYY')
      return (
        <Table.Row key={i}>
          <Table.Cell>
            <Link to={`/courses/${id}/assignments/${assignment.id}`}>{assignment.title}</Link>
          </Table.Cell>
          <Table.Cell>
            {assignment.points}
          </Table.Cell>
          <Table.Cell>
            {date}
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    const { id } = this.props.match.params;
    const { column, direction } = this.state;
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
                    <Table.HeaderCell width={6}
                      sorted={column === 'name' ? direction : null} 
                      onClick={this.handleSort('name')}>
                      Name</Table.HeaderCell>
                    <Table.HeaderCell width={4}
                      sorted={column === 'created_at' ? direction : null} 
                      onClick={this.handleSort('created_at')}>
                      Points</Table.HeaderCell>
                    <Table.HeaderCell width={4}
                      sorted={column === 'course' ? direction : null} 
                      onClick={this.handleSort('course')}>
                      Due Date</Table.HeaderCell>
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

import React, { Component } from 'react';
import {
  Segment,
  Table,
  Button,
  Icon,
  Grid,
  Input,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styledComponents';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

class Assignments extends Component {
  state = {
    search: '',
    assignments: [],
  }

  componentDidMount() {
    axios.get('/api/assignments')
    .then( res => {
      this.setState({
        assignments: res.data,
      })
    }).catch( err => {
      // TODO - Flash Message
    });
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value});
  };

  render() {
    const { id } = this.props.match.params;
    const { column, search, assignments } = this.state;
    return (
      <Segment basic>
        <PageTitle style={{ textAlign: 'left'}}>All Assignments</PageTitle>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
              <div>
                <Input
                  onChange={this.handleChange}
                  icon={{ name: 'search'}}
                  placeholder="Search Assignments"
                />
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
              </div>
              <br />
              <br />
              <Table basic='very' striped singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width={6}>
                      Name</Table.HeaderCell>
                    <Table.HeaderCell width={4}>
                      Points</Table.HeaderCell>
                    <Table.HeaderCell width={4}>
                      Due Date</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                  assignments.map( (assignment, i) =>  assignment.title.toLowerCase()
                    .includes(this.state.search.toLowerCase()
                  ) ? (
                    <Table.Row key={i}>
                      <Table.Cell>
                        <Link to={`/courses/${id}/assignments/${assignment.id}`}>
                          {assignment.title}
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        {assignment.points}
                      </Table.Cell>
                      <Table.Cell>
                        {moment(assignment.due_date).format('MMMM DD, YYYY')}
                      </Table.Cell>
                    </Table.Row>
                  ) : null
                  )
                }
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

import React, { Component } from 'react';
import { Header, Table, Button, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

class Assignments extends Component {
  state = { assignments: [] }

  componentDidMount() {
    axios.get('/api/assignments')
      .then(res => {
        this.setState({ assignments: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  displayAssignments = () => {
    const { id } = this.props.match.params
    return this.state.assignments.map(assignment => {
      let time = moment(assignment.created_at).format('MMMM D, YYYY')
      let date = moment(assignment.due_date).format('MMMM D, YYYY')
      return (
        <Table.Row key={assignment.id}>
          <Table.Cell>
            <Link to={`/courses/${id}/assignments/${assignment.id}`}>{ assignment.title }</Link>
          </Table.Cell>
          <Table.Cell>{time}</Table.Cell>
          <Table.Cell>{date}</Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    const { id } = this.props.match.params
    return (
      <div>
        <Header as='h1' textAlign='center' style={styles.assignment}>Assignments</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
            </Grid.Column>
            <Grid.Column width={2}>
              <Link to={`/courses/${id}/assignments/create`}>
                <Button icon labelPosition='left'>
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
                    <Table.HeaderCell width={6}> Name </Table.HeaderCell>
                    <Table.HeaderCell width={4}> Created At </Table.HeaderCell>
                    <Table.HeaderCell width={4}> Due Date </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.displayAssignments()}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const styles = {
  assignment: {
    paddingTop: '2%',
  }
}

export default Assignments;

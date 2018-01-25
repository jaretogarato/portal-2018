import React, { Component } from 'react';
import {
  Segment,
  Table,
  Button,
  Icon,
  Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageTitle } from '../../styles/styledComponents';
import _ from 'lodash';

class Lectures extends Component {
  state = { lectures: [], column: null, direction: null }

  componentDidMount() {
    axios.get('/api/lectures')
      .then(res => {
        this.setState({ lectures: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSort = clickedColumn => () => {
    const { column, direction, lectures } = this.state
    if (column === clickedColumn) {
      this.setState({
        column: clickedColumn,
        lectures: _.sortBy(lectures, [clickedColumn]),
        direction: 'ascending',
      })
    return
    }
    this.setState({
      lectures: lectures.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  displayLectures = () => {
    const { id } = this.props.match.params
    return this.state.lectures.map(lecture => {
      let date = moment(lecture.created_at).format('MMMM D, YYYY')
      let { course } = this.props
      return (
        <Table.Row key={lecture.id}>
          <Table.Cell>
            <Link to={`/courses/${id}/lectures/${lecture.id}`}>{lecture.title}</Link>
          </Table.Cell>
          <Table.Cell>{date}</Table.Cell>
          <Table.Cell>{course.course_type} {course.term} {course.year}</Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    const { id } = this.props.match.params;
    const { column, direction } = this.state;
    return (
      <Segment basic>
        <PageTitle>Lectures</PageTitle>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
            </Grid.Column>
            <Grid.Column width={2}>
              <Link to={`/courses/${id}/lectures/create`}>
                <Button
                  basic
                  icon
                  labelPosition='left'>
                  <Icon name='add' />
                  Lecture
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Table basic='very' striped singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell 
                      width={6} 
                      sorted={column === 'name' ? direction : null} 
                      onClick={this.handleSort('name')}>
                      Name</Table.HeaderCell>
                    <Table.HeaderCell 
                      width={4}
                      sorted={column === 'created_at' ? direction : null}
                      onClick={this.handleSort('created_at')}>
                      Created At</Table.HeaderCell>
                    <Table.HeaderCell 
                      width={4}
                      sorted={column === 'course' ? direction : null}
                      onClick={this.handleSort('course')}>
                      Course</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.displayLectures()}
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
    course: state.course,
  }
}

export default connect(mapStateToProps)(Lectures);

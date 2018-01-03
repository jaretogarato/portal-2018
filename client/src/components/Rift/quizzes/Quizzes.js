import React, { Component } from 'react';
import { Header, Table, Container, Button, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getQuiz } from '../../../actions/quizzes'
import { connect } from 'react-redux';

class Quizzes extends Component {

  render() {
    return (
      <Container> 
       <Header textAlign='center' style={styles.quiz} > Quizzes  </Header> 
        <Grid>
          <Grid.Row> 
            <Grid.Column width={14}>
            </Grid.Column>
            <Grid.Column width={2}>
            <Link to={'./quizform'}> <Button icon labelPosition='left'>
              <Icon name='add' />
              Quiz
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
                <Table.HeaderCell width={4}> Created At</Table.HeaderCell>
                <Table.HeaderCell width={4}>Created By</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            <Table.Row>
              <Table.Cell>{this.quiz.title}</Table.Cell>
              <Table.Cell>{this.quiz.created_at}</Table.Cell>
              <Table.Cell>{this.user}</Table.Cell>
            </Table.Row>
            </Table.Body>
          </Table> 
            </Grid.Column>
          </Grid.Row>
        </Grid> 
      </Container> 
    )
  }

}

const styles = {
  quiz: {
    paddingTop: '2%',
  }
}

export default connect()(Quizzes);

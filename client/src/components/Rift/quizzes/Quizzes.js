import React, { Component } from 'react';
import { Header, Table, Container, Button, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
              <Table.Cell>First Quiz</Table.Cell>
              <Table.Cell>December 21, 2017</Table.Cell>
              <Table.Cell>FuChai Mead</Table.Cell>
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

export default Quizzes;

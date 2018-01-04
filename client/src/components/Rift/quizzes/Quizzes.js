import React, { Component } from 'react';
import { Header, Table, Container, Button, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getQuizzes } from '../../../actions/quizzes'
import { connect } from 'react-redux';
import axios from 'axios';

class Quizzes extends Component {

  componentDidMount() {
    this.props.dispatch(getQuizzes())
    axios.get('/api/quizzes')
    .then( res => {
      this.setState({ quizzes: res.data })
    })
    .catch( err => {
      console.log(err);
    });
  }

displayQuizzes = () => {
  return this.props.quizzes.map(quiz => {
    return(
      <Table.Row>
        <Table.Cell>{quiz.title}</Table.Cell>
        <Table.Cell>{quiz.created_at}</Table.Cell> 
      </Table.Row>
    )
  })
}
  render() {
    return (
      <Container> 
       <Header textAlign='center' style={styles.quiz} > Quizzes  </Header> 
        <Grid>
          <Grid.Row> 
            <Grid.Column width={14}>
            </Grid.Column>
            <Grid.Column width={2}>
            <Link to={'./quizform'}> 
              <Button icon labelPosition='left'>
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
              {this.displayQuizzes()}
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

const mapStateToProps = (state) => {
  return( {quizzes: state.quizzes})

}


export default connect(mapStateToProps)(Quizzes);

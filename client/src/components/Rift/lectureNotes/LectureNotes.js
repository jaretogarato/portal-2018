import React, { Component } from 'react';
import { List, Container, Header, Grid, Button, Icon, Table } from 'semantic-ui-react';
import axios from 'axios';

class LectureNotes extends Component {
  state = { lectureNotes: [] }

  componentDidMount() {
    axios.get('/api/lectures')
      .then( res => {
        this.setState({ lectureNotes: res.data })
      }).catch( err => {
        console.log(err);
      })
  }

  lectureNotesMap = () => {
    return(
      this.state.lectureNotes.map( lecture => {
        return(
          <Table.Row>
            <Table.Cell>{lecture.title}</Table.Cell>  
            <Table.Cell>{lecture.created_at}</Table.Cell>
            <Table.Cell>Bryan Leano</Table.Cell>
          </Table.Row>
        )
      }
    )
  )
  }

  render() {
    return (
      <Container> 
       <Header textAlign='center' style={styles.lectureNotes}>Lecture Notes</Header> 
        <Grid>
          <Grid.Row> 
            <Grid.Column width={14}>
            </Grid.Column>
            <Grid.Column width={2}>
             <Button icon labelPosition='left'>
              <Icon name='add' />
              Lecture Note
              </Button> 
            </Grid.Column>
          </Grid.Row> 
          <Grid.Row>
            <Grid.Column> 
              <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={6}>Name</Table.HeaderCell>
                <Table.HeaderCell width={6}>Created at</Table.HeaderCell>
                <Table.HeaderCell width={6}>Created by</Table.HeaderCell>  
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { this.lectureNotesMap() }
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
  lectureNotes: {
    paddingTop: '2%',
  }
}

export default LectureNotes;
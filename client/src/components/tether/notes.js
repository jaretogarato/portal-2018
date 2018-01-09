import React from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../../actions/notes'
import { Grid, Message, Loader, Label, Header, Divider, Button,
         Dimmer, Icon, Image, Card } from 'semantic-ui-react'



class Notes extends React.Component {
  state = { loaded:false }

  loadedCallback = () => {
    this.setState({ loaded: !this.state.loaded })
  }

  componentDidMount(){
    const { dispatch, userId } = this.props
    dispatch(fetchNotes(userId, this.loadedCallback))
    //also get the Sender's information
  }

  loaderDisplay = () => (
    <Dimmer active>
      <Loader />
    </Dimmer>
  )


  newNote = () => {
    const { notes } = this.props
    //Todo: format time, handleDelete, handleEdit
    return notes.map(note =>{
      const fullName = `${note.first_name} ${note.last_name}`
      return(
        <Grid.Row key={note.id} style={styles.message}>
          <Message info fluid='true'>
            <Card.Content>
              <Button color='red' size='mini' floated='right'
              >
               <Icon name='delete'></Icon>
              </Button>
              <Button color='blue' size='mini' floated='right'
              >
                <Icon name='edit'></Icon>
              </Button>
              <Image floated='left' size='mini' spaced='left' verticalAlign='top' bordered src={note.image} /> { }
                <Header as='h4'>
                 {fullName}
                </Header>
              <Card.Header as='h3'>{note.title}</Card.Header>
              <Divider fitted />
              <Card.Description>
                {note.content}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Header as='h6' floated='right'>{note.updated_at}</Header>
            </Card.Content>
          </Message>
      </Grid.Row>
      )
    });
  }

  render () {
    return(
      <Grid.Column width={16}>
        { this.state.loaded ? this.newNote() : this.loaderDisplay() }
      </Grid.Column>
    )
  }
}

const styles = {
  message: {
    paddingTop: '3%',
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(Notes);

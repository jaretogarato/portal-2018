import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { fetchNotes } from '../../actions/notes';
import {
  Grid,
  Dimmer,
  Loader,
} from 'semantic-ui-react';


class NoteList extends React.Component{
  state = { loaded: false }

  loadedCallback = () => {
    this.setState({ loaded: !this.state.loaded })
  }

  componentDidMount(){
    const { dispatch, userId } = this.props
    dispatch(fetchNotes(userId, this.loadedCallback))
  }

  loaderDisplay = () => (
    <Dimmer active>
      <Loader />
    </Dimmer>
  )

  render(){
    const { loaded } = this.state
    return(
      <Grid.Row>
        { loaded ? this.props.notes.map(n => <Note key={n.id} userId={this.props.userId} {...n} /> ) : this.loaderDisplay()}
      </Grid.Row>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(NoteList);

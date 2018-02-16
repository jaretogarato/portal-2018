import React from 'react';
import {
  Button,
  Segment,
  List,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMiscellaneou } from '../../actions/miscellaneous';
import EditMisc from './EditMisc';
import axios from 'axios';
import { PageTitle } from '../../styles/styledComponents';

class Miscellaneou extends React.Component {
  state = { loaded: false, edit: false };

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getMiscellaneou(id))
    this.checkLoaded()
  }

  componentDidUpdate() {
    this.checkLoaded()
  }

  checkLoaded = () => {
    if (!this.state.loaded && this.props.currentMisc) {
      this.setState({ loaded: true })
    }
  }

  deleteMisc = () => {
    const deleted = window.confirm("Delete Misc?")
    if (deleted) {
      axios.delete(`/api/miscellaneous/${this.props.currentMisc.id}`)
        .then( res => {
          this.props.history.push('./')
        }).catch( err => {
          // TODO - set flash message
      });
    }
  }

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({ edit: !edit })
  }

  displayMisc = () => {
    const {
      user,
      currentMisc: {
        title, content, created_at
      }
    } = this.props;

    if (this.state.edit) {
      return (
        <Segment basic>
          <Button basic onClick={this.toggleEdit}>
            Cancel Edit
          </Button>
          <EditMisc toggleEdit={this.toggleEdit} />
        </Segment>
      )
    }
  }

};

const mapStateToProps = (state) => {
  return{
    currentMisc: state.miscellaneou,
    user: state.user,
  }
}

export default connect(mapStateToProps)(Miscellaneou);
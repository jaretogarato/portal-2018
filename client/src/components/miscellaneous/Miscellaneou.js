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
import { deleteMisc, getMiscellaneou } from '../../actions/miscellaneous';
import EditMisc from './EditMisc';
import axios from 'axios';
import { PageTitle, PageSubTitle } from '../../styles/styledComponents';

class Miscellaneou extends React.Component {
  state = { loaded: false, edit: false };

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getMiscellaneou(id))
    this.checkLoaded()
  }

  toggleEdit = () => {
    const { edit } = this.state
    this.setState({ edit: !edit })
  }

  deleteMisc = (id) => {
    const deleted = window.confirm('Delete Misc?')
    if (deleted)
    this.props.dispatch(deleteMisc(id, this.props.history ))
  }

  componentDidUpdate() {
    this.checkLoaded()
  }

  checkLoaded = () => {
    if (!this.state.loaded && this.props.currentMisc) {
      this.setState({ loaded: true })
    }
  }

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({ edit: !edit })
  }

//  displayMisc = () => {
//    const {
//      user,
//      currentMisc: {
//        title, content, created_at
//      }
//    } = this.props;
//
//    if (this.state.edit) {
//      return (
//        <Segment basic>
//          <Button basic onClick={this.toggleEdit}>
//            Cancel Edit
//          </Button>
//          <EditMisc toggleEdit={this.toggleEdit} />
//        </Segment>
//      )
//    }
//  }

  render() {
    const { user, misc: { title, id, content, created_at  } } = this.props
    if(this.state.edit) {
      return(
        <Segment basic>
          <Button basic onClick={this.toggleEdit}>
            Cancel Editing
          </Button>
          <EditMisc toggleEdit={this.toggleEdit}/>  
        </Segment>
      )
    } else {
      return(
        <Segment basic name='misc'>
          { user.is_admin && 
            [
              <Link to={'./'} >
                <Button basic floated='right'>View All Lectures</Button>
              </Link>,
              <Button basic floated='right' name='delete' onClick={() => this.deleteMisc(id)}>Delete</Button>,
              <Button basic floated='right' onClick={this.toggleEdit}>Edit</Button>
            ]
          }
          <PageTitle>{title}</PageTitle>
          <List>
            <List.Item>
              <PageSubTitle>Description:</PageSubTitle>
              {content}
            </List.Item>
          </List>
        </Segment>
      )
    }
  }
};

const styles = {
  listItemHeader: {
    display: 'inline-block',
  },
}

const mapStateToProps = (state) => {
  return{
    currentMisc: state.miscellaneou,
    user: state.user,
  }
}

export default connect(mapStateToProps)(Miscellaneou);

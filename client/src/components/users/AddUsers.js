import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import fileDownload from 'js-file-download';
import DropZone from 'react-dropzone';
import { connect } from 'react-redux';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import axios from 'axios';

const styles = { 
  drop: { height: 0, marginLeft: '5px' }
}

class AddUsers extends React.Component {
  makeFile = () => {
    const data = [
      'first_name, last_name, email, role\nJane, Doe, jane@doe.com, Student/TA/Teacher/Auditor'
    ]
    fileDownload(data, 'users.csv')
  }

  drop = (files) => {
    const file = files[0];
    const { courseId } = this.props; 
    const data = new FormData();
    data.append('file', file)
    axios.post(`/api/invitations/mass_invite?course_id=${courseId}`, data)
      .then( res => this.props.dispatch(setFlash('Users upload started...', 'green')) )
      .catch( err => this.props.dispatch(setFlash(err.response.errors, 'red')) )
  }

  render() {
    return (
      <div>
        <Divider hidden />
        <Button.Group>
          <Button onClick={this.makeFile}>Download Sample CSV</Button>
          <DropZone style={styles.drop} multiple={false} onDrop={this.drop}>
            <Button icon labelPosition="left">
              <Icon name="file excel outline" />
              Upload CSV
            </Button>
          </DropZone>
        </Button.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { courseId: state.course.id }
}

export default connect(mapStateToProps)(AddUsers);

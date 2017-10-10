import React, { Component } from 'react';
import { handleUpload } from '../actions/avatar';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Segment, Grid, Image, Header } from 'semantic-ui-react';

class UserProfile extends Component {
   state = { fileUploading: false }
    onDrop = (avatar) => {
        // dispatch the handleUpload action pass it the photo
        this.toggleUploading();
        this.props.dispatch(handleUpload(avatar[0], this.toggleUploading));
      }

      toggleUploading = () => {
        this.setState({ fileUploading: !this.state.fileUploading });
      }

      assignAvatar = () => {
        return this.props.photos.map( photo => {
          return(
            <Grid.Column width={4} key={photo.id}>
              <Image src={photo.url} fluid />
            </Grid.Column>
          );
        });
      }

    render() {
        return (
          <Segment basic >
            <Dropzone
                onDrop={this.onDrop}
                style={{ width: '70px', height: '70px', border: 'solid black'}}
                >
                <Header> Add Stuff Here </Header>
            </Dropzone>
          </Segment>
        )
    }

}

export default connect()(UserProfile);
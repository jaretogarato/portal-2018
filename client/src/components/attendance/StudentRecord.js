import React from 'react';
import { updateUserStatus } from '../../actions/users';
import { connect } from 'react-redux';
import { Card, Container, Header, Icon, Image, Item } from 'semantic-ui-react';

class StudentRecord extends React.Component {
  state = { status: 'none' };

  toggleStatus = () => {
    const { status } = this.state;
    switch(status) {
      case 'none':
        this.handleStatusChange('present')
        break;
      case 'present':
        this.handleStatusChange('absent')
        break;
      case 'absent':
        this.handleStatusChange('tardy')
        break;
      case 'tardy': 
        this.handleStatusChange('none')
        break;
    }
  }

  handleStatusChange = (recordStatus) => {
    this.setState( (state, props) => {
      props.dispatch(updateUserStatus(props.user.id, recordStatus))
      return { status: recordStatus }
    })
  }
  
  displayIcon = () => {
    switch(this.state.status) {
      case 'none': 
        return <Icon name='ban' size='big' color='grey' /> 
      case 'present':
        return <Icon name='check circle outline' size='big' color='green' /> 
      case 'absent':
        return <Icon name='remove circle outline' size='big' color='red' /> 
      case 'tardy':
        return <Icon name='wait' size='big' color='orange' /> 
    }
  }

  render() {
    const { first_name, last_name } = this.props.user;
    return (
      <Container>
        <Item.Group>
          <Item style={styles.userSection} onClick={this.toggleStatus}>
            <Item.Image style={styles.recordImage} size='tiny' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhMRBxIQEhMUEhYSGBASFRAVFRgYFxIXFxcXGBcYHCggGRslGxoZITEhJSkrLi8uFx8zODMtNygtLisBCgoKDQ0NDg0HDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAwIB/8QANxABAAECAwQGBwgDAQAAAAAAAAECAwQRIQUxQVESEyKRscFSYXGBodHhFCMyM2Jy8PE0gpIk/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A0gDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJODwdWKq00j0stARn2mmavwxM+xcxsmjLWavh8kmzg6LNUTbjKY45zmgz00zG+J7nlqp13uF/CUX6e3TGfONJBnBaV7ImLXYqzq5bomPKVZVTNNWVWkxwUfAAAAAAAAAAAAAAAAAAAAAAScDhZxV3TSI1mcs/g0FMdGnKOCPs/D/Z8NETvnWfkkoAAAACBtLA9fPStZdKI1jn9U8BlpjKdXxcbWwkTR1lG+N/rjmpwAFAAAAAAAAAAAAAAAABL2bZ67FxnujtT7t3xRFzsW30bM1c5y7v7QWIAAAAAAAPldHWUTFW6YyZeqno1TE8NGpUG07fV4yr19rv+uYIgCgAAAAAAAAAAAAAAAAv9lxlgaff4yoGi2dGWCo9nmgkAAAAAAAAKjbn51P7Z8Vuptt/5FP7fOQVwCgAAAAAAAAAAAAAAAA0eBpmjCURV6PjqzjSYKvrMJTP6Yju0QdgAAAAAAAFXtymMqZ46x7lorduflU+2fAFOAoAAAAAAAAAAAAAAAALjYlzO1VTPCYnv/pTpezsVGFuz088pjggvx4s3IvW4qo3S9gAAAAAAKfbdWd6mOUZ98/RY43E/ZbPSyz1yyUF+9N+7NVe+QcwFAAAAAAAAAAAAAAAAAAF5sevpYTLlM/HVOU2xbmWImnhMZ++FygAAAAATOUAqdt3M66aY4a+UKt0xF2b96aquP8AIcwAFAAAAAAAAAAAAAAAAAAE/Y0Z4z/WfGF2ptiR/wCmr9vnC5QAAAAHyqM6Z9j6Ayo9XI6NyY5TMfF5UAAAAAAAAAAAAAAAAAScLg6sTPZ0j0p3fUEZMw+zq7+s9mOc/JaYbAUYfWIzn0p8uSUg54exGHt5W49/Gfa6AAAAAAACu2lgOsjpWI7XGI4+v2qedJ1alyv4em/H3sRPr494M0LDF7Mqta2e1HLj9VeoAAAAAAAAAAA6WbNV6vK1Gcg5utixVfqytRM+Hes8PsmKdb85/pjd3rGiiLdOVEREcoQQMLsum3rf7U8uH1WERlGgAAAAAAAAAAAAAIuLwFOI1/DVzjz5pQDOYnC1Yar7yNPSjc4NTVTFVOVURMcpVmL2Vxw3/M+UgqR6qpmirKuMp5S8qAAAAAO2FsTib0U0++eUA94LCTiq9NKY31eUete2bNNijK1GUePtfbNqLNuKbekQ9oAAAAAAAAAAAAAAAAAAAAOOJwtOJp+8jXnG9S4vBVYaddafSjz5NA+VR0oyq1jkDLCXtDCfZrvZ/DO75IigAAvdk2Oqw/SnfVr7uCnwtrr8RTTzn4cWliMo0QAAAAAAAAAAAAAAAAAAAAAAAAccXY+0WJp4749rOTGU6tSotrWeqxWcbqtffx/nrBCAUWmxLWdVVc8OzHjPktkbZtvqsHT6+13/AESUAAAAAAAAAAAAAAAAAAAAAAAABA2xa6eF6Xoz8J0+Se8X6Ots1UzxiYBmB96E8hRprP5NP7Y8HsEAAAAAAAAAAAAAAAAAAAAAAAAAAFSAo//Z' />
            <Item.Content verticalAlign='middle'>
              <Item.Header>
                { this.displayIcon() } 
                { last_name }, { first_name } 
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    )
  }
}

const styles = {
  userSection: {
    width: '50%',
    border: '1px solid #c0c0c0'
  },
  recordImage: {
    width: '50px'
  }
}

export default connect()(StudentRecord);
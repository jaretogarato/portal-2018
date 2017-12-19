import React from 'react';
import { connect } from 'react-redux';
import { updateUserStatus } from '../../actions/users';
import { Container, Header, Icon, Image, Item } from 'semantic-ui-react';

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
            <Item.Image style={styles.recordImage} size='tiny' src='http://skoolrunnr.com/wp-content/uploads/2017/10/placeholder.png' />
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

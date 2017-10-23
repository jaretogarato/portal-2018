import React from 'react';
import { updateUserStatus } from '../../actions/users';
import { connect } from 'react-redux';
import { Card, Container, Header, Icon, Image } from 'semantic-ui-react';

class UserSegment extends React.Component {
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

  handleStatusChange = (foo) => {
    this.setState( (state, props) => {
      props.dispatch(updateUserStatus(props.user.id, foo))
      return { status: foo }
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
        <Card style={styles.userSection} onClick={this.toggleStatus}>
          <Card.Content>
            <Image floated='left' size='tiny' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pnbX2ymlHMB0338HBDcg3hrWKiWlNwIQ81WmhKoolgkqD5Uofw' />
            <Header as='h1'>
              { last_name }, { first_name } 
              { this.displayIcon() }   
            </Header>
          </Card.Content>
        </Card>
      </Container>
    )
  }
}

const styles = {
  userSection: {
    width: '50%'
  }
}

export default connect()(UserSegment);
import React from 'react';
import { connect } from 'react-redux';
import { updateUserStatus } from '../../actions/users';
import { Container,
  Header,
  Icon,
  Image,
  Item,
  Form
} from 'semantic-ui-react';

class StudentRecord extends React.Component {
  state = { status: 'present' };

  handleStatusChange = (recordStatus) => {
    this.setState( (state, props) => {
      props.dispatch(updateUserStatus(props.user.id, recordStatus))
      return { status: recordStatus }
    })
  }

  handleClick = (status, inactive) => {
    if(inactive)
      this.handleStatusChange(status)
  }

  displayIcon = () => {
    const { status } = this.state
    return(
      <Form style={styles.row}>
        <Form.Field style={styles.noMargin}>
          <Icon
            name='check circle outline'
            size='big'
            color='green'
            disabled={ status !== 'present' }
            onClick={ () => this.handleClick('present', status !== 'present') }
            style={styles.pointer}
          />
        </Form.Field>
        <Form.Field style={styles.noMargin}>
          <Icon
            name='remove circle outline'
            size='big'
            color='red'
            disabled={ status !== 'absent' }
            onClick={ () => this.handleClick('absent', status !== 'absent') }
            style={styles.pointer}
          />
        </Form.Field>
        <Form.Field style={styles.noMargin}>
          <Icon
            name='wait'
            size='big'
            color='orange'
            disabled={ status !== 'tardy' }
            onClick={ () => this.handleClick('tardy', status !== 'tardy') }
            style={styles.pointer}
          />
        </Form.Field>
      </Form>
    )
  }

  render() {
    const { first_name, last_name } = this.props.user;
    return (
      <Container>
        <Item.Group>
          <Item style={styles.userSection} onClick={this.toggleStatus}>
            <Item.Image style={styles.recordImage} size='tiny' src='http://skoolrunnr.com/wp-content/uploads/2017/10/placeholder.png' />
            <Item.Content verticalAlign='middle'>
              <Item.Header style={styles.row}>
                { last_name }, { first_name }
                { this.displayIcon() }
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
    width: '35%',
    border: '1px solid #c0c0c0'
  },
  recordImage: {
    width: '50px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '7%',
  },
  noMargin: {
    marginBottom: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pointer: {
    cursor: 'pointer',
  }
}

export default connect()(StudentRecord);

import React from 'react';
import { connect } from 'react-redux';
import { updateUserStatus } from '../../actions/users';
import { Container,
  Icon,
  Item,
  Form,
} from 'semantic-ui-react';

class StudentRecord extends React.Component {
  state = { status: '' }

  componentWillMount() {
    this.setState({ status: this.props.status })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status !== this.state.status)
      this.setState({ status: nextProps.status })
  }

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
    const { submitted } = this.props
    return(
      <Form style={styles.row}>
        <Form.Field style={styles.noMargin}>
          <Icon
            name='check circle outline'
            size='big'
            color='green'
            disabled={ status !== 'present' }
            onClick={ submitted ? () => {} : () => this.handleClick('present', status !== 'present') }
            style={styles.pointer}
          />
        </Form.Field>
        <Form.Field style={styles.noMargin}>
          <Icon
            name='remove circle outline'
            size='big'
            color='red'
            disabled={ status !== 'absent' }
            onClick={ submitted ? () => {} : () => this.handleClick('absent', status !== 'absent') }
            style={styles.pointer}
          />
        </Form.Field>
        <Form.Field style={styles.noMargin}>
          <Icon
            name='wait'
            size='big'
            color='orange'
            disabled={ status !== 'tardy' }
            onClick={ submitted ? () => {} : () => this.handleClick('tardy', status !== 'tardy') }
            style={styles.pointer}
          />
        </Form.Field>
        <Form.Field style={styles.noMargin}>
          <Icon
            name='remove circle outline'
            size='big'
            color='blue'
            disabled={ status !== 'excused' }
            onClick={ submitted ? () => {} : () => this.handleClick('excused', status !== 'excused') }
            style={styles.pointer}
          />
        </Form.Field>
      </Form>
    )
  }

  render() {
    const { first_name, last_name } = this.props.user;
    let { image } = this.props.user;

    if(!image)
      image = 'http://skoolrunnr.com/wp-content/uploads/2017/10/placeholder.png'

    return (
      <Container>
        <Item.Group>
          <Item style={styles.userSection} onClick={this.toggleStatus}>
            <Item.Image style={styles.recordImage} size='tiny' src={image} />
            <Item.Content verticalAlign='middle'>
              <Item.Content as='h4' style={styles.row}>
                { last_name }, { first_name }
                { this.displayIcon() }
              </Item.Content>
              <span style={styles.status}>{this.state.status}</span>
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
    marginBottom: '8px',
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
  },
  status: {
    fontWeight: 'normal',
    color: 'purple',
  },
}

const mapStateToProps = (state) => {
  return { currentUser: state.user, users: state.users }
}

export default connect(mapStateToProps)(StudentRecord);

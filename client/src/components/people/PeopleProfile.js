import React from 'react';
import BadgeForm from './BadgeForm';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userId';
import {
  Card,
  Divider,
  Grid,
  Header,
  Segment,
  Image,
  Button,
  Icon,
  Dropdown
} from 'semantic-ui-react'
import NoteForm from './noteForm'
import NoteList from './NoteList'

class PeopleProfile extends React.Component {
  // some boolean state that checks if form is shown
  state = { user: {}, showForm: false }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getUser(id))
  }

  // toggleForm = () => {
  //   const {showForm} = this.state
  //   this.setState({showForm: !showForm})
  // }

  toggleForm = () => this.setState({showForm: !this.state.showForm});

  displayBadges = () => {
    const badges = [
      {
        header: 'Badge 1',
        meta: 'Team Player',
      },
      {
        header: 'Badge 2',
        meta: 'Leadership',
      },
      {
        header: 'Badge 3',
        meta: 'Coding Aptitude',
      },
      {
        header: 'Badge 4',
        meta: '95% Attendance',
      },
      {
        header: 'Badge 5',
        meta: '100% Homework',
      },
    ]

    // deleteBadge = () => {
    //   axios.delete(`/api/badges/${this.state.badge.id}`)
    //     .then( res => {
    //        this.props.history.push('/dashboard')
    //     })
    //     .catch( err => {
    //       console.log(err)
    //     })
    // }

      return badges.map( badge => {
        return(
          <Card>
            <Card.Content>
                <Card.Header>
                  {badge.header}
                </Card.Header>
                <Card.Meta>
                  {badge.meta}
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <Button basic color='blue' onClick={this.deleteBadge}>Delete Badge</Button>
                </div>
              </Card.Content>
            </Card>
        );
      })
    }


  

  render () {
    const { user, match: { params: { id } } } = this.props
    const fullName = `${user.first_name} ${user.last_name}`
    return (
      <Segment basic>
        <Grid className='container'>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image
                circular='true'
                bordered
                src={user.image}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as='h1'>{fullName}</Header>
              <Header as='h3'>{user.email}</Header>
              <Divider />
              <Dropdown text='Add Badges'>
                <Dropdown.Menu>
                  
                    <Button 
                      basic
                      color='blue' 
                      icon 
                      labelPosition='left'
                      onClick={this.toggleForm}
                    >
                      <Icon name='add' />
                      Add Badges
                    </Button>
                </Dropdown.Menu>
              </Dropdown>
                {this.state.showForm ? <BadgeForm /> : null }
              {/* do some sort of conditional rendering */}
              {/* terneries are nice for this */}
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Segment basic>
                      <Card.Group itemsPerRow={5}>
                        { this.displayBadges() }
                      </Card.Group>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as='h2'>Bio</Header>
              <Divider />
              {user.bio}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <NoteForm userId={id}/>
            </Grid.Column>
          </Grid.Row>
          { this.props.current_user.role === 'ta' || 'teacher' ? <NoteList userId={id}/> : null }
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userId,
    current_user: state.user
   }
}

export default connect(mapStateToProps)(PeopleProfile);

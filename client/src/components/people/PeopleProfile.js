import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userId';
import {
  Card,
  Divider,
  Grid,
  Header,
  Segment,
  Icon,
  Button
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import NoteForm from './noteForm'
import Notes from './notes'

class PeopleProfile extends React.Component {
  state = { user: {} }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getUser(id))
  }

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
      return badges.map( badges => {
        return(
            <Card>
            <Card.Content>
                <Card.Header>
                  {badges.header}
                </Card.Header>
                <Card.Meta>
                  {badges.meta}
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <Button basic color='blue'>Delete Badge</Button>
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
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as='h1'>{fullName}</Header>
              <Header as='h3'>{user.email}</Header>
              <Divider />
              <Link to={``}>
                <Button 
                  basic
                  color='blue' 
                  icon 
                  labelPosition='left'>
                  <Icon name='add' />
                Add Badges
                </Button>
              </Link>
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
            <Grid.Column withd={16}>
              <NoteForm userId={id}/>
            </Grid.Column>
          </Grid.Row>
          <Notes userId={id}/>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.userId }
}

export default connect(mapStateToProps)(PeopleProfile);

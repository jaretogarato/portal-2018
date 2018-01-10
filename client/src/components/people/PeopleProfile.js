import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userId';
import {
  Card,
  Divider,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import NoteForm from './noteForm'
import Notes from './notes'

class PeopleProfile extends React.Component {
  state = { user: {} }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getUser(id))
  }

  render () {
    const { user, match: { params: { id } } } = this.props
    const fullName = `${user.first_name} ${user.last_name}`
    const badges = [
      {
        header: 'Badge 1',
        meta: 'badge things',
      },
      {
        header: 'Badge 2',
        meta: 'badge things',
      },
      {
        header: 'Badge 3',
        meta: 'badge things',
      },
      {
        header: 'Badge 4',
        meta: 'badge things',
      },
    ]

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
              <Header as='h4'>Badges?</Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Segment basic>
                      <Card.Group itemsPerRow={4} items={badges} />
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

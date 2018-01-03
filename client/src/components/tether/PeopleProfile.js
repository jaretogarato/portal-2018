import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../actions/userId'
import { Segment, Image, Grid, Divider, Header, Card, Message } from 'semantic-ui-react'

class PeopleProfile extends React.Component {
  state = { user: {} }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getUser(id))
  }

  userMessages = () => {
    return(
      <Message info fluid>
        <Message.Header>Was this what you wanted?</Message.Header>
        <p>Did you know it's been a while?</p>
      </Message>
    )
  }

  render () {
    const { user } = this.props
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
      <Segment basic className={styles.container}>
        <Grid className='container'>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image
                style={styles.image}
                size='large'
                src={user.image}
                alt={`${fullName}'s profile picture`}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as='h1'>
                {fullName}
              </Header>
              <Header as='h3'>
                {user.email}
              </Header>
              <Divider />
              <Header as='h4'>
                Badges?
              </Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Segment basic className={styles.badges}>
                      <Card.Group itemsPerRow={4} className={styles.badges} items={badges} />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as='h2'>
                Bio
              </Header>
              <Divider />
              {user.bio}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
                <Grid.Column width={4}>
                </Grid.Column>
                <Grid.Column width={12}>
                  { this.userMessages() }
                </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const styles = {
  image: {
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '3px',
    overflowX: 'hidden',
  },
  container: {
    paddingTop: '5%',
  },
  badges: {
    display: 'inline',
    justifyContent: 'space-between'
  }
}

const mapStateToProps = (state) => {
  return { user: state.userId }
}

export default connect(mapStateToProps)(PeopleProfile);

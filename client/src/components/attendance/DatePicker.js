import React from 'react'
import moment from 'moment'
import { Button, Container, Grid, Header, Loader, Dimmer } from 'semantic-ui-react'
import { getDate, updateDate } from '../../actions/currentDate'
import { connect } from 'react-redux'

class DatePicker extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    const { dispatch } = this.props
    let currentDate = new Date()
    currentDate = moment(currentDate).format('ddd MMM D YYYY')
    dispatch(getDate(currentDate))
    this.hasCourse()
  }

  handleDayChange = (dayChange) => {
    const { dispatch, currentDate } = this.props
    let newDate = moment(currentDate).add(dayChange, 'day').format('ddd MMM D YYYY')
    dispatch(updateDate(newDate))
  }

  componentDidUpdate() {
    this.hasCourse()
  }

  hasCourse = () => {
    if (!this.state.loaded && this.props.course.id)
      this.setState({ loaded: true })
  }

  isLoaded = () => {
    const { currentDate, course } = this.props
    if (this.state.loaded){
      return(
        <Grid stackable columns='equal'>
          <Grid.Row stretched>
              <Grid.Column>
                <Header as='h1'>
                {`${course.course_type} ${course.term} ${course.year}`}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' textAlign="right">
                  { currentDate }
                </Header>
                  <Container textAlign='right'>
                    <Button.Group>
                      <Button
                        content='Prev'
                        icon='angle double left'
                        labelPosition='left'
                        onClick={() => this.handleDayChange(-1)}
                      />
                      <Button
                        content='Next'
                        icon='angle right double'
                        labelPosition='right'
                        onClick={() => this.handleDayChange(1)}
                      />
                    </Button.Group>
                  </Container>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    } else {
      return (
        <Dimmer active>
          <Loader>Loading... </Loader>
        </Dimmer>
      )
    }
  }

  render() {
    return (
      <div>
        {
          this.isLoaded()
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentDate: state.currentDate, course: state.course }
}

export default connect(mapStateToProps)(DatePicker)

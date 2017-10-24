import React from 'react';
import moment from 'moment';
import { Button, Container, Grid, Header } from 'semantic-ui-react';
import { getDate, updateDate } from '../../actions/currentDate';
import { getAttendance } from '../../actions/attendance';
import { connect } from 'react-redux';

class DatePicker extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    // TODO: make current date
    let currentDate = new Date("October 18, 2017")
    currentDate = moment(currentDate).format('ddd MMM D YYYY')
    dispatch(getDate(currentDate));
  }

  handleDayChange = (dayChange) => {
    const { dispatch, currentDate, courseId } = this.props;
    let newDate = moment(currentDate).add(dayChange, 'day').format('ddd MMM D YYYY')
    dispatch(updateDate(newDate));
  }
  
  render() {
    const { currentDate } = this.props;
    return(
      <Grid stackable columns='equal'>
        <Grid.Row stretched>
            <Grid.Column>
              <Header as='h1'>
                Full-Time Summer 2017
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
  }
}

const mapStateToProps = (state) => {  
  return { currentDate: state.currentDate }
}

export default connect(mapStateToProps)(DatePicker);
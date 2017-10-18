import React from 'react';
import moment from 'moment';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

class DatePicker extends React.Component {
  state = { currentDate: '' };

  componentDidMount() {
    // TODO: Need to get actual real date
    let currentDate = new Date("October 18, 2017")
    this.setState({ currentDate: moment(currentDate).format('ddd MMM D YYYY') }) 
  }

  handleDayChange = (dayChange) => {
    const { currentDate } = this.state;
    this.setState({ currentDate: moment(currentDate).add(dayChange, 'day').format('ddd MMM D YYYY') })
  }
  
  render() {
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
                { this.state.currentDate }
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

export default DatePicker;
import React, { Component } from 'react';
import { Segment, Grid, Button, Checkbox, Form} from 'semantic-ui-react';


class TrueFalse extends Component {
state={question: ''}

  render(){
    return ( 
    <Segment> 
     <Form onSubmit={this.handleSubmit}> 
        <Form.TextArea onChange={this.handleQuestion} name='question' value={this.state.question} label='Question'> </Form.TextArea> 
        </Form>
      <Grid style={styles.grid} > 
        <Grid.Row> 
          <Grid.Column> 
          <p> True </p> 
          <p> False </p> 
          </Grid.Column> 
          <Grid.Column>  
          <Checkbox name='True' />
          <p> </p>
          <Checkbox name='False' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
        <Button basic type='submit'> save question </Button> 
      </Segment> 
    )
  }
}

const styles = {
  grid: {
    padding: '10px'
  }
}
export default TrueFalse;
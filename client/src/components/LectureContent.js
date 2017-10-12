import React from 'react';
import Editor from './Editor';
import {
  Container,
  Header,
  Button,
  Divider,
  Segment,
  Grid,
  Icon,
  Dropdown,
  Menu,
} from 'semantic-ui-react';

const LectureContent = () => (
  <Container>

    <Segment basic>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column textAlign='left'>
            <Button><Icon name='bars' />View All Content</Button>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <Button><Icon name='search' />Preview</Button>
            <Button><Icon name='wait' />History</Button>
            <Button color='red'><Icon name='remove circle' />Delete</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Divider />

    <Editor placeholder='Write something...' />
  </Container>
)

export default LectureContent;
import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';

const Footer = () => (
  <div>
    <Segment textAlign='center' basic style={styles.footer}>
      <Image
        src='https://media.licdn.com/media/AAEAAQAAAAAAAAfcAAAAJDI5MjNjMmJjLTg5NjktNGUzNy04ZDAwLTNhODI5NmFhZjM4YQ.png'
        size='medium'
        centered
      />
      {/* TODO: some image here */}
      <hr />
      {/* TODO: maybe some links here? */}
      <Grid>
        <Grid.Column textAlign='center' width={4}>
          <a href='http://www.devpointlabs.com/'>DevPoint Labs</a>
        </Grid.Column>
        <Grid.Column textAlign='center' width={4}>
          <a href='http://phabricator.devpointstudios.com/project/board/2/'>Phabricator Board</a>
        </Grid.Column>
        <Grid.Column textAlign='center' width={4}>
          <a href='https://stackoverflow.com/'>Stack Overflow</a>
        </Grid.Column>
        <Grid.Column textAlign='center' width={4}>
          <a href='http://i.imgur.com/TWTnn.jpg'>Me</a>
        </Grid.Column>
      </Grid>
    </Segment>
  </div>
)

const styles = {
  footer: {
    backgroundColor: '#75da71',
    position: 'absolute', left: '0',
    bottom: '0', right: '0'
  },

}

export default Footer;

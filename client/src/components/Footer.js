import React from 'react';
import {
  Segment,
  Grid,
  Image,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Segment fluid style={styles.container}>
    <Segment textAlign='center' basic >
      <Grid columns={3}>
        <Grid.Column>
          <a href='http://www.devpointlabs.com/'>
            <Image
              src='https://media.licdn.com/media/AAEAAQAAAAAAAAfcAAAAJDI5MjNjMmJjLTg5NjktNGUzNy04ZDAwLTNhODI5NmFhZjM4YQ.png'
              size='medium'
              style={styles.icons}
            />
          </a>
        </Grid.Column>
        <Grid.Column>
          <a href='http://www.stackoverflow.com'>
            <Image
              src='http://www.computerscience.org/wp-content/uploads/2015/10/Stackoverflow.png'
              size='medium'
              style={styles.icons}
            />
          </a>
        </Grid.Column>
        <Grid.Column>
          <a href='http://www.github.com'>
            <Image
              src='https://4.bp.blogspot.com/-r4FaHOFh23U/WQYT2ynYqLI/AAAAAAAAEbg/BacAEeR-p_EyjyWRhsT5UK3mEWxVPhOiQCLcB/s400/github.7433692cabbfa132f34adb034e7909fa.jpg'
              size='medium'
              style={styles.icons}
            />
          </a>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment inverted color='grey' attached='top'>
      <Grid columns={2}>
        <Grid.Column>
          <p style={styles.text}>
            <i>Designed by DevPoint Studios</i>
          </p>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Link to='/' style={styles.leftNav}>
            <p>
              Home /
          </p>
          </Link>
          <Link to='/users' style={styles.leftNav}>
            <p>
              Users /
          </p>
          </Link>
          <Link to='/' style={styles.leftNav}>
            <p>
              Support
          </p>
          </Link>
        </Grid.Column>
      </Grid>
    </Segment>
  </Segment>
)

const styles = {
  footer: {
    backgroundColor: '#FFF',
    position: 'relative'
  },
  container: {
    padding: '0',
  },
  text: {
    color: 'white',
  },
  leftNav: {
    display: 'inline-block',
    color: 'white',
  },
  icons: {
    display: 'inline-block',
  },
}

export default Footer;

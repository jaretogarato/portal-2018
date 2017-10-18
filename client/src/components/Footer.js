import React from 'react';
import {
  Segment,
  Grid,
  Image,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FooterStyled } from '../styles/styles';

const Footer = () => (
  <FooterStyled>
    <Segment inverted color='grey' attached='top'>
      <Grid columns={2}>
        <Grid.Column textAlign='left'>
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
  </FooterStyled>
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

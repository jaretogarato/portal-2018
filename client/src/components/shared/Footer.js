import React from 'react';
import { FooterStyled } from '../../styles/styles';
import { Link } from 'react-router-dom';
import {
  Grid,
  Segment
} from 'semantic-ui-react';

const Footer = () => (
  <FooterStyled>
    <Segment style={styles.footer} attached='top'>
      <Grid columns={2}>
        <Grid.Column textAlign='left'>
          <p style={styles.text}>
            <i>Designed by DevPoint Studios</i>
          </p>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Link to='/' style={styles.leftNav}>
            <p>
              Home 
            </p>
          </Link>
          &nbsp;
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
    backgroundColor: '#424242',
    position: 'relative',
    border: 'none'
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

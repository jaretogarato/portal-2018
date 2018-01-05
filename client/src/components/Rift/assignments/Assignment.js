import React, { Component } from 'react';
import { Container, Header, Icon, Grid, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Assignment extends Component {

  render() {
    return (
      <Container>
        <Header as="h1" textAlign='center' style={styles.pageTitle}>Single Assignment</Header>
      </Container>
    )
  }
}

const styles = {
  pageTitle: {
    paddingTop: '2%',
  },
}

export default connect()(Assignment);

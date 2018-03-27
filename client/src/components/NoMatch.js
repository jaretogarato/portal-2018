import React from 'react';
import { Header, Message, Divider, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import geoBg from '../assets/images/geoBg.jpg';
import styled from 'styled-components';

const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${geoBg});
  width: 100%;
  height: 800px;
`
const Margin = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;
`
class NoMatch extends React.Component {
  render() {
    return (
      <Content>
        <Margin>
          <Header as="h1" textAlign="center">
          <Link to='/'> Return Home </Link>    
          </Header>
        </Margin>
       <Container>
       <Message
          size="massive"
          color="violet"
          error
          header='404: You Entered An Unknown Portal. You Have Been Sucked Into The Abyss.'
          list={[
          'Please Double Check The URL ',
          'Click the Link Above To Return To A Friendlier Portal',
            ]}
          />
        </Container>
      </Content>
    );
  }
}

export default NoMatch;
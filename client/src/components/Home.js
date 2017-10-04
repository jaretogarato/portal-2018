import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import FullHeader from 'lyef-full-header';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import Lorem from 'react-lorem-component';
import ImgHero from '../assets/images/hero-image.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={styles.headerSqueezed}>
          <FullHeader
            title="DevPoint"
            subtitle="portal"
            bgColor="#EBE9EB"
            textColor="#3299BB"
            font="Lobster"
            bgImg={ImgHero}
          /> 
        </div>
        <Container>
          <Grid>
            <Grid.Column width={3}>
              <Header as='h2'>Left Column</Header>
              <Header as='h4'>3 Wide</Header>
              <Segment>
                <Lorem />
              </Segment>
            </Grid.Column>
            <Grid.Column width={9}>
              <Header as='h2'>Middle Column</Header>
              <Header as='h4'>9 Wide</Header>
              <Header as='h1' textAlign='center'>Home Component</Header>
              <Segment>
                <Lorem />
                {/* <OurMainViewComponent course="fall_2017" role="student" page="2" />  */}
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h2'>Right Column</Header>
              <Header as='h4'>4 Wide</Header>
              <Segment>
                <Lorem />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

const styles = {
  headerSqueezed: {
    maxHeight: '250px',
    overflow: 'hidden',
  },
}

export default Home;









// class Home extends Component {
//   render() {
//     return (
//
//     );
//   }
// }
//
// export default Home;

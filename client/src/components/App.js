import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import FullHeader from 'lyef-full-header';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import Lorem from 'react-lorem-component';
import ImgHero from '../assets/images/hero-image.png';

class App extends Component {
  render() {
    return (
      <div>
        <FetchUser>
          <NavBar />
          <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    );
  }
}

export default App;

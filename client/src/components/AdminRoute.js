import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ isAdmin, component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    isAdmin ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
);

const mapStateToProps = (state) => {
  return { isAdmin: state.user.is_admin };
};

export default connect(mapStateToProps)(AdminRoute);
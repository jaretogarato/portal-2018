import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

class ProtectedRoute extends React.Component {

  verifyAdmin = () => {
    const { adminOnly, isAdmin} = this.props;
    if(adminOnly != null){
      if(adminOnly === true && isAdmin !== true){
        return false;
      }else{
        return true;
      }
    }else{
      return true;
    }
  }

  unpermitted = () => {
    return (
      <Redirect to={{
        pathname: '/login',
        state: { from: this.props.location }
      }}/>
    );
  }

  checkYourPrivilege = () => {
    const { courseId, enrollments, requiredRoles, requiredSubRoles } = this.props;
    if(requiredRoles != null){
      if(enrollments.length === 0){
        return false;
      }
      let enrollment = enrollments.find(e => e.course_id === courseId);
      if(enrollment){
        if(!requiredRoles.includes(enrollment.role)){
          return false;
        }else{
          if(requiredSubRoles != null && !requiredSubRoles.includes(enrollment.sub_role)){
            return false;
          }
        }
        return true;
      }else{
        return false;
      }
    }else{
      return true;
    }
  }

  render() {
    if(this.props.loggedIn){
      if(this.verifyAdmin() && this.checkYourPrivilege()){
        return(
          <Route {...this.props}/>
        )
      }else{
        return this.unpermitted();
      }
    }else{
      return this.unpermitted();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.user.is_admin,
    loggedIn: state.user.id,
    courseId: state.courseId,
    enrollments: state.user.enrollments
  }
}

export default connect(mapStateToProps)(ProtectedRoute);

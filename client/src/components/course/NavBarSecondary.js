import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class NavBarSecondary extends React.Component {

  leftNavs = () => {
    const { course, term, year } = this.props;

    if( course != null ){  
      return (
        <Breadcrumb style={styles.navbarSecondary} position='left'>
          <Breadcrumb.Section>
            <Link to='/user_profile'>
              {this.props.user.first_name}
            </Link>
            <Breadcrumb.Divider icon='right angle' />
            <Link to='/course_view'>
              { course.course_type }  {course.term}  {course.year}
            </Link>
          </Breadcrumb.Section>
        </Breadcrumb>
      );
    }else{
      return null;
    }
  }

  render() {
    return (
      <div>
        <Menu style={styles.navbarSecondary} pointing secondary>
          { this.leftNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  navbarSecondary: {
    background: 'linear-gradient(#e0dfde, #cccbca)',
    border: 'none',
    padding: '.5%',
  }
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    course: state.userCourses[0]
  }
};

export default withRouter(connect(mapStateToProps)(NavBarSecondary));
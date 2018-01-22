import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

const adminLinks = [
  'Home', 'Announcements', 'People', 'Attendance', 'Sections',
  'Quizzes', 'Lectures', 'Assignments', 'Wiki', 'Settings'
];

const studentLinks = [
  'Home', 'Announcements', 'People', 'Sections', 'Wiki'
];

const CourseSideNav = ({ user, match: { params: { id }}}) => {
  if (user.is_admin)
    return adminLinks.map( (link, i) =>
      <Link
        key={i}
        to={`/courses/${id}${link === 'Home' ? '' : `/${link.toLowerCase()}`}`}
      >
        <Menu fluid basic vertical style={styles.sideNav}>
          <Menu.Item>
            {link}
          </Menu.Item>
        </Menu>
      </Link>
    )
  else
    return studentLinks.map( (link, i) =>
      <Link
        key={i}
        to={`/courses/${id}${link === 'Home' ? '' : `/${link.toLowerCase()}`}`}
      >
        <Menu fluid vertical style={styles.sideNav}>
          <Menu.Item 
            as='div'
            name={link}
            active={activeItem === `${link}`}
            onClick={handleItemClick}
            >
          </Menu.Item>
        </Menu>
      </Link>
    )
}

const styles = {
  sideNav: {
    minWidth: '15rem',
    border: '0px',
    boxShadow: '0px',
    borderRadius: '0px',
  },

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(CourseSideNav)

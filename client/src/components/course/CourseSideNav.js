import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class CourseSideNav extends React.Component {

  render() {
    const links = [
      'Home', 'Announcements', 'People', 'Attendance', 'Sections',
      'Quizzes', 'Lectures', 'Assignments', 'Wiki', 'Settings'
    ];
    const { match: { params: { id }}} = this.props;
    return links.map( (link, i) =>
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
  }
}

const styles = {
  sideNav: {
    minWidth: '15rem',
    border: '0px',
    boxShadow: '0px',
    borderRadius: '0px',
  },
}

export default CourseSideNav
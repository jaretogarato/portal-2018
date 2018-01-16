import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class CourseSideNav extends React.Component {

  render() {
    const links = [
      'Home', 'People', 'Attendance', 'Sections',
      'Quizzes', 'Lectures', 'Assignments', 'Wiki', 'Settings'
    ];
    const { match: { params: { id }}} = this.props;
    return links.map( (link, i) =>
      <Link
        key={i}
        to={`/courses/${id}${link === 'Home' ? '' : `/${link.toLowerCase()}`}`}
      >
        <Menu fluid vertical>
          <Menu.Item>
            {link}
          </Menu.Item>
        </Menu>
      </Link>
    )
  }
}



export default CourseSideNav

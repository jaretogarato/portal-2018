import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class CourseSideNav extends React.Component {

  render() {
    const links = ['People', 'Attendance', 'Sections'];
    const { match: { params: { id }}} = this.props;
    return links.map( (link, i) => 
      <Link key={i} to={`/courses/${id}/${link.toLowerCase()}`}>
        <Menu fluid vertical>
          <Menu.Item textAlign='center'>
            {link}
          </Menu.Item>
        </Menu>
      </Link>
    )
  }
}



export default CourseSideNav

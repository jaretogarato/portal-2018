import React from 'react';
import { Link } from 'react-router-dom';

class CourseSideNav extends React.Component {

  render() {
    const links = ['people', 'attendance', 'grades'];
    const { match: { params: { id }}} = this.props;
    return links.map( (link, i) => 
      <Link key={i} to={`/courses/${id}/${link}`}> {link} </Link>
    )
  }
}

export default CourseSideNav

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';


class CourseSideNav extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { user, match: { params: { id }}} = this.props;
    const { activeItem } = this.state;
    const adminLinks = [
      'Home', 'Announcements', 'People', 'Attendance', 'Sections',
      'Quizzes', 'Lectures', 'Assignments', 'Wiki', 'Settings'
    ];

    const studentLinks = [
      'Home', 'Announcements', 'People', 'Sections', 'Wiki'
    ];

  if (user.is_admin)
    return adminLinks.map( (link, i) =>
      <Link
        key={i}
        to={`/courses/${id}${link === 'Home' ? '' : `/${link.toLowerCase()}`}`}
      >
        <Menu fluid vertical style={styles.sideNav}>
          <Menu.Item
            name={link}
            active={activeItem === `${link}`}
            onClick={this.handleItemClick}>
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
            name={link}
            active={activeItem === `${link}`}
            onClick={this.handleItemClick}
            >
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
    fontSize:'1.1em'
  },

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(CourseSideNav)

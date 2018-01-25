import React from 'react';
import GroupsHome from './GroupsHome';
import PeopleHome from './PeopleHome';
import { connect } from 'react-redux';
import { isStudent } from '../../utils/permissions';
import { Tab } from 'semantic-ui-react';

class People extends React.Component {
  courseId = this.props.match.params.id

  renderView = () => {
    const { permissions } = this.props;
    const panes = [
      { key: 'people', isStudent: true, menuItem: {content: 'People', fontSize: 'medium'}, render: () => <PeopleHome courseId={this.courseId} /> },
      { key: 'groups', menuItem: {content: 'Groups', fontSize: 'medium'}, render: () => <GroupsHome courseId={this.courseId} /> },
    ]
    return isStudent(permissions) ? panes.filter( pane => pane.isStudent ) : panes;
  }

  render() {
    return <Tab onTabChange={this.tabChange} panes={this.renderView()} />
  }
}

const mapStateToProps = (state) => {
  return { permissions: state.permissions }
}

export default connect(mapStateToProps)(People);

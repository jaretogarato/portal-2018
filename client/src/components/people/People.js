import React from 'react';
import { Tab } from 'semantic-ui-react';
import GroupsHome from './GroupsHome';
import PeopleHome from './PeopleHome'; 


class People extends React.Component {
  courseId = this.props.match.params.id
  panes = [
    { menuItem: 'People', render: () => <PeopleHome courseId={this.courseId} /> },
    { menuItem: 'Groups', render: () => <GroupsHome courseId={this.courseId} /> },
  ]

  render() {
    return <Tab onTabChange={this.tabChange} panes={this.panes} />
  }
}

export default People

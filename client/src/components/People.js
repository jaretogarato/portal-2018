import React from 'react';
import { Tab } from 'semantic-ui-react';


class People extends React.Component {
  panes = [
    { menuItem: 'People', render: () => <div>People</div> },
    { menuItem: 'Groups', render: () => <div>Groups</div> },
  ]

  render() {
    return <Tab panes={this.panes} />
  }
}

export default People

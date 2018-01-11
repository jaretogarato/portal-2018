import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

class Badges extends React.Component {
  state = { badges: [] }

  render() {
    const badges = [
      {
        header: 'Badge 1',
        meta: 'Team Player',
      },
      {
        header: 'Badge 2',
        meta: 'Leadership',
      },
      {
        header: 'Badge 3',
        meta: 'Coding Aptitude',
      },
      {
        header: 'Badge 4',
        meta: '95% attendance',
      },
    ]
    
    return (
      <Card>
        <Card.Content>
         <Icon name='star' size='huge'/>
        </Card.Content>
        <Card.Content description={description} />
      </Card>
    )
  }

}


export default Badges;
import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import attendance from '../../assets/badge_icons/attendance.png';
import coder from '../../assets/badge_icons/coder.png';
import homework from '../../assets/badge_icons/homework.png';
import leader from '../../assets/badge_icons/leader.png';
import teamwork from '../../assets/badge_icons/teamwork.png';

const icons = {
  attendance,
  coder,
  homework,
  leader,
  teamwork
}

const Badge = ({ badge: { user_badge_id, badge }, deleteBadge }) => (
  <Card>
    <Card.Content>
      <Image
        src={icons[badge.icon]}
        size='mini'
      />
      <Card.Header>
        {badge.title}
      </Card.Header>
      <Card.Meta>
        {badge.description}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Button basic color='blue' onClick={ () => deleteBadge(user_badge_id) }>Delete Badge</Button>
    </Card.Content>
  </Card>
)

export default Badge;

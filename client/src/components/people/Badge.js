import React from 'react';
import { Card, Image, Button, Popup } from 'semantic-ui-react';
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

const Badge = ({ badgeId, badge, deleteBadge }) => (
  <Popup
    trigger={
      <Card>
        <Card.Content textAlign='center'>
          <Image
            src={icons[badge.icon]}
            size='mini'
          />
        </Card.Content>
        <Card.Content extra>
          <Button basic color='blue' onClick={ () => deleteBadge(badgeId) }>Delete Badge</Button>
        </Card.Content>
      </Card>
    }
    content={badge.description}
  />
)

export default Badge;

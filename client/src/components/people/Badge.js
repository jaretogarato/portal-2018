import React from 'react';
import { Card, Image, Button, Popup, Segment, Header, Icon } from 'semantic-ui-react';
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

const styles = {
  pointer: { cursor: 'pointer' }
}

const Badge = ({ badgeId, badge, deleteBadge }) => {
  return (
    <div>
      <Icon name='x' onClick={ () => deleteBadge(badgeId)} style={styles.pointer}/>
      <Popup
        trigger={
            <Segment circular>
              <Image src={icons[badge.icon]} size='mini' />
            </Segment>
        }
        content={badge.description}
      />
    </div>
  )
}

export default Badge;

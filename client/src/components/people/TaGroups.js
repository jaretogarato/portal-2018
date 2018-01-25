import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Item,
  Segment,
} from 'semantic-ui-react';

import { PageSubTitle } from '../../styles/styledComponents';


const TaGroups = ({ course, groups, sections, user }) => {

  const displayGroupMembers = (group) => {
    return group.map( member => {
      const fullName = `${member.first_name} ${member.last_name}`
      return (
        <Item.Group key={member.id}>
          <Item.Content>
            <Item.Image size='tiny' src={member.image} />
          </Item.Content>
          <Item.Content>
            { fullName }
          </Item.Content>
        </Item.Group>
      );
    });
  }

  const taFilter = () => {
    const allGroups = [].concat(...groups);
    return allGroups.filter( group => group.some( member => member.id === user.id ));
  }

  const displayTaGroups = () => {
    let sectionCount = 0;
    return taFilter().map( (group, i) => {
      sectionCount++
      return (
        <Grid
          columns='equal'
          celled
          centered
          key={i}
        >
          <PageSubTitle>Week {sectionCount}</PageSubTitle>
          { displayGroupMembers(group) }
        </Grid>
      );
    });
  }

  return (
    <Segment>
      { displayTaGroups() }
    </Segment>
  )

}

const mapStateToProps = (state) => {
  return {
           course: state.course,
           groups: state.groups,
           sections: state.sections,
           user: state.user, 
         }
}

export default connect(mapStateToProps)(TaGroups);

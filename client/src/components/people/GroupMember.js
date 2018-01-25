import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Item,
  Segment,
} from 'semantic-ui-react';

import { PageSubTitle } from '../../styles/styledComponents';


class GroupMember extends React.Component {
  state = { active: false }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.editing !== this.props.editing)
      this.setState({ active: false });
  }

  toggleActiveMember = (member) => {
    const { addGroupMemberToEdit, pair } = this.props;
    const { active } = this.state;
    pair.length === 2 ? this.setState({ active: false }) : this.setState({ active: !active })
    addGroupMemberToEdit(member)
  }

  displayTA = (member) => {
    return (
      <Segment>
        <PageSubTitle>
          <strong>TA: {member.first_name} {member.last_name}</strong>
        </PageSubTitle>
        { member.email }
      </Segment>
    );
  }

  render() {
    const { course, editing, member } = this.props;
    const { active } = this.state;
    const fullName = `${member.first_name} ${member.last_name}`
    return (
      <Item.Group
        onClick={() => this.toggleActiveMember(member)}
        style={ editing && active ? { border: 'dashed 2px black' } : {} }
      >
        <Item.Content>
          <Item.Image size='tiny' src={member.image} />
        </Item.Content>
        <Item.Content>
          { member.role === 'ta' ?
            this.displayTA(member) :
            <Link to={`/courses/${course.id}/user/${member.id}`}>
              {fullName}
            </Link>
          }
        </Item.Content>
      </Item.Group>
    );
  }

}

const mapStateToProps = (state) => {
  return { course: state.course,}
}

export default connect(mapStateToProps)(GroupMember);

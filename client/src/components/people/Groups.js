import React from 'react';
import GroupMember from './GroupMember';
import { updateGroup } from '../../actions/groups';
import { connect } from 'react-redux';
import { isAdmin } from '../../utils/permissions';
import {
  Accordion,
  Button,
  Grid,
  Icon,
  Popup,
  Segment,
} from 'semantic-ui-react';


class Groups extends React.Component {
  state = { activeIndex: 0, editing: false, pair: [] }

  setGroupsLoaded = () => this.setState({ groupsLoaded: true });

  addGroupMemberToEdit = (member) => {
    const { editing, pair } = this.state;
    if ( editing && pair.length <= 2) {
      if (pair.length > 0 && this.checkDuplicate(member, pair))
        this.setState({ pair: pair.filter( p => p.id !== member.id ) })
      else
        pair.length !== 2 && this.setState({ pair: [member, ...pair] });
    }
  }

  checkDuplicate = (member, pair) => {
    return pair.some( p => p.id === member.id );
  }

  handleSwap = () => {
    const { pair } = this.state;
    const { course, dispatch } = this.props;
    this.setState([ pair[0].ta_group_id, pair[1].ta_group_id ] =
                  [ pair[1].ta_group_id, pair[0].ta_group_id ]);
    dispatch(updateGroup(course, pair[0], pair[1]));
    this.clearEdit();
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex });
  }

  clearEdit = () => {
    const { editing } = this.state;
    this.setState({ pair: [], editing: !editing });
  }

  toggleEditButton = () => {
    const { editing } = this.state;
    if ( editing )
      return ( <Button basic onClick={ () => this.clearEdit() }>Cancel Editing</Button> )
    else
      return (
        <Popup
          trigger={<Button basic onClick={ () => this.setState({editing: !editing}) }>Edit Groups</Button>}
          content='Select two users to swap places!'
        />
      )
  }

  displayGroupsBySections = () => {
    const { pair } = this.state;
    const { permissions } = this.props;
    return this.props.sections.map( s => (
      <Accordion key={s.id} fluid styled>
        <Accordion.Title
          active={this.state.activeIndex === s.id}
          index={s.id}
          onClick={this.handleClick}
          style={{ textAlign: 'left' }}
        >
          <Icon name='dropdown' />
          { s.title }
        </Accordion.Title>
        <Accordion.Content
          active={this.state.activeIndex === s.id}
          style={{ textAlign: 'left' }}
        >
          { isAdmin(permissions) && this.toggleEditButton() }
          { pair.length === 2 &&
            <Button
              basic
              onClick={ () => this.handleSwap() }
            >
              Swap!
            </Button> }
          { this.displayGroups(s) }
        </Accordion.Content>
      </Accordion>
    ))
  }

  sectionGroups = (s) => {
    const { groups, sections } = this.props;
    return [].concat(...groups.filter(group => groups.indexOf(group) === sections.indexOf(s)));
  }

  displayGroups = (s) => {
    return (this.sectionGroups(s)).map( (memberships, i) => {
      return (
        <Grid
          columns='equal'
          celled
          centered
          key={i}
        >
          { this.displayGroupMembers(memberships) }
        </Grid>
      );
    });
  }

  displayGroupMembers = (memberships) => {
    return memberships.map( (member) => {
      return (
        <GroupMember
          key={member.id}
          editing={this.state.editing}
          pair={this.state.pair}
          member={member}
          addGroupMemberToEdit={this.addGroupMemberToEdit}
        />
      );
    });
  }

  render() {
    return (
      <Segment basic>
        { this.displayGroupsBySections() }
      </Segment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
           course: state.course,
           groups: state.groups,
           sections: state.sections,
           permissions: state.permissions,
         }
}

export default connect(mapStateToProps)(Groups);

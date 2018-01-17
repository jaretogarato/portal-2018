import React from 'react';
import GroupForm from './GroupForm';
import TaGroups from './TaGroups';
import { connect } from 'react-redux';
import { getGroups } from '../../actions/groups';
import { getSections } from '../../actions/sections';
import { isAdmin } from '../../utils/permissions'
import { Link } from 'react-router-dom';
import {
  Accordion,
  Button,
  Grid,
  Header,
  Icon,
  Item,
  Segment,
} from 'semantic-ui-react';

class GroupsHome extends React.Component {
  state = { sectionsLoaded: false, groupsLoaded: false, activeIndex: 0, view: 'all' }

  setGroupsLoaded = () => this.setState({ groupsLoaded: true });
  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });

  componentDidMount() {
    const { course, dispatch } = this.props;
    dispatch(getGroups(course.id, this.setGroupsLoaded));
    dispatch(getSections(course.id, this.setSectionsLoaded));
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex });
  }

  displayGroupsBySections = () => {
    return this.props.sections.map( s => (
      <Accordion key={s.id} fluid styled>
        <Accordion.Title
          active={this.state.activeIndex === s.id}
          index={s.id}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          { s.title }
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === s.id}>
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
    const { course } = this.props;
    return memberships.map( (member) => {
      const fullName = `${member.first_name} ${member.last_name}`
      return (
        <Item.Group key={member.id}>
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
    });
  }

  displayTA = (member) => {
    return (
      <Segment>
        <Header as='h3'>
          <strong>TA: {member.first_name} {member.last_name}</strong>
        </Header>
        { member.email }
      </Segment>
    );
  }

  getView = () => {
    const { permissions } = this.props;
    const allGroups = { name: 'All Groups', selector: 'all', icon: 'users' }
    const adminView = [ allGroups, { name: 'Generate Groups', selector: 'generateGroups', icon: 'plus' } ]
    const taView = [ allGroups, { name: 'View My Groups', selector: 'taGroups', icon: 'eye'} ]
    return isAdmin(permissions) ? adminView : taView
  }

  groupSelectors = () => {
    return this.getView().map( button =>
      <Button
        key={button.name}
        labelPosition="left"
        icon
        onClick={ () => this.setState({ view: button.selector }) }
      >
        <Icon name={button.icon} />
        { button.name }
      </Button>
    )
  }

  groupsView = () => {
    const { groupsLoaded } = this.state;
    switch (this.state.view) {
      case 'generateGroups':
        return <GroupForm />
      case 'taGroups':
        return <TaGroups />
      default:
        return (
          <Segment basic textAlign='center'>
            { groupsLoaded ? this.displayGroupsBySections() : null }
          </Segment>
        )
    }
  }

  render() {
    return (
      <Segment>
        { this.groupSelectors() }
        { this.groupsView() }
      </Segment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
           sections: state.sections,
           course: state.course,
           groups: state.groups,
           permissions: state.permissions,
         }
}

export default connect(mapStateToProps)(GroupsHome);

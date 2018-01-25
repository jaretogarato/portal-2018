import React from 'react';
import GroupForm from './GroupForm';
import Groups from './Groups';
import TaGroups from './TaGroups';
import { connect } from 'react-redux';
import { getGroups } from '../../actions/groups';
import { getSections } from '../../actions/sections';
import { isAdmin } from '../../utils/permissions';
import {
  Button,
  Icon,
  Segment,
} from 'semantic-ui-react';


class GroupsHome extends React.Component {
  state = { sectionsLoaded: false, groupsLoaded: false, view: 'all' }

  setGroupsLoaded = () => this.setState({ groupsLoaded: true });
  setSectionsLoaded = () => this.setState({ sectionsLoaded: true });

  componentDidMount() {
    const { course, dispatch } = this.props;
    dispatch(getGroups(course.id, this.setGroupsLoaded));
    dispatch(getSections(course.id, this.setSectionsLoaded));
  }

  getView = () => {
    const { permissions } = this.props;
    const allGroups = { name: 'All Groups', selector: 'all', icon: 'users' }
    const taView = [ allGroups, { name: 'View My Groups', selector: 'taGroups', icon: 'eye'} ]
    const adminView = [ allGroups, { name: 'Generate Groups', selector: 'generateGroups', icon: 'plus' } ]
    return isAdmin(permissions) ? adminView : taView
  }

  groupSelectors = () => {
    return this.getView().map( button =>
      <Button
        basic
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
            { groupsLoaded ?
              <Groups /> : null }
          </Segment>
        )
    }
  }

  render() {
    return (
      <Segment basic>
        { this.groupSelectors() }
        { this.groupsView() }
      </Segment>
    )
  }

}

const mapStateToProps = (state) => {
  return { course: state.course, permissions: state.permissions }
}

export default connect(mapStateToProps)(GroupsHome);

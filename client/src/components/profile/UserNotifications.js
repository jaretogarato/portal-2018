import React from 'react';
import {
  Grid,
  Segment,
  Table,
  Header,
  Icon,
  Popup,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const CellInfo = styled(Table.HeaderCell)`
  width: 550px !important;
`
const CellSelection = styled(Table.Cell)`
  text-align: center !important;
`


class UserNotifications extends React.Component {
  state = {
    dueDate: ''
  }

  selectionSelect = () => {
    return(
      <Grid>
        <Popup
          trigger={<Icon name='checkmark'/>}
          content='Notify me right away'
        />
        <Popup
          trigger={<Icon name='time'/>}
          content='Send daily summary'
        />
        <Popup
          trigger={<Icon name='calendar'/>}
          content='Send weekly summary'
        />
        <Popup
          trigger={<Icon name='close'/>}
          content='Do not send'
        />
      </Grid>
    )
  }

  tableRowCreate = () => {
    const tableData = [
      { name: 'Due Date', email: this.selectionSelect() , phone:  this.selectionSelect() },
      { name: 'Grading Policies', email: this.selectionSelect() , phone:  this.selectionSelect() },
      { name: 'Course Content', email: this.selectionSelect() , phone:  this.selectionSelect() },
      { name: 'Announcement', email: this.selectionSelect() , phone:  this.selectionSelect() },
      { name: 'Notes', email: this.selectionSelect() , phone:  this.selectionSelect() },
      { name: '', email: this.selectionSelect() , phone:  this.selectionSelect() },
    ]
    return tableData.map( data => {
      console.log(data)
      return(
        <Table.Row>
          <Table.Cell>{data.name}</Table.Cell>
          <Table.Cell as={CellSelection}>{data.email}</Table.Cell>
          <Table.Cell as={CellSelection}>{data.phone}</Table.Cell>
        </Table.Row>
      )
    })
  }


  render () {
    const { user } = this.props
    return (
      <Segment basic className='container'>
        <Header as='h2'>Notification Preferences</Header>
        <Table celled fixed singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell as={CellInfo}>Course</Table.HeaderCell>
              <Table.HeaderCell as={CellSelection}>
                <Header as='h2'>Email Address</Header>
                {user.email}
              </Table.HeaderCell>
              <Table.HeaderCell as={CellSelection}>
                <Header as='h2'>Phone Number</Header>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          { this.tableRowCreate() }


          <Table.Body>

          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserNotifications);

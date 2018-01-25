import React from 'react';
import {
  Header,
  Segment,
  Table,
  Dropdown,
  TextArea,
  Checkbox,
  Form,
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import styled from 'styled-components';

const TableStyle = styled(Table)`
  width: 45% !important;
`
const TextAreaStyle = styled(TextArea)`
  height: 125px !important;
`
const RightTd = styled(Table.Cell)`
  width: 300px !important;
  overflow: visible !important;
`

const timeZones =[
  {key: 1, text: "America/Ensenada", value: 'this dude' },
  {key: 2, text: "America/Los_Angeles"},
  {key: 3, text: "America/Chihuahua"},
  {key: 4, text: "America/Denver"},
  {key: 5, text: "America/Belize"},
  {key: 6, text: "America/Cancun"},
  {key: 7, text: "America/Chicago"},
  {key: 8, text: "Chile/EasterIsland"},
  {key: 9, text: "America/Bogota"},
  {key: 10,  text: "America/Havana"},
  {key: 11,  text: "America/New_York"},
]

class CourseSettings extends React.Component {

  render() {
    const { course } = this.props
    return(
      <Segment basic>
        <Header as='h2'>Course Settings</Header>
        <Table fixed basic='very' as={TableStyle}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name: </Table.Cell>
              <Table.Cell as={RightTd} textAlign='left'>{course.course_type}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Term: </Table.Cell>
              <Table.Cell as={RightTd} textAlign='left'>{course.term}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Year: </Table.Cell>
              <Table.Cell as={RightTd} >{course.year}</Table.Cell>
            </Table.Row>

            <Form>
              <Table.Row>
                <Table.Cell>Time Zone: </Table.Cell>
                <Table.Cell as={RightTd}>
                  <Dropdown placeholder='America/Denver' fluid selection options={timeZones} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Starts: </Table.Cell>
                <Table.Cell as={RightTd}>
                  <input type="date"/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Ends: </Table.Cell>
                <Table.Cell as={RightTd}>
                  <input type="date"/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Visiblity: </Table.Cell>
                <Table.Cell as={RightTd}>
                  <Checkbox label='Make the syllabus for this course publicly visible' />
                  <Checkbox label='Restrict students from viewing course after end date' />
                  <Checkbox label='Restrict students from viewing course before start date' />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Description: </Table.Cell>
                <Table.Cell  as={RightTd}>
                  <TextArea as={TextAreaStyle} placeholder='Course Description' />
                </Table.Cell>
              </Table.Row>
            </Form>

          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { course: state.course }
}

export default connect(mapStateToProps)(CourseSettings);

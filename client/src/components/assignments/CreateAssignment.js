import React, { Component } from 'react';
import {
  Segment,
  Form,
  Button,
  Divider,
} from 'semantic-ui-react';
import { addAssignment } from '../../actions/assignments';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { PageTitle } from '../../styles/styledComponents';
import DraftEditor from '../editor/DraftEditor';
import { stateFromHTML } from 'draft-js-import-html';


const submissionOptions = [
  { key: '1', text: 'No Submission', value: 'No Submission' },
  { key: '2', text: 'Online', value: 'Online' },
  { key: '3', text: 'On Paper', value: 'On Paper' },
  { key: '4', text: 'External', value: 'External' },
]

class CreateAssignment extends Component {
  state = {
    title: '', submission_type: '', points: 0,
    due_date: '', created_at: moment().format('LL'),
    published: false, content: '', group_assignment: false
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  handlePointsChange = (e) => {
    if (e.target.value > 0 ) {
    const { value } = e.target;
    this.setState({ points: value })
    } else {
      this.setState({ points: 0 })
    }
  }

  contentChange = (content) => {
    this.setState({ content })
  }

  handlePublishedClick = (e) => {
    const { published } = this.state;
    this.setState({ published: !published })
  }

  handleGroupClick = (e) => {
    const { group_assignment } = this.state;
    this.setState({ group_assignment: !group_assignment })
  }

  handleSubmit = (e) => {
    const { history, dispatch } = this.props
    const {
      title, submission_type, points,
      created_at, due_date, published,
      content, group_assignment
    } = this.state
    e.preventDefault();

    let assignment = {
      title, submission_type,
      points, due_date, published,
      created_at, content, group_assignment
    }
    dispatch(addAssignment(assignment, history))
  }

  render() {
    const {
      title, published, group_assignment, content, points
    } = this.state

    return (
      <Segment basic>
        <PageTitle style={ styles.pageTitle }>
          Create Assignment
        </PageTitle>
        <Form onSubmit={ this.handleSubmit } style={ styles.form }>
          <Form.Group widths='equal'>
            <Form.Input
              label='Title'
              name='title'
              value={ title }
              width={ 9 }
              placeholder='Assignment Title'
              autoFocus={true}
              required
              onChange={ this.handleChange }>
            </Form.Input>
            <Form.Select
              label='Submission Options'
              name= "submission_type"

              options={ submissionOptions }
              placeholder='Submission Options'
              required
              width={ 2 }
              onChange={(e, data) => this.setState({ submission_type: data.value })}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              name='due_date'
              label='Due Date'
              type='date'
              width={ 9 }
              onChange={ this.handleChange }
            >
            </Form.Input>
            <Form.Input
              label='Points'
              placeholder='Points'
              value={ points }
              name="points"
              type='number'
              width={ 2 }
              onChange={ this.handlePointsChange }
              required
            />
          </Form.Group>
          <DraftEditor dValue={stateFromHTML(content)} contentChange={this.contentChange} />
          <Divider />
          <Form.Checkbox
            name='published'
            label='Published?'
            value={ published }
            onClick={ this.handlePublishedClick }
            onChange={ this.handleChange }
          />
          <Divider />
          <Form.Checkbox
            name='group_assignment'
            label="Group Assignment?"
            value={ group_assignment }
            onClick={ this.handleGroupClick }
            onChange={ this.handleChange }
          />
          <Form.Group>
            <Button basic type='submit'>Create</Button>
            <Link to={'./assignments'}>
              <Button basic onClick={ this.props.history.goBack }>Cancel</Button>
            </Link>
          </Form.Group>
        </Form>
      </Segment>
    )
  }
}

const styles = {
  form: {
    paddingTop: '2%',
  },
  pageTitle: {
    paddingTop: '2%',
  },
  textArea: {
    minHeight: '150px',
  },
}

export default connect()(CreateAssignment);

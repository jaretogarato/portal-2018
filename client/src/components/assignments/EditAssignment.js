import React, { Component } from 'react';
import {
  Segment,
  Form,
  Button,
  Divider,
} from 'semantic-ui-react';
import { updateAssignment, getAssignment } from '../../actions/assignment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styledComponents';
import DraftEditor from '../editor/DraftEditor';
import { stateFromHTML } from 'draft-js-import-html';
import { EditorState } from 'draft-js';


const submissionOptions = [
  { key: '1', text: 'No Submission', value: 'No Submission' },
  { key: '2', text: 'Online', value: 'Online' },
  { key: '3', text: 'On Paper', value: 'On Paper' },
  { key: '4', text: 'External', value: 'External' },
]

class EditAssignment extends Component {
  state = {
    title: '', submission_type: '', points: 0,
    due_date: '', published: false,
    content: '', group_assignment: false
  }

  checkLoaded = () => {
    if (!this.state.loaded && this.props.quiz && this.props.questions)
    this.setState({ loaded: true })
  }

  componentDidUpdate() {
    this.checkLoaded()
  }

  componentDidMount() {
    const {
      title, id, points, content,
      published, group_assignment,
      submission_type, due_date
    } = this.props.currentAssignment

    this.props.dispatch(getAssignment(id))

    this.setState({
      title, submission_type, points,
      due_date, published, content,
      group_assignment
    })
  }

  handlePublishedClick = (e) => {
    const { published } = this.state;
    this.setState({ published: !published })
  }

  handleGroupClick = (e) => {
    const { group_assignment } = this.state;
    this.setState({ group_assignment: !group_assignment })
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  contentChange = (content) => {
    this.setState({ content })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      title, submission_type, points,
      due_date, published, content,
      group_assignment
    } = this.state

    this.props.dispatch(updateAssignment({
      title, submission_type, points,
      due_date, published, content,
      group_assignment
    }, this.props.currentAssignment.id))

    this.props.toggleEdit();
  }

  handlePublishedClick = (e) => {
    const { published } = this.state;
    // this.setState({ published: !published })
    this.setState({ published: !published })
  }

  handleGroupClick = (e) => {
    const { group_assignment } = this.state;
    // this.setState({ published: !published })
    this.setState({ group_assignment: !group_assignment })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  render() {
    const {
      title, submission_type, points,
      due_date, published, content,
      group_assignment
    } = this.props.currentAssignment
    return (
      <Segment basic>
        <PageTitle style={styles.pageTitle}>
          Edit Assignment
        </PageTitle>
        <Form onSubmit={this.handleSubmit} style={styles.form}>
          <Form.Group widths='equal'>
            <Form.Input
              label='Title'
              name='title'
              defaultValue={title}
              width={9}
              placeholder='Assignment Title'
              autoFocus={true}
              required
              onChange={this.handleChange}>
            </Form.Input>
            <Form.Select
              label='Submission Options'
              name="submission_type"
              defaultValue={submission_type}
              options={submissionOptions}
              placeholder='Submission Options'
              required
              width={2}
              onChange={(e, data) => this.setState({ submission_type: data.value })}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              name='due_date'
              label='Due Date'
              defaultValue={due_date}
              type='date'
              width={9}
              onChange={this.handleChange}
            >
            </Form.Input>
            <Form.Input
              label='Points'
              placeholder='Points'
              name="points"
              type='number'
              width={2}
              defaultValue={points}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <DraftEditor dValue={stateFromHTML(content)} contentChange={this.contentChange} />
          <Divider />
          <Form.Checkbox
            name='published'
            label='Published?'
            defaultValue={ published }
            onChange={this.handlePublishedClick}
          />
          <Divider />
          <Form.Checkbox
            name='group_assignment'
            label="Group Assignment?"
            defaultValue={group_assignment}
            onChange={this.handleGroupClick}
          />
          <Form.Group>
            <Button basic type='submit'>Update</Button>
            <Link to={'./'}>
              <Button>Cancel</Button>
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

const mapStateToProps = (state) => {
  return { currentAssignment: state.singleAssignment }
}

export default connect(mapStateToProps)(EditAssignment);

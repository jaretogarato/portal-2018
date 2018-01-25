import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Item,
  Divider,
} from 'semantic-ui-react';

import { getSections } from '../../actions/sections';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import { PageTitle } from '../../styles/styledComponents';

class JournalEntries extends React.Component {
  state = { 
    section: null, 
    sectionsLoaded: false, 
    title: '', 
    body: '', 
    permission: 'private', 
    entries: [] 
  }

  componentDidMount() {
    let { location: { state } } = this.props;
    let section = null;
    if (state) {
      section = state.section;
      this.getEntries(section);
    }
    this.setState({ section });
  }
  
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.section !== nextProps.section) 
      this.getEntries();
  }

  setSection = (e, {value}) => {
    this.setState({ section: value }, () => this.getEntries() );
  }

  getEntries = () => {
    const { section } = this.state;
    const { course, enrollment, dispatch } = this.props;
    if (enrollment.id && section) {
      axios.get(`/api/courses/${course}/journal_entries?enrollment_id=${enrollment.id}&section_id=${section}`)
        .then( ({ data, headers }) => {
          dispatch(setHeaders(headers));
          this.setState({ entries: data });
        })
        .catch( ({ data, headers }) => {
          dispatch(setHeaders(headers));
          dispatch(setFlash('Error retrieving entries', 'red'));
        });
    }
  }

  showEntries = () => {
    const { entries } = this.state;
    return entries.map( e => {
      const { id, title, body, permission, created_at } = e;
      return (
        <div key={id}>
          <Item.Group>
            <Item>
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>{title}</Item.Header>
                <Item.Meta>
                  Date: {new Date(created_at).toLocaleDateString()} - 
                  Visibility: {permission}
                </Item.Meta>
                <Item.Description>{body}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          <Divider />
        </div>
      )
    });
  }

  loadSections = () => {
    const { dispatch, course } = this.props;
    dispatch(getSections(course, () => {
      this.setState({ sectionsLoaded: true }); 
    }));
  }

  sectionOptions = () => {
    return this.props.sections.map( section => {
      return { key: section.id, value: section.id, text: section.title }
    });
  }

  handleChange = (e, data) => {
    const { name, value } = data;
    this.setState({ [name]: value });
  }
  
  clearForm = () => {
    this.setState({ title: '', body: '', permission: 'private' });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { section, title, body, permission } = this.state; 
    const { dispatch, course, enrollment } = this.props;
    const entry = { section_id: section, permission, title, body, enrollment_id: enrollment.id }
    axios.post(`/api/courses/${course}/journal_entries`, { entry })
      .then( ({ data, headers }) => {
        dispatch(setHeaders(headers));
        this.setState({ 
          entries: [data, ...this.state.entries], 
          title: '', 
          body: '', 
          permission: 'private' 
        })
      })
      .catch( ({ data, headers }) => {
        dispatch(setHeaders(headers));
        dispatch(setFlash('Something went wrong', 'red'));
      });
  }

  render() {
    const { section, sectionsLoaded, title, body, permission } = this.state;
    return (
      <div>
        <PageTitle>Journal Entries</PageTitle>
        { section ?
            <div>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  required
                  name="title"
                  label="Title"
                  value={title}
                  onChange={this.handleChange}
                />
                <Form.TextArea
                  required
                  name="body"
                  label="Body"
                  value={body}
                  onChange={this.handleChange}
                />
                <Form.Group inline>
                  <label>Visibilty</label>
                  { ['Private', 'Public', 'Staff'].map( p =>
                      <Form.Radio 
                        key={p} 
                        label={p}
                        value={p.toLowerCase()} 
                        checked={permission === p.toLowerCase()}
                        name="permission"
                        onChange={this.handleChange}
                      />
                    )
                  }
                </Form.Group>
                <Form.Group inline>
                  <Form.Button basic type="button" onClick={this.clearForm}>Cancel</Form.Button>
                  <Form.Button basic>Add Entry</Form.Button>
                </Form.Group>
              </Form>
						  <Divider />
						  { this.showEntries() }
            </div>
            :
            <div>
              { !sectionsLoaded && this.loadSections() }
              <Form.Select 
                options={this.sectionOptions()} 
                onChange={this.setSection} 
              />
            </div>
         }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let course = parseInt(props.match.params.id, 10);
  let { user, sections } = state;
  let enrollment = user.enrollments.find( e => e.course_id === course )
  return { course, user, enrollment, sections }
}

export default connect(mapStateToProps)(JournalEntries);

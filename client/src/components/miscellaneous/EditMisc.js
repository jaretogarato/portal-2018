import React from 'react';
import {
  Container,
  Form,
  Button,
  Divider,
} from 'semantic-ui-react';
import { updateMiscellaneou, getMiscellaneou } from '../../actions/miscellaneous';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styledComponents';

class EditMisc extends React.Component {
  state = { title: '', content: '' }

  componentDidMount() {
    const { title, content, id } = this.props.currentMisc
    this.props.dispatch(getMiscellaneou(id))
    this.setState({ title, content })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = this.state
    this.props.dispatch(updateMiscellaneou({ title, content }, this.props.currentMisc.id))
  }

  handleChange = (em, { name, value }) => this.setState({ [name]: value })

  render() {
    const { title, content } = this.props.lecture
    return(
      <Container>
        <PageTitle>Update Miscellaneous</PageTitle>
        <Form onSubmit={this.handleSubmit} style={styles.form}>
          <Form.Group widths='equal'>
            <Form.Input
              label='Title'
              name='title'
              defaultValue={title}
              width={9}
              placeholder='Misc Title'
              autoFocus={true}
              required
              onChange={this.handleChange}
            >
            </Form.Input>
          </Form.Group>
          <Form.TextArea
            name='content'
            defaultValue={content}
            style={styles.textArea}
            label='Description'
            labelFontSize='1.3em'
            placeholder='Rift Text Editor Placeholder'
            required
            onChange={this.handleChange}
          />
          <Divider />
          <Form.Checkbox label='Published?' />
          <Divider />
          <Form.Group>
            <Button basic type='submit'>Update</Button>
            <Link to={`./`} >
              <Button basic>Cancel</Button>
            </Link>
          </Form.Group>
        </Form> 
      </Container> 
    )
  }
};

const styles = {
  form: {
    paddingTop: '2%',
  },
  pageTitle: {
    paddingTop: '2%',
  },
  textArea: {
    minHeight: '150px',
    fontSize: '1.3em',
  },
}

const mapStateToProps = (state) => {
  return { currentMisc: state.misc }
}

export default connect(mapStateToProps)(EditMisc);

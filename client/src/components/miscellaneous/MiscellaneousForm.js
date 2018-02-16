import React from 'react';
import {
  Form,
  Button,
  Container,
  Divider,
} from 'semantic-ui-react';
import { addMiscellaneous } from '../../actions/miscellaneous';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RiftEditor  from '../Rift/riftEditor/RiftEditor';
import { PageTitle } from '../../styles/styledComponents';

class MiscellaneousForm extends React.Component {
  state = { title: '', content: '' }

  handleSubmit = (e) => {
    const { history, dispatch } = this.props
    const { title, content } = this.state
    e.preventDefault();
    let misc = { title: title, content: content }
    dispatch(addMiscellaneous(misc, history))
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  riftChange = (rift) => {
    this.setState({ content: rift })
  }

  render() {
    const { title, content } = this.state
    return(
      <Container>
        <PageTitle>Create Miscellaneous Content</PageTitle>
        <Form onSubmit={this.handleSubmit} style={styles.form}>
          <Form.Group widths='equal'>
            <Form.Input
              label='Title'
              name='title'
              value={title}
              width={7}
              placeholder='Misc Title'
              autoFocus={true}
              required
              onChange={this.handleChange}
            />
            <Form.Input
              label='Content'
              name='content'
              value={content}
              width={9}
              placeholder='Content'
              autoFocus={true}
              required
              onChange={this.handleChange}
            />
          </Form.Group>
          <RiftEditor riftChange={this.riftChange} />
          <Divider />
          <Form.Group>
            <Button basic type='submit'>Create</Button>
            <Link to={`./miscellaneous`}>
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
  textArea: {
    minHeight: '150px',
  },
}

export default connect()(MiscellaneousForm);
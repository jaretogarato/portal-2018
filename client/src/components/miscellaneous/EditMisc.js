import React from 'react';
import {
  Segment,
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

  checkLoaded = () => {
    if (!this.state.loaded)
    this.setState({ loaded: true })
  }

  componentDidUpdate() {
    this.checkLoaded()
  }

  componentDidMount() {
    const { title, content, id } = this.props.currentMisc
    this.props.dispatch(getMiscellaneou(id))
    // TODO finish this
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
  },
}

const mapStateToProps = (state) => {
  return { currentMisc: state.misc }
}

export default connect(mapStateToProps)(EditMisc);
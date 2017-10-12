import React, { Component } from 'react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import {
  Header,
  Button,
  Divider,
  Segment,
} from 'semantic-ui-react';
import 'react-quill/dist/quill.snow.css';

class Editor extends Component {
  state = { text: '' }

  handleChange = (value) => {
    this.setState({ text: value });
  }

  render() {
    return (
      <ReactQuill value={this.state.text}
        readOnly={false}
        ref={(el) => { this.reactQuillRef = el }}
        style={styles.editor}
        onChange={this.handleChange}
        formats={Editor.formats}
        modules={Editor.modules}
      />
    )
  }
}

const styles = {
  editor: {
    height: '50vh',
    padding: '15px',
  },
  editorContainer: {
    height: 'auto',
    padding: '25px',
  }
}

Editor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ]
}

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]


export default Editor;
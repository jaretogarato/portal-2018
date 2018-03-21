import React, { Component } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';
import './Style.css';
import BlockStyleControls from './BlockStyles';
import InlineStyleControls from './InlineStyles';
import { stateToHTML } from 'draft-js-export-html';
import CodeUtils from 'draft-js-code';

class DraftEditor extends Component {
    state = {
      editorState: EditorState.createEmpty()
    };

  componentDidMount() {
    const { dValue, name, value } = this.props;
    if (dValue) {
      this.setState({
        editorState: EditorState.createWithContent(dValue)
      })
    }
  }

    focus = () => this.refs.editor.focus();

    onChange = (editorState) => {
      const { dValue } = this.props;
      this.props.contentChange(stateToHTML(this.state.editorState.getCurrentContent()))
      this.setState({ editorState });
    }

    handleKeyCommand = (command) => this._handleKeyCommand(command);
    onTab = (e) => this._onTab(e);
    toggleBlockType = (type) => this._toggleBlockType(type);
    toggleInlineStyle = (style) => this._toggleInlineStyle(style);

  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if ( newState ) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  onTab = (evt) => {
    const { editorState } = this.state;
    if (!CodeUtils.hasSelectionInBlock(editorState)) return 'not-handled';

    this.onChange(CodeUtils.onTab(evt, editorState));
    return 'handled';
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }
  render() {
    const {editorState} = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';

    if (editorState) {
      let contentState = editorState.getCurrentContent();
    }
    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            ref="editor"
            name="question"
            value="{this.state.question}"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

export default DraftEditor;

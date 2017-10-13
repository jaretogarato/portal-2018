import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu} from 'semantic-ui-react';
import { setSection } from '../actions/section';

class SectionSelect extends Component {
  state = {activeSectionIndex: 0}

  componentDidMount(){
    this.props.dispatch({ type: 'SET_SECTION', section: this.state.activeSectionIndex }); // setting up initial section id
    console.log(this.state);
  }

  handleClick = (e) => {
    // this.setState({ activeSectionIndex: e.target.id});
    // this.setState({ activeSectionIndex: data.name });
    // this.setState({ activeSectionIndex: parseInt(e.currentTarget.id) });
    // this.setState({ activeSectionIndex: parseInt(data.id) });
    this.setState({ activeSectionIndex: parseInt(e.currentTarget.id) }, () => {
      console.log('**-- from SectionSelect component --**')
      console.log(this.state);
      console.log(this.state.activeSectionIndex);
      this.props.dispatch(setSection(this.state.activeSectionIndex));
    });

    // debugger;
  }

  render() {
    const { activeSectionIndex } = this.state;
    return(
      <Menu fluid vertical tabular>
        {/* <Menu.Item id='week1' name='week1' active={activeSectionIndex === 'week1'} onClick={this.handleClick}></Menu.Item> */}
        {/* <Menu.Item id='0' name='week1' active={activeSectionIndex === 0} onClick={this.handleClick}></Menu.Item> */}
        {/* <Menu.Item id='0' name='week1' active={activeSectionIndex === 0} onClick={e => this.handleClick(e, 0)}></Menu.Item> */}
        <Menu.Item id='0' name='week1' active={activeSectionIndex === 0} onClick={e => this.handleClick(e)}></Menu.Item>
        <Menu.Item id='1' name='week2' active={activeSectionIndex === 1} onClick={this.handleClick}></Menu.Item>
        <Menu.Item id='2' name='week3' active={activeSectionIndex === 2} onClick={this.handleClick}></Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeSectionIndex: state.activeSectionIndex }
}

export default connect(mapStateToProps)(SectionSelect);

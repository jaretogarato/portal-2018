import React, { Component } from 'react';
import {
   Accordion,
   Menu,
   Segment,
   Grid,
   Icon,
   Container,
  } from 'semantic-ui-react';

class Section extends Component {
  state = { 
    activeItem: 'week1',
}

  handleTabClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem, menuTabs } = this.state;
    return(
      <Menu fluid vertical tabular>
        <Menu.Item name='week1' active={activeItem === 'week1'} onClick={this.handleTabClick}></Menu.Item>
        <Menu.Item name='week2' active={activeItem === 'week2'} onClick={this.handleTabClick}></Menu.Item>
        <Menu.Item name='week3' active={activeItem === 'week3'} onClick={this.handleTabClick}></Menu.Item>
      </Menu>
    )
  }
}

export default Section;


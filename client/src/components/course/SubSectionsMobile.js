import React from 'react';
import { Accordion } from 'semantic-ui-react';

class SubSectionsMobile extends React.Component {
  state = { activeIndexes: [] };

  displaySubSections = () => {
    // return this.props.subSections.map(ss => (

    // )
  }

  handleClick = () => {
    
  }

  render() {
    return(
      <Accordion>
        <Accordion.Title
          // active={this.state.activeIndexes === section.id}
          // index={section.id}
          onClick={this.handleClick}
        >
          { this.props.sectionId }
        </Accordion.Title>
      </Accordion>
    )
  }
}

export default SubSectionsMobile;
import React, { Component } from 'react'
import {
  Rail,
  Header,
  Sticky,
  Segment,
  Grid,
} from 'semantic-ui-react';
import LeftMenu from './LeftMenu';
import Modules from './Modules';

class ModuleMenu extends Component {
  state = { active: true }

  render() {
    const { active } = this.state;
    return(
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment basic>
            <Modules />

            <Rail position='left'>
              <Segment basic>
                <LeftMenu />
              </Segment>
            </Rail>

            <Rail position='right'>
              <Sticky active={active}>
                <Segment>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Phasellus in imperdiet libero, imperdiet congue est. Aenean maximus ipsum at dui fringilla 
                  lobortis at nec urna. Pellentesque aliquam semper metus, a posuere lacus sagittis et. 
                  Aenean feugiat felis odioLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in imperdiet libero, imperdiet c
                  ongue est. Aenean maximus ipsum at dui fringilla lobortis at nec urna. Pellentesque aliquam semper metus, a posuere lacus sagittis et. 
                  Vestibulum pretium gravida mauris. Aenean feugiat 
                  felis odioLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in imperdiet libero, imperdiet congue est. 
                  Aenean maximus ipsum at dui fringilla lobortis at nec urna. Pellentesque aliquam semper metus, a posuere lacus sagittis et. 
                  Vestibulum pretium gravida mauris. Aenean feugiat felis odio
                </Segment>
              </Sticky>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ModuleMenu;
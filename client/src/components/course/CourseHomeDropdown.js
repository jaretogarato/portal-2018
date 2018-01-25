import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { HomeStrings } from '../../assets/strings/homeStrings';


const CourseHomeDropDown = () => (
  <Dropdown 
    placeholder='Explore DevPoint Concepts'
    style={{cursor: 'pointer'}}
    fluid
    selection
    options={HomeStrings.concepts}
  />
)

export default CourseHomeDropDown;
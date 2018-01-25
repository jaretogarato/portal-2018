import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { HomeStrings } from '../../assets/strings/homeStrings'

let coolArray = [{text:"HTML"}, {text:"CSS"}, {text: 'a11y'}, {text:'JavaScript'}, {text: 'Ruby'}, {text: 'Command Line'}, {text: 'Functional Programming'}, {text: 'Real Time Applications'}, {text: 'UI Frameworks'}, {text: 'Ruby'}, {text: 'GIT'}, {text: 'SQL'}, {text: 'jQuery'}, {text: 'OOP'}, {text: 'PWA\'s'}, {text: "Rails"}, {text: "Authentication"}, {text: "Deployment"}, {text: "Testing",}, {text: "QA"}, {text: "AJAX / Fetch / Axios"}, {text: "Performance"}, {text: "Package Publishing"}, {text: "ESNext"}, {text: "ReactJS"}, {text: "Flux"}, {text: "Redux"}, {text: "Webpack"}, {text: "Routing"}, {text: "Native"}, {text: "More..."}]

const CourseHomeDropDown = () => (
  <Dropdown placeholder='Explore DevPoint Concepts' style={{cursor: 'pointer'}} fluid selection options={coolArray} />
)

export default CourseHomeDropDown
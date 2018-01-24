import React from 'react';
import { Container, Header, Segment, Grid, Image, List } from 'semantic-ui-react';
import devpoint from '../../assets/images/devpoint.png'
import { HomeStrings } from '../../assets/strings/homeStrings'
import { PageTitle, PageSubTitle, BoldText } from '../../styles/styledComponents'

const first = HomeStrings.concepts.slice(0, 4)
const second = HomeStrings.concepts.slice(4,8)
const third = HomeStrings.concepts.slice(8,12)
const fourth = HomeStrings.concepts.slice(12,16)
const fifth = HomeStrings.concepts.slice(16,20)
const sixth = HomeStrings.concepts.slice(20,24)
const seventh = HomeStrings.concepts.slice(24,28)
const eighth = HomeStrings.concepts.slice(28,32)

class CourseHome extends React.Component {

  displayConcepts = (input) => {
    return input.map( concept => {
      return (
      <td>{concept}</td>
      )
    })
  }

  render() {
    return(
      <Container>
              <div>
                <Image src={devpoint} alt='devpoint' />
              </div>
              <h3>
                Main Website
              </h3>
              <h5>
                <a href='http://devpointlabs.com' style={{color: 'purple'}}> Main Site </a>
              </h5>
              <h3>
                Student Handbook
              </h3>
              <h5>
                <a href='https://docs.google.com/document/d/1ly9CTnGcYb6Rls-92RpKCR9RHJ1IcvdBSmfy7HZj3NM/edit' style={{color: 'purple'}}> Student Handbook </a>
              </h5>
              <h3>
                Concepts
              </h3>
              <table>
                <tbody>
                  <tr>
                    {this.displayConcepts(first)}
                  </tr>
                  <tr>
                    {this.displayConcepts(second)}
                  </tr>
                  <tr>
                    {this.displayConcepts(third)}
                  </tr>
                  <tr>
                    {this.displayConcepts(fourth)}
                  </tr>
                  <tr>
                    {this.displayConcepts(fifth)}
                  </tr>
                  <tr>
                    {this.displayConcepts(sixth)}
                  </tr>
                  <tr>
                    {this.displayConcepts(seventh)}
                  </tr>
                  <tr>
                    {this.displayConcepts(eighth)}
                  </tr>
                </tbody>
              </table>
              <PageTitle>
                {HomeStrings.whatyouWillLearnHeader}
              </PageTitle>
              <PageSubTitle>
                {HomeStrings.whatyouWillLearnH2}
              </PageSubTitle>
              <PageSubTitle>
                {HomeStrings.whatyouWillLearnH3}
              </PageSubTitle>
      </Container>
  );
}
}
const styles = {



  paragraph1: {
    textAlign: 'center',
    fontSize: '1em',
    color: 'black',
  },
  paragraph2: {
    textAlign: 'left',
    fontSize: '1em',
    color: 'black',
  },
}


export default CourseHome;

import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import devpoint from '../../assets/images/devpoint.png';
import { HomeStrings } from '../../assets/strings/homeStrings';
import {
  PageTitle,
  PageSubTitle,
  ParagraphText,
} from '../../styles/styledComponents';
import CourseHomeDropDown from './CourseHomeDropdown';


class CourseHome extends React.Component {

  displayConcepts = (input) => {
    return input.map( concept => {
      return (
        <td>{ concept }</td>
      );
    });
  }

  displayWhatToLearn = (input) => {
    return input.map ( input => {
      return <li>{input}</li>
    })
  }
  

  render() {
    return(
      <Container>
        <div style={{height: '250px', display: 'flex'}}>
          <Image src={devpoint} alt='devpoint' style={{margin: 'auto', width: '90%'}} />
        </div>
        <h3>Main Website</h3>
        <h5>
          <a href='http://devpointlabs.com' style={{color: 'purple'}}> Main Site </a>
        </h5>
        <h3>Student Handbook</h3>
        <h5>
          <a href='https://docs.google.com/document/d/1ly9CTnGcYb6Rls-92RpKCR9RHJ1IcvdBSmfy7HZj3NM/edit' style={{color: 'purple'}}> Student Handbook </a>
        </h5>
        <h3>Concepts</h3>
        <CourseHomeDropDown stateOptions={HomeStrings.concepts} />
        <PageTitle>
          { HomeStrings.whatyouWillLearnHeader }
        </PageTitle>
        <ParagraphText>
          { HomeStrings.whatyouWillLearnH2 }
        </ParagraphText>
        <ParagraphText>
          { HomeStrings.whatyouWillLearnH3 }
        </ParagraphText>
        <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: "disc"}}>
          { this.displayWhatToLearn(HomeStrings.whatyouWillLearnList) }
        </ul>
        <PageTitle>
          { HomeStrings.usingCanvasHeader }
        </PageTitle>
        <PageSubTitle>
          { HomeStrings.usingCanvasModule }
        </PageSubTitle>
        <ParagraphText>
          { HomeStrings.usingCanvasModuleText1 }
        </ParagraphText>
        <ParagraphText>
          { HomeStrings.usingCanvasModuleText2 }
        </ParagraphText>
        <ParagraphText>
          { HomeStrings.usingCanvasModuleText3 }
        </ParagraphText>
        <ParagraphText>
          { HomeStrings.usingCanvasModuleText4 }
        </ParagraphText>
        <PageTitle>
          { HomeStrings.usingCanvasAnnouncementsHeader }
        </PageTitle>
        <ParagraphText>
          { HomeStrings.usingCanvasAnnouncementsText }
        </ParagraphText>
        <PageTitle>
          { HomeStrings.primaryPortfolioProjectHeader }
        </PageTitle>
        <ParagraphText>
          { HomeStrings.primaryPortfolioProjectIntroText1 }
        </ParagraphText>
        <ParagraphText>
          { HomeStrings.primaryPortfolioProjectIntroText2 }
        </ParagraphText>
        <PageTitle>
          { HomeStrings.primaryPortfolioProjectInHouseHeader }
        </PageTitle>
        <ParagraphText>
          { HomeStrings.primaryPortfolioProjectInHouseText1 }
        </ParagraphText>
        <ParagraphText>
          { HomeStrings.primaryPortfolioProjectInHouseText2 }
        </ParagraphText>
        <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: "disc"}}>
        { this.displayWhatToLearn(HomeStrings.primaryPortfolioProjectInHouseList1) }
        </ul>
        <PageTitle>
          { HomeStrings.primaryPortfolioProjectCustomerHeader }
        </PageTitle>
        <ParagraphText>
          { HomeStrings.primaryPortfolioProjectCustomerText1 }
        </ParagraphText>
        <ParagraphText>
          { HomeStrings.primaryPortfolioProjectCustomerText2 }
        </ParagraphText>
        <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: "disc"}}>
          {  this.displayWhatToLearn(HomeStrings.primaryPortfolioProjectCustomerList) }
        </ul>
        <PageTitle>
          { HomeStrings.gradingHeader }
        </PageTitle>
        <ParagraphText>
          { HomeStrings.gradingText }
        </ParagraphText>
        <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: "disc"}}>
          {  this.displayWhatToLearn(HomeStrings.gradingList) }
        </ul>
        <PageTitle>
          { HomeStrings.attendanceHeader }
        </PageTitle>
        <ParagraphText>
          { HomeStrings.attendanceText }
        </ParagraphText>
        <PageTitle>
          { HomeStrings.assignmentsHeader }
        </PageTitle>
        <ParagraphText>
          {HomeStrings.assignmentsText }
        </ParagraphText>
        <PageTitle>
          {HomeStrings.careerServicesHeader }
        </PageTitle>
        <ParagraphText>
          {HomeStrings.careerServicesText }
        </ParagraphText>
      </Container>
    );
  }
}

export default CourseHome;

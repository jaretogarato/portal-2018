import React from 'react';
import { 
  Container, 
  Image, 
  Grid, 
} from 'semantic-ui-react';
import devpoint from '../../assets/images/devpoint.png';

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
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={12}>
              <div>
                <Image src={devpoint} alt='devpoint' />
              </div>
            </Grid.Column>
            <Grid.Column width={1}>
              <div >
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h3>
                Main Website
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h5>
                <a href='http://devpointlabs.com' style={{color: 'purple'}}> Main Site </a>
              </h5>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h3>
                Student Handbook
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h5>
                <a href='https://docs.google.com/document/d/1ly9CTnGcYb6Rls-92RpKCR9RHJ1IcvdBSmfy7HZj3NM/edit' style={{color: 'purple'}}> Student Handbook </a>
              </h5>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h3>
                Concepts
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={4}>
              <p style={styles.paragraph1}>
                skdjaljldjaskld
                lksjdlasjdlasjd
                slkjdlkasjdkl
                asldjkaljd
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <p style={styles.paragraph1}>
                skdjaljldjaskld
                lksjdlasjdlasjd
                slkjdlkasjdkl
                asldjkaljd
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <p style={styles.paragraph1}>
                skdjaljldjaskld
                lksjdlasjdlasjd
                slkjdlkasjdkl
                asldjkaljd
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h3>
              What you will learn
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={4} >
              <p style={styles.paragraph2}>
                skdjaljldjaskld
                lksjdlasjdlasjd
                slkjdlkasjdkl
                asldjkaljdsjdhasdkajshdk
                sdhhdahsakjhdjkashdjkhaskj
                shdsajdlkasjdkljldkjslajdklasjdklasjkldja
                slkjdslajdsjdkladkl
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h3>
                Grading
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={4}>
              <p style={styles.paragraph2}>
                skdjaljldjaskld
                lksjdlasjdlasjd
                slkjdlkasjdkl
                asldjkaljdsjdhasdkajshdk
                sdhhdahsakjhdjkashdjkhaskj
                shdsajdlkasjdkljldkjslajdklasjdklasjkldja
                slkjdslajdsjdkladkl
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h3>
                Attendence
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={4}>
              <p style={styles.paragraph2}>
                skdjaljldjaskld
                lksjdlasjdlasjd
                slkjdlkasjdkl
                asldjkaljdsjdhasdkajshdk
                sdhhdahsakjhdjkashdjkhaskj
                shdsajdlkasjdkljldkjslajdklasjdklasjkldja
                slkjdslajdsjdkladkl
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <h3>
                Assingments
              </h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={4}>
              <p style={styles.paragraph2}>
                skdjaljldjaskld
                lksjdlasjdlasjd
                slkjdlkasjdkl
                asldjkaljdsjdhasdkajshdk
                sdhhdahsakjhdjkashdjkhaskj
                shdsajdlkasjdkljldkjslajdklasjdklasjkldja
                slkjdslajdsjdkladkl
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
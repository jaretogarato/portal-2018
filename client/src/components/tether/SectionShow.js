import React from 'react';
import { connect } from 'react-redux';
import { getSubSections} from '../../actions/subSections';
import { getLectures } from '../../actions/lectures';
import { Link } from 'react-router-dom';
import { setSubSectionId } from '../../actions/subSectionId';
import {
  Accordion,
  Container,
  Dimmer,
  Header,
  Icon,
  Loader,
  Segment
} from 'semantic-ui-react';

class SectionShow extends React.Component {
  state = {
    loaded: false,
    itemsLoaded: false,
    subSectionsLoaded: false,
    lecturesLoaded: false,
    activeIndex: 0,
    sectionId: 1,
    sections: [],
    section: {},
    sectionHeader: '',
    subSections: [],
    subSectionId: 1,
    subSectionNewId: 1,
    subSection: {},
    subSectionHeader: '',
    lectures: [],
    lectureId: 1,
    lecture: {},
    lectureTitle: '',
  };

  setSubSectionsLoaded = () => this.setState({ subSectionsLoaded: true });
  setItemsLoaded = () => this.setState({ itemsLoaded: true });
  setLecturesLoaded = () => this.setState({ lecturesLoaded: true })
  setLoaded = () => this.setState({ loaded: true });

  componentWillMount() {
    const { dispatch, sections, section, courseId } = this.props;
    const { sectionId, subSectionId } = this.state;

    this.setState({ courseId: courseId });
    this.setState({ section: section });
    this.setState({ sections: sections });

    dispatch(getSubSections(sectionId, this.setSubSectionsLoaded));
    dispatch(getLectures(subSectionId, this.setLecturesLoaded));
    dispatch(setSubSectionId(subSectionId));
  }

  componentDidMount() {
    const { subSection, lectures } = this.props;

    this.setState({ subSection: subSection });
    this.setState({ lectures: lectures });
    this.setLoaded();
  }

  componentWillReceiveProps = (nextProps) => {
    const { dispatch, sectionId, subSectionId, lectures } = this.props;

    this.setState({ courseId: nextProps.courseId });
    this.setState({ sectionId: nextProps.sectionId });
    this.setState({ lectures: nextProps.lectures });

    if(sectionId !== nextProps.sectionId){
      dispatch(getSubSections(nextProps.sectionId, this.setSubSectionsLoaded));
    }
    if(subSectionId !== nextProps.subSectionId){
      dispatch(setSubSectionId(nextProps.subSectionId));
    }
    if(JSON.stringify(lectures) !== JSON.stringify(nextProps.lectures)){
      dispatch(getLectures( nextProps.subSectionId, this.setLecturesLoaded));
    }
  }

  handleClick = (e, titleProps) => {
    const { dispatch } = this.props;
    const { subSectionId, activeIndex } = this.state;
    const { index } = titleProps; // index from where the click originates
    // const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
    this.setState({ subSectionId: index }, () => {
      dispatch(setSubSectionId(index));
      dispatch(getLectures(subSectionId, this.setLecturesLoaded));
    });
  }

  renderItems = (subSectionId) => {
    return this.props.lectures.map( lecture => {
      return(
        <Link key={lecture.id} to={`/lectures/${lecture.id}`}>
          <Segment key={lecture.id}>
            <h4>{lecture.title}</h4>
          </Segment>
        </Link>
      )
    })
  }

  renderSubSections = () => {
    let { subSections } = this.props;
    //TODO this is a major hack and needs to be fixed
    if (!Array.isArray(subSections))
      subSections = [];
    return subSections.map( subSection => {
      return(
        <div key={subSection.id}>
          <Accordion.Title
            active={this.state.activeIndex === subSection.id}
            index={subSection.id}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            {subSection.title}
          </Accordion.Title>
          <Accordion.Content
            active={this.state.activeIndex === subSection.id}
            index={subSection.id}
          >
            <Container
              index={`${subSection.id}_2`}
            >
              {this.renderItems(subSection.id)}
            </Container>
          </Accordion.Content>
        </div>
      )
    })
  }

  render() {
    let { loaded, subSectionsLoaded, lecturesLoaded } = this.state;

    if(this.props.sections.length && loaded && subSectionsLoaded && lecturesLoaded ) {
      let sectionObject = (this.props.sections[`${this.props.sectionId}`] || this.props.sections[0]);
      let sectionTitle = sectionObject['title'];

      return (
        <Container fluid textAlign = 'left'>
          <Header as='h3' align='center'>{sectionTitle}</Header>
          <Accordion fluid styled>
            {this.renderSubSections()}
          </Accordion>
        </Container>
      )
    } else {
      return(
        <div>
          <Dimmer active inverted>
            <Loader inverted size='large'>Loading</Loader>
          </Dimmer>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return{
    sectionId: state.sectionId,
    sections: state.sections,
    section: state.section,
    sectionHeader: {},

    subSectionId: state.subSectionId,
    subSections: state.subSections,
    subSection: state.subSection,
    subSectionHeader: state.subSectionHeader,

    lectureId: state.lectureId,
    lectures: state.lectures,
    lecture: state.lecture,
    lectureTitle: state.lectureTitle,
  };
}

export default connect(mapStateToProps)(SectionShow);

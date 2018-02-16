import React from 'react';
import axios from 'axios';
import { 
  Table,
  Button,
  Icon,
  Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { PageTitle } from '../../styles/styledComponents';
import _ from 'lodash';

class Miscellaneous extends React.Component {
  state = { miscellaneous: [], column: null, direction: null }

  componentDidMount() {
    axios.get('/api/miscellaneous')
      .then( res => {
        this.setState({ miscellaneous: res.data })
      }).catch( err => {
        // TODO: make an alert message
    });
  }

  handleSort = clickedColumn => () => {
    const { column, direction, miscellaneous } = this.state;
    if (column === clickedColumn) {
      this.setState({
        column: clickedColumn,
        miscellaneous: _.sortBy(miscellaneous, [clickedColumn]),
        direction: 'ascending',
      })
    return
    }
    this.setState({
      miscellaneous: miscellaneous.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  displayMiscellaneous = () => {
    const { id } = this.props.match.params
    return this.state.miscellaneous.map(misc => {
      return(
        <Table.Row key={misc.id}>
          <Table.Cell>
            <Link to={`/courses/${id}/miscellaneous/${misc.id}`}> {misc.title} </Link>
          </Table.Cell>
          <Table.Cell> <a>{ misc.content }</a> </Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    const { id } = this.props.match.params;
    const { column, direction } = this.state;
    return(
      <div>
        <PageTitle>Miscellaneous</PageTitle>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
            </Grid.Column>
            <Grid.Column width={2}>
              <Link to={`/courses/${id}/miscellaneousform`}>
                <Button
                  basic
                  icon
                  labelPosition='left'>
                  <Icon name='add' />
                  Misc
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Table basic='very' striped singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width={6}
                      sorted={column === 'name' ? direction : null} 
                      onClick={this.handleSort('name')}> 
                      Name</Table.HeaderCell>
                    <Table.HeaderCell width={8}
                      sorted={column === 'due_date' ? direction : null} 
                      onClick={this.handleSort('due_date')}> 
                      Link</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.displayMiscellaneous()}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
};

export default Miscellaneous;
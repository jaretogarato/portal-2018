import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import fileDownload from 'js-file-download';

class AddUsers extends React.Component {
  makeFile = () => {
    const data = [
      'first_name, last_name, email, role\nJane, Doe, jane@doe.com, Student/TA/Teacher/Auditor'
    ]
    fileDownload(data, 'users.csv')
  }

  render() {
    return (
      <div>
        <Divider hidden />
        <Button onClick={this.makeFile}>Download Sample CSV</Button>
      </div>
    )
  }
}

export default AddUsers;

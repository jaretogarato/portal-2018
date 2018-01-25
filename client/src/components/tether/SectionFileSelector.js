import _ from 'lodash';
import React, { Component } from 'react';
import {
    Button,
    Header,
    Icon,
    Image,
    Modal,
} from 'semantic-ui-react';


class SectionFileSelector extends Component {
    render() {
        return (
            <Modal trigger={<Button>Add a document</Button>}>
            <Modal.Header>Select a Quiz, Lecture Note, Assignment</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' src='/assets/images/wireframe/image.png' />
                <Modal.Description>
                <Header>Modal Header</Header>
                <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button primary>
                Proceed <Icon name='right chevron' />
                </Button>
            </Modal.Actions>
            </Modal>
        )
    }
} 

export default SectionFileSelector
import React from 'react';
import { connect } from 'react-redux';
import { Message, Container, Header } from 'semantic-ui-react';
import { clearFlash } from '../actions/flash';
import { FloatingMessage } from '../styles/flashStyles';

const fadeFlash = dispatch => {
  setTimeout(() => {
    dispatch(clearFlash());
  }, 5000);
};

const Flash = ({ flash, dispatch }) => {
  if (flash.message) {
    return (
      <FloatingMessage>
        <Container>
          <Message
            onDismiss={() => dispatch(clearFlash())}
            color={flash.color}
          >
            <Header as='h5' textAlign='center'>{flash.message}</Header>
            {fadeFlash(dispatch)}
          </Message>
        </Container>
      </FloatingMessage>
    );
  }
  return null;
};

const mapStateToProps = state => {
  const { flash } = state;
  return { flash };
};

export default connect(mapStateToProps)(Flash);

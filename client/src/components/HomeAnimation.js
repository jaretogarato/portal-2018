import React, { Component } from 'react';
// import GSAP from 'react-gsap-enhancer';

// let HomeAnimation = React.createClass({
class HomeAnimation extends Component {
  render() {
    return (
      <div className="modal-dialog timeslot-modal rc5">
        <div className="modal-content light-grey">
          <div className="modal-body">
            <div ref='stage' id="Stage" className="EDGE-18968668">
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const compId = 'EDGE-18968668';
    let composition = AdobeEdge.getComposition(compId);
    if (composition) {
      composition.getStage().play();
      return;
    }
    AdobeEdge.loadComposition('/static/animations/rsvp/progress', compId, {
      scaleToFit: "none",
      centerStage: "none",
      minW: "0px",
      maxW: "undefined",
      width: "70px",
      height: "70px"
    }, {
        dom: [ ]
    }, {
        dom: [ ]
    });
  }
}
export default HomeAnimation;

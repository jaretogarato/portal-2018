import React, { Component } from 'react';
// import { AdobeEdge } from '../assets/animate/animate_package/portal-logo/Assets/edge_includes/edge.6.0.0.min.js';

class HomeAnimation extends Component {

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

}
export default HomeAnimation;

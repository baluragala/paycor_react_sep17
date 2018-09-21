import React, { Component } from "react";
import { connect } from "react-redux";
import { getOffersActionCreator } from "../actionCreators/offer";
import { withRouter } from "react-router-dom";

class OfferList extends Component {
  componentDidMount() {
    //dispatch action to get offers
    this.props.getOffers();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.getOffers()}>Get Offers</button>
        <h1>Offers</h1>

        {this.props.isLoading ? <p>Loading...</p> : null}
        {this.props.offers.map(o => (
          <li>{o.name}</li>
        ))}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    offers: appState.offerState.offers,
    isLoading: appState.offerState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOffers: function() {
      dispatch(getOffersActionCreator());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OfferList));

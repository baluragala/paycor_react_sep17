import React, { Component } from "react";
import { connect } from "react-redux";
import { getOffersActionCreator } from "../actionCreators/offer";

class OfferList extends Component {
  componentDidMount() {
    //dispatch action to get offers
    this.props.getOffers();
  }

  render() {
    return (
      <div>
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
)(OfferList);

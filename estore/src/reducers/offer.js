import {
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE
} from "../actionTypes/offer";

const initalState = { offers: [], isLoading: false };
function offerReducer(prevState = initalState, action) {
  switch (action.type) {
    case GET_OFFERS:
      return { ...prevState, isLoading: true };
    case GET_OFFERS_SUCCESS:
      return { ...prevState, isLoading: false, offers: action.offers };
    case GET_OFFERS_FAILURE:
      return { ...prevState, isLoading: false, error: action.error };
    default:
      return prevState;
  }
}

export default offerReducer;

import {
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE
} from "../actionTypes/offer";

export function getOffersActionCreator() {
  return { type: GET_OFFERS };
}

export function getOffersSuccessActionCreator(offers) {
  return { type: GET_OFFERS_SUCCESS, offers };
}

export function getOffersFailureActionCreator(error) {
  return { type: GET_OFFERS_FAILURE, error };
}

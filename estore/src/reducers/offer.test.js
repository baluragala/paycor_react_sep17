// import Enyzme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// Enyzme.configure({
//   adapter: new Adapter()
// });
import offerReducer, { initalState } from "./offer";
import { getOffersSuccessActionCreator } from "../actionCreators/offer";

describe("offerReducer", () => {
  it("should return intial state when prevState is undefined", () => {
    let state = offerReducer(undefined, {});
    expect(state).toEqual(initalState);
  });

  it("should have offers in state when GET_OFFERS_SUCCESS", () => {
    let offers = ["o1", "o2"];
    let action = getOffersSuccessActionCreator(offers);
    let state = offerReducer(undefined, action);
    expect(state).toEqual({ ...initalState, offers });
  });
});

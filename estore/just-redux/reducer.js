//reducer

const initialState = { counter: 0 };
function counterReducer(prevState = initialState, action) {
  switch (action.type) {
    case "INC":
      return { counter: prevState.counter + action.by };
    case "DEC":
      return { counter: prevState.counter - action.by };
    default:
      return prevState;
  }
}

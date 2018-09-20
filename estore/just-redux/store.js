//store
const enhancer = Redux.applyMiddleware(reduxLogger.createLogger());
const store = Redux.createStore(counterReducer, enhancer);
store.subscribe(function() {
  console.log(store.getState());
});

store.subscribe(function() {
  document.querySelector("#result").textContent = store.getState().counter;
});

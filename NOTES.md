0. Story of Redux
1. Parts of Redux
  + Makes decisions for you
  + Store
  + Actions
  + Reducers
2. Counter example
  + One piece of state
  + Creating a store with listeners and way to update the state. When the state is updated, the listeners are applied.
  + dispatch
  + FLOW
    + We create a store with a state
    + We create a reducer to take in an action and return the new state
    + Our dispatch method updates the state and then calls any listeners on our view
    + We then create listeners that simply dispatch actions
  + CHALLENGE - add a button that resets the count to zero
3. Hook up React to our store...


```javascript
export const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener())
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  dispatch({});
  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  };
}
```

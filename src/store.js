export function createStore( reducer ) {
  return {
    getState(){
      return this.__state;
    },

    dispatch(action){
      console.log('Dispatch called!')
      this.__state = reducer(this.__state, action);
      // this.__state = 0;
      console.log(this.__state);

      this.listeners.forEach(function(listener){
        listener();
      });
      // I want to update my views any time there is a change to my dispatch
      // I want the store to know about any listeners that need to be fired
    },

    listeners: [],

    subscribe(listener) {
      this.listeners.push(listener);
    }
  };
}

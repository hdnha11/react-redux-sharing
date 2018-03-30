const createStore = (reducer, initialState) => {
  let currentState = initialState || undefined;
  const subscribers = [];

  const getState = () => currentState;

  const dispatch = action => { // eslint-disable-line
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    currentState = reducer(currentState, action);

    subscribers.forEach(subscribe => subscribe());
  };

  const subscribe = callback => {
    subscribers.push(callback);

    const unsubscribe = () => {
      subscribers.splice(subscribers.indexOf(callback), 1);
    };

    return unsubscribe;
  };

  // Init the store
  dispatch({ type: 'INIT' });

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default createStore;

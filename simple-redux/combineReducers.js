export default reducers => (state = {}, action) => {
  const keys = Object.keys(reducers);

  let changed = false;
  const nextState = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const reducer = reducers[key];
    const previousStateForKey = state[key];
    const nextStateForKey = reducer(previousStateForKey, action);

    nextState[key] = nextStateForKey;
    changed = changed || nextStateForKey !== previousStateForKey;
  }

  return changed ? nextState : state;
};

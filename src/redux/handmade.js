let reducer = (state, action) => {
  if (action.type === 'INC') {
    state += 1;
  } else if (action.type === 'DEC') {
    state -= 1;
  } else {
    state = 0;
  }
  return state;
};

const createStore = (reduce, state_init) => {
  let state = state_init;
  let subscribers = [];
  return {
    subsribe(fn) {
      subscribers.push(fn);
    },
    dispatch(action) {
      state = reduce(state, action);
      subscribers.forEach((sb) => sb());
    },
    getState() {
      return state;
    },
  };
};

let store = createStore(reducer, 0);

let show1 = () => {
  console.log('State1 = ', store.getState());
};

let show2 = () => {
  console.log('State2 = ', store.getState());
};

store.subsribe(show1);
store.subsribe(show2);

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });

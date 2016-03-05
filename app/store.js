import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, LOCATION_CHANGE } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';

const initialState = {
  routing: {},
  top: {
    title: 'init',
    counter: -1
  }
};

var ignoredTypes = {
  '@@redux/INIT': true,
  '@@router/LOCATION_CHANGE': true
};

var reducers = {};

// The reducer given to redux does an object dispatch on reducers to route to
// the action handler.
var reducer = function(state = initialState, action) {
  var type = action.type;
  if (reducers.hasOwnProperty(type)) {
    return reducers[type](state, action);
  } else if (!ignoredTypes.hasOwnProperty(type)){
    throw new Error('No reducer for: ' + type);
  }
  return state;
};

var store = createStore(reducer, initialState);
export default store;

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store)

// Used by 'action' to build up the full reducer dynamically.
export function addReducer(type, fn) {
  if (reducers.hasOwnProperty(type)) {
    throw new Error('Already a reducer for: ' + type);
  }
  reducers[type] = fn;
};


// Integrate the router history mechanism into this style of reducer dispatch.
addReducer(LOCATION_CHANGE, function(state, action) {
  var newRouteState = routerReducer(state.routing, action);
  if (newRouteState === state.routing) {
    return state;
  } else {
    return Object.assign({}, state, {
      routing: newRouteState
    });
  }
});

// Shorthand for listeners.
export var subscribe = store.subscribe;

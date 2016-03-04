import store from './store';

export default function(type, obj) {
  // Always pass through async require even if already loaded, gives consistent
  // async behavior to dispatched actions.
  require(['./reducer/' + type], function() {
    obj.type = type;
    store.dispatch(obj);
  });
};

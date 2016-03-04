import base from './base';

var counter = 0;

base(module.id, function(state, action) {
  counter += 1;

  return {
    [action.type]: {
      title: action.title,
      counter
    }
  };
});

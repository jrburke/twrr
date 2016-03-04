import { addReducer } from '../store';

export default function(type, fn) {

  // Only keep the part of the module ID inside the "reducer" directory, as that
  // will be the action type name. This quick type name generation assumes no
  // nested "/reducer/" folder inside this folder.
  // todo: module.id in webpack seems to be an int, which is not so helpful.
  // Going to modules naming themselves to get this to work for now.
  // var type = moduleId.split('/reducer/')[1];

  console.log('BASE REDUCER TYPE NAME IS: ' + type);

  addReducer(type, function(state, action) {
    var newState = fn(state, action);
    if (!newState) {
      return state;
    }
    return Object.assign({}, state, newState);
  });
};

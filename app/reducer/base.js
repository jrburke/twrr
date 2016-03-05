import { addReducer } from '../store';

var jsSuffixRegExp = /\.js$/;

export default function(moduleId, fn) {

  // Only keep the part of the module ID inside the "reducer" directory, as that
  // will be the action type name. This quick type name generation assumes no
  // nested "/reducer/" folder inside this folder.
  var type = moduleId.split('/reducer/')[1].replace(jsSuffixRegExp, '');

  console.log('BASE REDUCER TYPE NAME IS: ' + type);

  addReducer(type, function(state, action) {
    var newState = fn(state, action);
    if (!newState) {
      return state;
    }
    return Object.assign({}, state, newState);
  });
};

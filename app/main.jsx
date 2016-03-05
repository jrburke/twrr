// Basic plumbing
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router';

// model/store
import { default as store, history } from './store';

// UI components
import Frame from './frame.jsx';
import User from './user.jsx';

var NoMatch = React.createClass({
  render() {
    return (
      <div>
        <h1>no match</h1>
      </div>
    )
  }
});

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Frame}>
        <Route path="user" component={User}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

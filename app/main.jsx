import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import User from './user.jsx';

var App = React.createClass({
  render() {
    return (
      <div>
        <div>
          <h1>Welcome</h1>
          <Link to={'/user'}>User</Link>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
});

var NoMatch = React.createClass({
  render() {
    return (
      <div>
        <h1>no match</h1>
      </div>
    )
  }
});


// import reducers from './reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    // ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="user" component={User}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
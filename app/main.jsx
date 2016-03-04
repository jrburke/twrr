import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import { default as store, history } from './store';

import User from './user.jsx';

var App = React.createClass({
  render() {
    return (
      <div>
        <div>
          <h1>Welcome</h1>
          <h2>{this.state.top.title}</h2>
          <button onClick={
            store.dispatch('top', { title: 'new thing'})
          }>Change Top</button>
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

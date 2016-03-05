import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';

import action from './action';

const mapStateToProps = (state) => {
  return {
    top: state.top
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

function callTop() {
  action('top', { title: 'new thing'});
}

export default connect(mapStateToProps, mapDispatchToProps)(React.createClass({
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">{this.props.top.title + ' ' + this.props.top.counter }</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <button onClick={callTop}>Change Top</button>
              </NavItem>
              <li role="presentation">
                <Link role="button" to={'/user'}>User</Link>
              </li>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="detail">
          {this.props.children}
        </div>
      </div>
    );
  }
}));

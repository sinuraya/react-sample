/*jshint esversion: 6 */

import React from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import { Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Header = ({
  showMobileMenu,
  toggleMobileNavVisibility,
  history
}) => {

  this.handleSelect = (evt) => {
    switch (evt) {
      case 'logoff':
        history.push('/logoff');
        break;
      default:
  
    }
  }

  return (
    <Navbar fluid={true}>
      <Navbar.Header>
        <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={toggleMobileNavVisibility}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </Navbar.Header>

      <Navbar.Collapse>

        <Nav>
          <NavDropdown title={<i className="fa fa-globe" />} id="basic-nav-dropdown">
            <MenuItem>Action</MenuItem>
            <MenuItem>Another action</MenuItem>
            <MenuItem>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <div className="separator"></div>
        <Navbar.Form pullLeft>
          <FormGroup>
            <span className="input-group-addon"><i className="fa fa-search"></i></span>
            <FormControl type="text" placeholder="Type to search" />
          </FormGroup>
        </Navbar.Form>
        <Nav pullRight onSelect={k => this.handleSelect(k)}>
          <NavDropdown title={<span><i className="fa fa-user" /> My Profile</span>} id="right-nav-bar">
            <MenuItem>Action</MenuItem>
            <MenuItem>Another action</MenuItem>
            <MenuItem>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="logoff">Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default withRouter(connect(null, mapDispatchToProp)(Header));
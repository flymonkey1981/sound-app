import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NavUser from './NavUser'

const propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

class Nav extends Component {
    render(){
        const {isAuthenticated, login, logout} = this.props;
        return (
          <NavUser isAuthenticated={isAuthenticated} login={login} logout={logout}>Nav</NavUser>
        );
    }
}

Nav.propTypes = propTypes;
export default Nav;
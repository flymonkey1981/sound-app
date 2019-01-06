import PropTypes from 'prop-types';
import React, {Component} from 'react';
import NavUser from './NavUser'
import '../styles/nav.scss'

const propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

class Nav extends Component {
    render() {
        const {isAuthenticated, login, logout} = this.props;
        return (
            <div className="nav">
                <div className="nav__inner container">
                <NavUser isAuthenticated={isAuthenticated} login={login} logout={logout}>Nav</NavUser>
                </div>
            </div>
        );
    }
}

Nav.propTypes = propTypes;
export default Nav;
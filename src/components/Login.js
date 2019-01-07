import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/login.scss'

const propTypes = {
    isLogin: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,

};

class Login extends Component {
    render() {
        const {isAuthenticated, login, logout} = this.props;
        return (
            <div className="nav">
                <div className="nav__inner container">
                   Login hello
                </div>
            </div>
        );
    }
}

Login.propTypes = propTypes;
export default Login;
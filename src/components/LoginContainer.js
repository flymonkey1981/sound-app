import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/LoginAction';
import {navigateTo} from "../actions/RouterAction";
import Login from './Login'



const LoginContainer = (props) => <Login {...props}/>

const mapStateToProps = state => (
    {
        isLogin: state.login.isLogin,
    }
)

export default connect(mapStateToProps, {
        login,
        navigateTo,
    }
)(LoginContainer);
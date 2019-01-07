import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/LoginAction';
import Login from './Login'



const LoginContainer = (props) => <Login {...props}/>

const mapStateToProps = state => (
    {
        isLogin: false,
    }
)

export default connect(mapStateToProps, {
        login,
    }
)(LoginContainer);
import React from 'react';
import {connect} from 'react-redux';
import {login, logout} from '../actions/SessionActions';
import Nav from './Nav'


const NavContainer = (props) => <Nav {...props}/>

const mapStateToProps = state => (
    {
        isAuthenticated: state.session.oauthToken ? true:false,
    }
)

export default connect(mapStateToProps, {
        login,
        logout,
    }
)(NavContainer);
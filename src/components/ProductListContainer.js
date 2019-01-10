import React from 'react';
import {connect} from 'react-redux';
import Product from "./Product";
import {logout} from "../actions/LoginAction";

const ProductContainer = (props) => <Product {...props}/>

const mapStateToProps = state => (
    {
      isLogin:state.login.isLogin,
    }
);

export default connect(mapStateToProps, {
      logout
    }
)(ProductContainer);
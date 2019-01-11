import React from 'react';
import {connect} from 'react-redux';
import Product from "./Product";
import {logout} from "../actions/LoginAction";
import {addProduct} from "../actions/ProductAction";

const ProductContainer = (props) => <Product {...props}/>

const mapStateToProps = state => (
    {
        isLogin: state.login.isLogin,
        shoppingCart: state.product.shoppingCart
    }
);

export default connect(mapStateToProps, {
        logout,
        addProduct
    }
)(ProductContainer);
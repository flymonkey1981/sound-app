import React from 'react';
import {connect} from 'react-redux';
import ShoppingCart from "./ShoppingCart";
import {viewProduct, removeProduct, checkout, updateQty} from "../actions/ProductAction";


const ShoppingCartContainer = (props) => <ShoppingCart {...props}/>

const mapStateToProps = state => (
    {
        shoppingCart: state.product.shoppingCart
    }
);

export default connect(mapStateToProps, {
    viewProduct,
    removeProduct,
    checkout,
    updateQty
    }
)(ShoppingCartContainer);
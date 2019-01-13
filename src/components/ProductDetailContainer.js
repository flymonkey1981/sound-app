import React from 'react';
import {connect} from 'react-redux';
import ProductDetail from './ProductDetail'
import {logout} from "../actions/LoginAction";
import {addProduct} from "../actions/ProductAction";

const ProductDetailContainer = (props)=> <ProductDetail {...props}/>

const mapStateToProps = state => (
    {
        currentProduct: state.product.currentProduct,

    }
);

export default connect(mapStateToProps, {

    }
)(ProductDetailContainer);
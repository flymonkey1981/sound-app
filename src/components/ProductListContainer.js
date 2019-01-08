import React from 'react';
import {connect} from 'react-redux';
import Product from "./Product";
import {login, logout} from "../actions/SessionActions";

const ProductContainer = (props) => <Product {...props}/>

const mapStateToProps = state => (
    {

    }
);

export default connect(mapStateToProps, {
        login,
    }
)(ProductContainer);
import React from 'react';
import {connect} from 'react-redux';
import Summary from "./Summary";
import {viewProduct} from "../actions/ProductAction";



const SummaryContainer = (props) => <Summary {...props}/>

const mapStateToProps = state => (
    {
        shoppingCart: state.product.shoppingCart
    }
);

export default connect(mapStateToProps, {
       viewProduct
    }
)(SummaryContainer);
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/productDetail.scss'


const propTypes = {
    currentProduct: PropTypes.object.isRequired,

};

class ProductDetail extends Component {
    render(){
       const {currentProduct} = this.props;
       return (
           <div className="product-detail">
               <div className="product-name">{currentProduct.name}</div>
               <div className="product-image"><img src={currentProduct.image}/></div>
               <div className="product-info">
                   <h5>{currentProduct.name}</h5>
                   <h6>{currentProduct.price}</h6>
               </div>
           </div>

       )
    }
};

ProductDetail.propTypes = propTypes;

export default ProductDetail;
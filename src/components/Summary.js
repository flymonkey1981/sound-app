import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/summary.scss';

const propTypes = {
    shoppingCart: PropTypes.array.isRequired,
    viewProduct: PropTypes.func.isRequired
};

class Summary extends Component {

    render() {
        const {shoppingCart, viewProduct, history} = this.props;
        return (
            <section className="summary">
                {shoppingCart.map(product =>
                    <div key={product.name} className="product-card">
                        <div className="product-image">
                            <input type="image" src={product.image}
                                   onClick={() => {
                                       viewProduct(product, history)
                                   }}/>
                        </div>
                        <div className="product-info">
                            <h5>{product.name}</h5>
                            <h6>{product.price}</h6>
                            <h6> Qty: {product.qty}</h6>


                        </div>

                    </div>)}

            </section>
        );
    }
};

Summary.propTypes = propTypes;

export default Summary;


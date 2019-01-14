import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/shoppingCart.scss';


const propTypes = {
    shoppingCart: PropTypes.array.isRequired,
    viewProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    updateQty: PropTypes.func.isRequired,

};

class ShoppingCart extends Component {
    render() {
        const {shoppingCart, viewProduct, removeProduct, checkout, updateQty, history} = this.props;
        return (
            <section className="shopping-cart">
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
                            <h6> Qty: <input type="text" name="qty" defaultValue="1" onChange={
                                (event)=>{
                                    console.log(event.target.value+product.name);
                                    updateQty(event.target.value, product);
                                }
                            }/></h6>
                            <div className="remove" onClick={()=>{removeProduct(product)}}>Remove</div>
                        </div>

                    </div>)}
                    <button onClick={()=>{ checkout(shoppingCart, history)}}>Checkout</button>

            </section>
        )
    }
};

ShoppingCart.propTypes = propTypes;

export default ShoppingCart;
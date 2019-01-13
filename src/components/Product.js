import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {Redirect,Link} from 'react-router-dom';
import axios from 'axios'
import '../styles/product.scss'

const propTypes = {
    isLogin: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
};

class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: []

        };
    }


    componentDidMount() {
        //https://jsonplaceholder.typicode.com/users
        axios.get(`products.json`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }
    render() {
        const {history, isLogin, logout, addProduct, shoppingCart, viewProduct} = this.props;

        if(isLogin){
            //var shoppingCart = JSON.parse(window.localStorage.getItem("shoppingCart"));
            return(
                <div>
                    Product
                    <button onClick={()=>{console.log('hello');logout(history)}}>Logout</button>
                    <div>ShoppingCart: {shoppingCart.length}</div>
                    <section className="products">
                    { this.state.products.map(product =>
                        <div key = {product.name} className="product-card">
                            <div className="product-image">
                                <input type="image" src={product.image}
                                       onClick={()=>{viewProduct(product, history)}}/>
                            </div>
                            <div className="product-info">
                                <h5>{product.name}</h5>
                                <h6>{product.price}</h6>
                                <button onClick={()=>{addProduct(product)}}>Add</button>
                            </div>

                        </div>)}
                    </section>

                </div>
            );
        }else{
            return (
                <Redirect to='/login'/>
            );
        }

    }
};

Product.propTypes = propTypes;

export default Product;
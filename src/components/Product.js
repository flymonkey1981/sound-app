import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';
import axios from 'axios'

const propTypes = {
    isLogin: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
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
        const {history, isLogin, logout} = this.props;

        if(isLogin){
            return(
                <div>
                    Product
                    <button onClick={()=>{console.log('hello');logout(history)}}>Logout</button>
                    <ul>{ this.state.products.map(product =>
                        <li>{product.name}|{product.detail}</li>)}
                        </ul>
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
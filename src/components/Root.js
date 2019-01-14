import PropTypes from 'prop-types';
import React, {Component} from 'react';
//import Router from './Router'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginContainer from './LoginContainer'
import ProductListContainer from "./ProductListContainer";
import ProductDetailContainer from "./ProductDetailContainer";
import ShoppingCartContainer from './ShoppingCartContainer';
import SummaryContainer from './SummaryContainer';

const propTypes = {
    initAuth: PropTypes.func.isRequired,
};


class Root extends Component {
    componentWillMount() {
        const {initAuth} = this.props;
        initAuth();

    }

    render() {
        //const { router, routes } = this.props;
        return (

            <Router>
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/products" component={ProductListContainer}/>
                    <Route path="/productDetail" component={ProductDetailContainer}/>
                    <Route path="/shoppingCart" component={ShoppingCartContainer}/>
                    <Route path="/summary" component={SummaryContainer}/>
                </Switch>
            </Router>

        );
    }
}

export default Root;
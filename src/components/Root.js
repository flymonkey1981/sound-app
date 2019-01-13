import PropTypes from 'prop-types';
import React, {Component} from 'react';
//import Router from './Router'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginContainer from './LoginContainer'
import ProductListContainer from "./ProductListContainer";
import ProductDetailContainer from "./ProductDetailContainer";


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
                </Switch>
            </Router>

        );
    }
}

export default Root;
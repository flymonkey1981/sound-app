import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Router from './Router'



const propTypes = {
    initAuth: PropTypes.func.isRequired,
};


class Root extends Component {
    componentWillMount() {
        const { initAuth} = this.props;
        initAuth();

    }

    render() {
        const { router, routes } = this.props;
        return (
            <div>
                {/*<NavContainer/>*/}
                <Router router={router} routes={routes} />
            </div>
        );
    }
}

export default Root;
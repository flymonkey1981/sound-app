import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as SpotifyFunctions from "../utils/spotifyFunctions";
import Nav from "./Nav";

const propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

class NavUser extends Component {
    render() {
        const {login, logout} = this.props;
        return (
            <div className="ConnectSpotify">

                    <button onClick={login}>Login</button>


                    <button onClick={logout}>Logout</button>

            </div>
        );
    }
}

NavUser.propTypes = propTypes;
export default NavUser;
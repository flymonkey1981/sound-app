import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as SpotifyFunctions from "../utils/spotifyFunctions";
import Nav from "./Nav";
import Cookies from "js-cookie";
import {COOKIE_PATH} from "../constants/ApiConstants";

const propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

class NavUser extends Component {
    componentDidMount(){
        //this.login();
        //will check URL for accessToken hash. If it's not there, it will show the connect-spotify-button as a link
        //which will then redirect back to your site with the hash. If there is a hash, then we will jump right into the player
        const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken();
        accessToken ? this.setState({loggedInToSpotify: true, accessToken: accessToken}) : this.setState({loggedInToSpotify: false, accessToken: null});
        Cookies.set(COOKIE_PATH, accessToken);
    }
    render() {
        const {login, logout} = this.props;
        return (
            <div className="ConnectSpotify">
                <a href={SpotifyFunctions.redirectUrlToSpotifyForLogin()}>
                    <button>Login</button>
                </a>
                    <button onClick={logout}>Logout</button>
            </div>
        );
    }
}

NavUser.propTypes = propTypes;
export default NavUser;
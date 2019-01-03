import PropTypes from 'prop-types';
import React, {Component} from 'react';
import * as SpotifyFunctions from "../utils/spotifyFunctions";
import Nav from "./Nav";
import Cookies from "js-cookie";
import {COOKIE_PATH} from "../constants/ApiConstants";

const propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

class NavUser extends Component {
    componentDidMount() {
        //const {login} = this.props;
        //this.login();
        //will check URL for accessToken hash. If it's not there, it will show the connect-spotify-button as a link
        //which will then redirect back to your site with the hash. If there is a hash, then we will jump right into the player
       // const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken();
        //accessToken ? this.setState({loggedInToSpotify: true, accessToken: accessToken}) : this.setState({loggedInToSpotify: false, accessToken: null});
        //if (accessToken) {
        //    Cookies.set(COOKIE_PATH, accessToken);
       //     login();
       // }
    }

    render() {
        const {isAuthenticated, login, logout} = this.props;
        console.log('access code '+Cookies.get(COOKIE_PATH));
        if (isAuthenticated) {
            return (
                <div className="ConnectSpotify">

                    <button onClick={logout}>Logout</button>
                    <i className="nav-user__chevron ion-chevron-down" />

                </div>
            );
        }
        return(
            <a href={SpotifyFunctions.redirectUrlToSpotifyForLogin()}>
                <button>Login</button>
               
            </a>
        );
    }
}

NavUser.propTypes = propTypes;
export default NavUser;
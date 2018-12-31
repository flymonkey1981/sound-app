import React, { Component } from 'react';
import ConnectSpotify from './ConnectSpotify';
import * as SpotifyFunctions from '../utils/spotifyFunctions.js'
import {COOKIE_PATH} from '../constants/ApiConstants'
import Cookies from 'js-cookie';

class SpotifyContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedInToSpotify: false,
            accessToken: null
        }
    }

    login = () => {

        const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken();
        console.log('access token'+accessToken);

    }


    componentDidMount(){
        //this.login();
        //will check URL for accessToken hash. If it's not there, it will show the connect-spotify-button as a link
        //which will then redirect back to your site with the hash. If there is a hash, then we will jump right into the player
        const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken();
        accessToken ? this.setState({loggedInToSpotify: true, accessToken: accessToken}) : this.setState({loggedInToSpotify: false, accessToken: null});
        Cookies.set(COOKIE_PATH, accessToken);
    }

    render() {
        return (
            <div className="SpotifyContainer">

                    <p>Spotify Controls</p>
                {!this.state.loggedInToSpotify ? <ConnectSpotify /> : <p>{`We're in! Access Token is ${this.state.accessToken}`}</p> }

            </div>
        );
    }
}

export default SpotifyContainer;
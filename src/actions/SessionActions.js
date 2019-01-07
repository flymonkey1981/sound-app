import * as SpotifyFunctions from '../utils/spotifyFunctions.js'
import uniqBy from 'lodash/uniqBy';

import Cookies from "js-cookie";
import {COOKIE_PATH} from "../constants/ApiConstants";
import {INITIAL_ROUTE} from "../constants/RouterConstants";
import {navigateTo} from "./RouterAction";
import * as types from '../constants/ActionsTypes'


export const login = () => (dispatch)=> {
    console.log("login is called");
   // const oauthToken = Cookies.get(COOKIE_PATH);
   // dispatch({type:types.LOGIN_SUCCESS, oauthToken });


}

export const initAuth = () =>  (dispatch) => {
    console.log("initAuth is called");
    // const oauthToken = SpotifyFunctions.checkUrlForSpotifyAccessToken();
    // if(!oauthToken){
    //     console.log("oauthToken is null");
    //     window.location.href = SpotifyFunctions.redirectUrlToSpotifyForLogin();
    // }else{
    //     Cookies.set(COOKIE_PATH, oauthToken);
    //     dispatch({type:types.LOGIN_SUCCESS, oauthToken });
    //     dispatch(fetchSessionData(oauthToken));
    // }
}

export const fetchSessionData = (oauthToken) => (dispatch) => {
    //dispatch(fecthPlayerList(oauthToken));
    dispatch(fetchPlayerListSongs(oauthToken));
}

export const fecthPlayerList = (oauthToken) => (dispatch) => {
    const request = new Request(`https://api.spotify.com/v1/me/playlists`, {
        headers: new Headers({
            'Authorization': 'Bearer ' + oauthToken
        })
    });

    fetch(request).then(res => {
        if(res.statusText === "Unauthorized") {
            window.location.href = './';
        }
        return res.json();
    }).then(res => {
        console.log('res is'+ res.items);
        uniqBy(res.items, (item) => {
            return item.owner.id;
        }).map(item => {
            console.log('item track'+item.owner.display_name) ;
        });



    }).catch(err => {
        //dispatch(fetchSongsError(err));
    });


}

export const fetchPlayerListSongs = (oauthToken) => (dispatch) => {
    const request = new Request(`https://api.spotify.com/v1/users/Spotify/playlists/37i9dQZF1DWYLUQ5WYaArq/tracks`, {
        headers: new Headers({
            'Authorization': 'Bearer ' + oauthToken
        })
    });

    fetch(request).then(res => {
        if(res.statusText === "Unauthorized") {
            window.location.href = './';
        }
        return res.json();
    }).then(res => {
        // get all artist ids and remove duplicates
        console.log('res is'+ res.items);
       let items = uniqBy(res.items, (item) => {
           return item.track.id
       });
       dispatch({type:types.FETCH_SONGS_SUCCESS, items})
        // let artistIds = uniqBy(res.items, (item) => {
        //     return item.track.artists[0].name;
        // }).map(item => {
        //     return item.track.artists[0].id;
        // }).join(',');


    }).catch(err => {
        //dispatch(fetchSongsError(err));
    });

};

export const logout = () => (dispatch) => {
    console.log("logout is called");
    console.log("access code"+Cookies.get(COOKIE_PATH));
    Cookies.remove(COOKIE_PATH)
    dispatch(navigateTo(INITIAL_ROUTE));
    dispatch({type:types.LOGOUT});
}


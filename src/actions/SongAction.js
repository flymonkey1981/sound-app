import * as types from '../constants/ActionsTypes'
import Cookies from "js-cookie";
import {COOKIE_PATH} from "../constants/ApiConstants";

export const playSong = (song) => (dispatch)=>{
    console.log('Play song is called'+song.external_urls);
    //dispatch({type: types.PLAY_SONG, song});
    // var token = Cookies.get(COOKIE_PATH);
    // fetch("https://api.spotify.com/v1/me/player", {
    //     method: "PUT",
    //     headers: {
    //         authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         "play": true,
    //     }),
    // });

}
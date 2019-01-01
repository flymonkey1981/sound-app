import * as SpotifyFunctions from '../utils/spotifyFunctions.js'

import Cookies from "js-cookie";
import {COOKIE_PATH} from "../constants/ApiConstants";
import {INITIAL_ROUTE} from "../constants/RouterConstants";
import {navigateTo} from "./RouterAction";
import * as types from '../constants/ActionsTypes'


export const login = () => (dispatch)=> {
    console.log("login is called");


}

export const initAuth = () =>  (dispatch) => {
    console.log("initAuth is called");
}

export const logout = () => (dispatch) => {
    console.log("logout is called");
    console.log("access code"+Cookies.get(COOKIE_PATH));
    dispatch(navigateTo(INITIAL_ROUTE));
    dispatch({type:types.LOGOUT});
}
/* global history */
/* global location */
/* global window */

import {compileHash} from "../utils/RouterUtils";
import {CHANGE_ROUTE} from "../constants/ActionsTypes";

const pushState = (route)=> {
    const hash = compileHash(route);
    if(window.location.hash!==hash) {
        window.history.pushState({route},'',hash);
    }
};

export const navigateTo = (route, shouldPushState = true) => {
    if(shouldPushState){
        pushState(route);
    }

    return {
        type: CHANGE_ROUTE,
        route,
    };
};


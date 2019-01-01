import {compileHash} from "../utils/RouterUtils";
import {CHANGE_ROUTE} from "../constants/ActionsTypes";

const pushState = (route)=> {
    const hash = compileHash(route);
    if(location.hash!==hash) {
        history.pushState({route},'',hash);
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


import React from 'react';
import { connect } from 'react-redux';
import SongContainer from './SongsContainer';
import LoginContainer from './LoginContainer';
import { initAuth} from '../actions/SessionActions';
import {
    INDEX_PATH,
    PLAYLIST_PATH,
    SONG_PATH,
    SONGS_PATH,
    USER_PATH,
    LOGIN_PATH,
    PRODUCTLIST_PATH
} from '../constants/RouterConstants';
import Root from './Root'
import ProductListContainer from "./ProductListContainer";

const RootContainer = props => <Root {...props}/>;


const mapStateToProps = (state) => {
    const {router} = state;
    return {
        paths: [INDEX_PATH, SONGS_PATH, LOGIN_PATH, PRODUCTLIST_PATH],
        router,
        routes: {
            [INDEX_PATH]: LoginContainer,
            [SONGS_PATH]: SongContainer,
            [LOGIN_PATH]: LoginContainer,
            [PRODUCTLIST_PATH]: ProductListContainer,

        }
    }
}

export default connect(mapStateToProps, {
    initAuth,

})(RootContainer);

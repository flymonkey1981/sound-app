import React from 'react';
import { connect } from 'react-redux';
import SongsContainer from './SongsContainer'
import { initAuth} from '../actions/SessionActions';
import {
    INDEX_PATH,
    PLAYLIST_PATH,
    SONG_PATH,
    SONGS_PATH,
    USER_PATH,
} from '../constants/RouterConstants';
import Root from './Root'

const RootContainer = props => <Root {...props}/>;


const mapStateToProps = (state) => {
    const {router} = state;
    return {
        paths: [INDEX_PATH, SONGS_PATH],
        router,
        routes: {
            [INDEX_PATH]: SongsContainer,
            [SONGS_PATH]: SongsContainer,

        }
    }
}

export default connect(mapStateToProps, {
    initAuth,

})(RootContainer);

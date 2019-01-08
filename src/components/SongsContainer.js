import React from 'react';
import { connect } from 'react-redux';
import { login} from '../actions/SessionActions';
import { playSong} from '../actions/SongAction';
import Song from './Song'

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state) => {
    const { player, playlist, login } = state;

    return {
        user: login.user,
        playlist: playlist,
        song: '123',
    };
};

export default connect(mapStateToProps, {
    login,
    playSong,
})(SongContainer);

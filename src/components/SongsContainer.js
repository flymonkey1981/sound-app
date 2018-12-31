import React from 'react';
import { connect } from 'react-redux';
import { login} from '../actions/SessionActions';
import Song from './Song'

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state) => {
    const { player, playlists } = state;

    return {
        song: '123',
    };
};

export default connect(mapStateToProps, {
    login,
})(SongContainer);

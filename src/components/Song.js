import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    playSong: PropTypes.func.isRequired,
}

class Song extends Component {

    render() {
        const {playlist, playSong} = this.props;
        console.log('Song length is '+ playlist.items.length);

        const renderSongs =  playlist.items.map(
            item => {
                return <div key ={item.track.id}>{item.track.name} <button onClick={()=>{playSong(item.track)}}>Play</button></div>
            }

        );

        return (
            <div>{renderSongs}</div>
        );
    }
}

Song.propTypes =  propTypes;

export default Song;
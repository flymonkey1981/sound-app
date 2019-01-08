import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    playSong: PropTypes.func.isRequired,
    user: PropTypes.object,
}

class Song extends Component {

    render() {
        const {playlist, playSong, user} = this.props;
        console.log('Song length is '+ playlist.items.length);

        const renderSongs =  playlist.items.map(
            item => {
                return <div key ={item.track.id}>
                    {item.track.name}
                    <img src={item.track.album.images[2].url}/>
                    {item.track.artists[0].name}
                <button onClick={()=>{playSong(item.track)}}>Play</button>
                </div>
            }

        );

        return (
            <div>
                {user.username}|{user.age}|{user.postCode}
                {renderSongs}

            </div>

        );
    }
}

Song.propTypes =  propTypes;

export default Song;
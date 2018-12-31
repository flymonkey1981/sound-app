import React, { Component } from 'react';
import './App.css';

import SpotifyContainer from './components/SpotifyContainer';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataReceived: false,
            posts: [],
            authors: [],
            featuredPostIndex: 0,
            otherPosts: [],
        }
    }





    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Old School Shuffle
                </header>

                <div className="spotifyPlayer">
                    <SpotifyContainer/>
                </div>

                <div className="footer">
                    <p>Footer here</p>
                </div>
            </div>
        );
    }
}

export default App;

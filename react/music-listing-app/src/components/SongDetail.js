import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        if (!this.props.song) {
            return (            
                <div>Select a song</div>
            )
        }else{
            return (            
                <div>{this.props.song.title}</div>
            )
        }

    }
};

const mapToStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapToStateToProps)(SongDetail);
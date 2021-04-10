import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Search.css';

import ResultBox from './ResultBox';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            searchType: 'album',
            results: [],
        }
        this.handleBarChange = this.handleBarChange.bind(this);
        this.changeToAlbums = this.changeToAlbums.bind(this);
        this.changeToArtists = this.changeToArtists.bind(this);
        this.changeToTracks = this.changeToTracks.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    handleBarChange(val) {
        this.setState({searchTerm: val});
    }

    changeToAlbums() {
        this.setState({ searchType: 'album' })
    }

    changeToArtists() {
        this.setState({ searchType: 'artist' })
    }

    changeToTracks() {
        this.setState({ searchType: 'track' })
    }

    performSearch(searchTerm) {
        axios.get(`/search?searchTerm=${this.state.searchTerm}&searchType=${this.state.searchType}`)
        .then((response) => {
            this.setState({ results: response.data})
        })}
    
    render() {
        return (
            <div className="search-container">
                <form className="searchbar">
                    <input type="search" onChange={e => this.handleBarChange(e.target.value)}/>
                    <button type="button" onClick={() => this.performSearch(this.state.searchTerm)}>Search</button>
                    
                </form>
                <ResultBox results={this.state.results} searchType={this.state.searchType} />
                <br />
                <div className="type-selection">
                    <button type="button" onClick={() => this.changeToAlbums()}>Albums</button>
                    <button type="button" onClick={() => this.changeToArtists()}>Artists</button>
                    <button type="button" onClick={() => this.changeToTracks()}>Tracks</button>
                </div>
            </div>
        )
    }
}

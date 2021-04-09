import React, { Component } from 'react';
import '../styles/Search.css';

import SearchResult from './SearchResult';

export default class Search extends Component {
    render() {
        return (
            <div className="search-container">
                <form class="searchbar">
                    <input type="search" />
                    <button type="button">Search</button>
                </form>
                <br />
                <div className="type-selection">
                    <button type="button">Albums</button>
                    <button type="button">Artists</button>
                    <button type="button">Tracks</button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import '../styles/ResultBox.css';

import SearchResult from './SearchResult'

export default class ResultBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: this.props.results,
        }
    }

    render() {
        return (
            <div className="resultBox-container">
                <SearchResult results={this.props.results} searchType={this.props.searchType} getListItem={this.props.getListItem} />
            </div>
        )
    }
}

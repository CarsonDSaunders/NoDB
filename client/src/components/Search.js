import React, { Component } from "react";
import axios from "axios";
import "../styles/Search.css";

import ResultBox from "./ResultBox";

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            searchType: "album",
            results: [],
            isShown: false,
        };

        this.handleBarChange = this.handleBarChange.bind(this);
        this.changeToAlbums = this.changeToAlbums.bind(this);
        this.changeToArtists = this.changeToArtists.bind(this);
        this.changeToTracks = this.changeToTracks.bind(this);
        this.clearSearchBar = this.clearSearchBar.bind(this);
        this.performSearch = this.performSearch.bind(this);
        this.getListItem = this.getListItem.bind(this);
    }

    handleBarChange(val) {
        if (val === '') {
            this.clearSearchBar();
        }
        this.setState({ searchTerm: val });
    }

    changeToAlbums() {
        this.clearSearchBar();
        this.setState({ searchType: "album" });
    }

    changeToArtists() {
        this.clearSearchBar();
        this.setState({ searchType: "artist" });
    }

    changeToTracks() {
        this.clearSearchBar();
        this.setState({ searchType: "track" });
    }

    clearSearchBar() {
        this.setState({
            searchTerm: "",
            searchType: "album",
            results: [],
            isShown: false,
        });
    }

    performSearch(searchTerm) {
        if (!this.state.searchTerm) {
            return;
        } else {
            this.setState({ isShown: true });
            axios
                .get(
                    `/search?searchTerm=${this.state.searchTerm}&searchType=${this.state.searchType}`
                )
                .then((response) => {
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].type === "artist") {
                            response.data[i].title = response.data[i].name;
                            response.data[i].artist = "n/a";
                        }
                    }
                    this.setState({ results: response.data });
                });
        }
    }

    getListItem(resultID) {
        let currentSearch = [...this.state.results];
        let filtResult = currentSearch.filter((ele, i) => ele.id === resultID);
        this.props.addListItem(filtResult[0]);
    }

    render() {
        return (
            <div className="search-container">
                <div className="search-intro">
                    <h2 className="intro-text">I want some</h2>
                    <div className="type-selection">
                        <button
                            type="button"
                            className={
                                this.state.searchType === "album"
                                    ? "type-btn active-btn"
                                    : "type-btn"
                            }
                            onClick={() => this.changeToAlbums()}
                        >
                            Album
                        </button>
                        <button
                            type="button"
                            className={
                                this.state.searchType === "artist"
                                    ? "type-btn active-btn"
                                    : "type-btn"
                            }
                            onClick={() => this.changeToArtists()}
                        >
                            Artist
                        </button>
                        <button
                            type="button"
                            className={
                                this.state.searchType === "track"
                                    ? "type-btn active-btn"
                                    : "type-btn"
                            }
                            onClick={() => this.changeToTracks()}
                        >
                            Track
                        </button>
                    </div>
                    <h2 className="intro-text">called</h2>
                </div>
                <br />
                <form className="search">
                    <input
                        id="searchbar"
                        value={this.state.searchTerm}
                        type="search"
                        onChange={(e) => this.handleBarChange(e.target.value)}
                    />
                    <button
                        className="submit"
                        type="button"
                        onClick={() =>
                            this.performSearch(this.state.searchTerm)
                        }
                    >
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
                {this.state.isShown && (<ResultBox className="daBox" results={this.state.results} searchType={this.state.searchType} getListItem={this.getListItem} />)}

                <br />
            </div>
        );
    }
}

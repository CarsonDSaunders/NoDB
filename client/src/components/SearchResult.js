import React, { Component } from 'react';
import '../styles/SearchResult.css';

export default class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.addToList = this.addToList.bind(this);
    }

    addToList(result) {
        console.log('Click') //? How do I add a search result to UserList?
    }    
    
    render() {
        const initResults = this.props.results;
        const resultsArr = initResults.map((ele, i) => {
            if (this.props.searchType === 'album') {
                return (
                    <div key={i} className="result" onClick={(e) => this.addToList(e)}>
                        <img className="resultImg" src={ele.thumbnail} alt="" />
                        <div className="itemInfo">
                            <p className="title">{ele.title}</p>
                            <p className="artist">{ele.artist}</p>
                        </div>
                        <h2 className="popularity">{ele.popularity}</h2>
                    </div>
                )
            } else if (this.props.searchType === 'artist') {
                return (
                    <div key={i} className="result" onClick={(e) => this.addToList(e)}>
                        <img className="resultImg" src={ele.thumbnail} alt="" />
                        <div className="itemInfo">
                            <p className="artist-title" >{ele.name}</p>
                        </div>
                        <h2 className="popularity">{ele.popularity}</h2>
                    </div>
                )
            } else if (this.props.searchType === 'track') {
                return (
                    <div key={i} className="result" onClick={(e) => this.addToList(e)}>
                        <img className="resultImg" src={ele.thumbnail} alt="" />
                        <div className="itemInfo">
                            <p className="title">{ele.title}</p>
                            <p className="artist">{ele.artist}</p>
                        </div>
                        <h2 className="popularity">{ele.popularity}</h2>
                    </div>
                )
            } else {
                return (<h2>Unable to build result</h2>)
            }
            
        })
        return (
            <div className="searchResult">
                {resultsArr}
            </div>
        )
    }
}

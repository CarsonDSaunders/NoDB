import React, { Component } from 'react';
import '../styles/SearchResult.css';
import placeholder from '../styles/Placeholder.png';

export default class SearchResult extends Component {
    render() {
        const initResults = this.props.results;
        const resultsArr = initResults.map((ele, i) => {
            if (this.props.searchType === 'album') {
                const { id, thumbnail, title, artist, popularity } = ele;
                return (
                    <div key={i} id={id} className="result" onClick={(e) => {
                        e.preventDefault();
                        let correctResult = e;
                        if (e.target.parentElement.className === "itemInfo") {
                            correctResult = e.target.parentElement.parentElement.id;
                        } else if (e.target.parentElement.className === 'result'){
                            correctResult = e.target.parentElement.id;
                        } else {
                            correctResult = e.target.id;
                        }
                        this.props.getListItem(correctResult)
                        }}>
                        <img className="resultImg" src={thumbnail ? thumbnail : placeholder} alt="" />
                        <div className="itemInfo">
                            <p className="title">{title}</p>
                            <p className="artist">{artist}</p>
                        </div>
                        <h2 className="popularity">{popularity}</h2>
                    </div>
                )
            } else if (this.props.searchType === 'artist') {
                const { id, thumbnail, title, popularity } = ele;
                return (
                    <div key={i} id={id} className="result" onClick={(e) => {
                        e.preventDefault();
                        let correctResult = e;
                        if (e.target.parentElement.className === "itemInfo") {
                            correctResult = e.target.parentElement.parentElement.id;
                        } else if (e.target.parentElement.className === 'result'){
                            correctResult = e.target.parentElement.id;
                        } else {
                            correctResult = e.target.id;
                        }
                        this.props.getListItem(correctResult)
                        }}>
                        <img className="resultImg" src={thumbnail ? thumbnail : placeholder} alt="" />
                        <div className="itemInfo">
                            <p className="artist-title" >{title}</p>
                        </div>
                        <h2 className="popularity">{popularity}</h2>
                    </div>
                )
            } else if (this.props.searchType === 'track') {
                const { id, thumbnail, title, artist, popularity } = ele;
                return (
                    <div key={i} id={id} className="result" onClick={(e) => {
                        e.preventDefault();
                        let correctResult = e;
                        if (e.target.parentElement.className === "itemInfo") {
                            correctResult = e.target.parentElement.parentElement.id;
                        } else if (e.target.parentElement.className === 'result'){
                            correctResult = e.target.parentElement.id;
                        } else {
                            correctResult = e.target.id;
                        }
                        this.props.getListItem(correctResult)
                        }}>
                        <img className="resultImg" src={thumbnail ? thumbnail : placeholder} alt="" />
                        <div className="itemInfo">
                            <p className="title">{title}</p>
                            <p className="artist">{artist}</p>
                        </div>
                        <h2 className="popularity">{popularity}</h2>
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

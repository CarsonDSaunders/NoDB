import React, { Component } from 'react';
import placeholder from '../styles/Placeholder.png'
import '../styles/ListItem.css';

export default class ListItem extends Component {
    render() {
        const userList = this.props.currentList
        const listArr = userList.map((ele, i) => {
            if (ele.type === 'album') {
                return (
                    <div key={i} id={ele.id} className="list-item">
                        <img className="listImg" src={ele.thumbnail ? ele.thumbnail : placeholder} alt="" />
                        <div className="itemInfo">
                            <p className="title">{ele.title}</p>
                            <p className="artist">{ele.artist}</p>
                        </div>
                        <h2 className="popularity">{ele.popularity}</h2>
                    </div>
                )
            } else if (ele.type === 'artist') {
                return (
                    <div key={i} className="list-item">
                        <img className="resultImg" src={ele.thumbnail ? ele.thumbnail : placeholder} alt="" />
                        <div className="itemInfo">
                            <p className="artist-title" >{ele.name}</p>
                        </div>
                        <h2 className="popularity">{ele.popularity}</h2>
                    </div>
                )
            } else if (ele.type === 'track') {
                return (
                    <div key={i} className="list-item">
                        <img className="resultImg" src={ele.thumbnail ? ele.thumbnail : placeholder} alt="" />
                        <div className="itemInfo">
                            <p className="title">{ele.title}</p>
                            <p className="artist">{ele.artist}</p>
                        </div>
                        <h2 className="popularity">{ele.popularity}</h2>
                    </div>
                )
            }
        })
        return (
            <div className="allListItems">
                {listArr}
            </div>
        )
    }
}

import React, { Component } from 'react';
import { convertArrayToCSV } from 'convert-array-to-csv';
import '../styles/UserList.css';

import ListItem from './ListItem'

export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.handleExport = this.handleExport.bind(this);
    }

    handleExport() {
        if (this.props.currentList.length === 0) {
            return;
        } else {
        let listOrdered = [];
        for (let i = 0; i < this.props.currentList.length; i++) {
            let currentItem = {};
            currentItem.listId = this.props.currentList[i].listId;
            currentItem.type = this.props.currentList[i].type;
            currentItem.title = this.props.currentList[i].title;
            currentItem.artist = this.props.currentList[i].artist;
            currentItem.id = this.props.currentList[i].id;
            currentItem.popularity = this.props.currentList[i].popularity;
            currentItem.thumbnail = this.props.currentList[i].thumbnail;
            currentItem.userNote = this.props.currentList[i].userNote;            
            listOrdered.push(currentItem);
        }
        console.log(listOrdered)
        const csvFromArrayOfObjects = convertArrayToCSV(listOrdered);
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvFromArrayOfObjects);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'popularify_list.csv';
        hiddenElement.click();
    }
    }

    render() {
        const userList = this.props.currentList

        return (
            <div className="list-container">
                <div className="list-header">
                    <button className="clearBtn" onClick={() => this.props.clearUserList()}>Clear</button>
                    <h2 className="list-title">My List</h2>
                    <button className="exportBtn" onClick={() => this.handleExport()}>Export</button>
                </div>
                <ul className="list-point">
                    {userList.map((ele, i) => {
                        return <ListItem key={i} id={ele.id} item={ele} deleteListItem={this.props.deleteListItem} addNoteValue={this.props.addNoteValue} />
                    })}
                </ul>
            </div>
        )
    }
}
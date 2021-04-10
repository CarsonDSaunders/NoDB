import React, { Component } from 'react';
import axios from 'axios';
import '../styles/UserList.css';

import ListItem from './ListItem'

export default class UserList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    updateNote() {
        // axios.put('')
    }

    render() {
        return (
            <div className="list-container">
                <h2 className="list-header">My List</h2>
                <button className="clear">Clear</button>
                <button className="export">Export</button>
                <ListItem onChange={this.componentDidMount} currentList={this.props.currentList} />
            </div>
        )
    }
}
import React, { Component } from 'react';
import '../styles/UserList.css';

import ListItem from './ListItem'

export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
        }
    }
    
    render() {
        return (
            <div className="list-container">
                <h2 className="list-header">My List</h2>
                <ListItem />
            </div>
        )
    }
}
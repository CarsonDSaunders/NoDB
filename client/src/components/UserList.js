import React, { Component } from 'react';
import '../styles/UserList.css';

import ListItem from './ListItem'

export default class UserList extends Component {
    render() {
        return (
            <div>
            <h2>List</h2>
                <ListItem />
            </div>
        )
    }
}
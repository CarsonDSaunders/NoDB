import React from 'react';
import './styles/App.css';
import axios from 'axios';

import Header from './components/Header'
import Search from './components/Search'
import UserList from './components/UserList'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Search />
        <hr />
        <UserList />
        <Footer />
      </div>
    )
  }
}

export default App;


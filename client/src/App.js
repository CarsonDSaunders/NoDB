import React from 'react';
import './styles/App.css';

import Header from './components/Header'
import Search from './components/Search'
import UserList from './components/UserList'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
    }

  }



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


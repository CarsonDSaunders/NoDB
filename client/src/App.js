import React from 'react';
import axios from 'axios'
import './styles/App.css';

import Header from './components/Header'
import Search from './components/Search'
import UserList from './components/UserList'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentList: [],
    }

    this.addListItem = this.addListItem.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  addListItem(result) {
    this.addToList(result)
  }

  addToList(result) {
    const newItem = {...result};
    console.log(newItem)
    axios.post('/list', newItem )
    .then(() => {
      axios.get('/list')
      .then((response) => {
        this.setState({ currentList: response.data})
      })
    })
    .catch((error) => {console.error(error)})
}

  render() {
    return (
      <div id="App">
        <Header />
        <Search addListItem={this.addListItem}/>
        <hr id="divider" />
        <UserList currentList={this.state.currentList} />
        <Footer />
      </div>
    )
  }
}

export default App;

import React from "react";
import axios from "axios";
import "./styles/App.css";
import BGVideo from "./styles/bgVideo.mp4"

import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentList: [],
        };

        this.addListItem = this.addListItem.bind(this);
        this.addToList = this.addToList.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.clearUserList = this.clearUserList.bind(this);
        this.addNoteValue = this.addNoteValue.bind(this);
    }

    addListItem(result) {
        this.addToList(result);
    }

    addToList(result) {
        const newItem = { ...result };
        newItem.userNote = "";
        axios
            .post("/list", newItem)
            .then(() => {
                axios.get("/list").then((response) => {
                    this.setState({ currentList: response.data });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    deleteListItem() {
        axios
            .delete("/list/:id")
            .then((response) => {
                this.setState({ currentList: response.data });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    clearUserList() {
        for (let i = 0; i < this.state.currentList.length; i++) {
            axios
                .delete("/list/:id")
                .then((response) => {
                    this.setState({ currentList: response.data });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        this.setState({ currentList: [] });
    }

    addNoteValue(val, itemID) {
        // let updatedItem = this.state.currentList[ItemID];
        // let int
        console.log(val);
        console.log(itemID);
        axios
            .put(`/list/${itemID}`, { userNote: val })
            .then(() => {
                axios.get("/list").then((response) => {
                    this.setState({ currentList: response.data });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div id="App">
            <video playsInline autoPlay muted loop poster="https://pasteboard.co/JXNSquE.png" id="bgVideo">
              <source src={ BGVideo } type='video/mp4' />
            </video>
                <Header />
                <Search addListItem={this.addListItem} />
                <div className="divider-container">
                  <hr id="divider" />
                </div>
                <UserList
                    currentList={this.state.currentList}
                    deleteListItem={this.deleteListItem}
                    addNoteValue={this.addNoteValue}
                    clearUserList={this.clearUserList}
                />
                <Footer />
            </div>
        );
    }
}

export default App;

import React from "react";
import axios from "axios";
import "./styles/App.css";
import BGImg from "./styles/BGFinal.png";

import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentList: [],
            avgPopularity: 0,
        };

        this.addListItem = this.addListItem.bind(this);
        this.addToList = this.addToList.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.clearUserList = this.clearUserList.bind(this);
        this.addNoteValue = this.addNoteValue.bind(this);
        this.updateAvgPopularity = this.updateAvgPopularity.bind(this);
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
                    this.updateAvgPopularity();
                });
            })
            .catch((error) => {
                console.error(error);
            });
        
    }

    deleteListItem(id) {
        axios
            .delete(`/list/${id}`)
            .then((response) => {
                this.setState({ currentList: response.data });
                this.updateAvgPopularity();
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
        this.setState({ currentList: [], avgPopularity: 0 });
    }

    addNoteValue(val, itemID) {
        console.log(val);
        console.log(itemID);
        axios
            .put(`/list/${itemID}`, { userNote: val })
            .then(() => {
                axios.get("/list").then((response) => {
                    this.setState({ avgPopularity: 0 });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateAvgPopularity() {
        this.setState({ avgPopularity: 0 });
        let list = this.state.currentList;
        let avgPopularity = this.state.avgPopularity;
        for (let i = 0; i < list.length; i++) {
            avgPopularity += list[i].popularity;
        }
        avgPopularity = avgPopularity / list.length;
        this.setState({ avgPopularity: avgPopularity });
    }

    render() {
        return (
            <div id="App">
                <img id="bgImg" src={BGImg} alt="People partying" />
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
                <Footer avgPopularity={this.state.avgPopularity} />
            </div>
        );
    }
}

export default App;

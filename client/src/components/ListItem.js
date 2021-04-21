import React, { Component } from "react";
import placeholder from "../styles/Placeholder.png";
import "../styles/ListItem.css";

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noshow: true,
            textvalue: this.props.item.userNote,
            itemID: this.props.item.listId,
            hasChanged: false,
        };

        this.determineEditorFn = this.determineEditorFn.bind(this);
        this.handleOpenEditor = this.handleOpenEditor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCloseEditor = this.handleCloseEditor.bind(this);
    }

    determineEditorFn() {
        if (this.state.noshow === true) {
            this.handleOpenEditor();
        } else {
            this.handleCloseEditor();
        }
    }

    handleOpenEditor() {
        if (this.state.noshow === true) {
            this.setState({ noshow: false });
        } else {
            this.setState({ noshow: true });
        }
    }

    handleCloseEditor() {
        this.setState({ noshow: true });
        if (this.state.hasChanged === true) {
            this.props.addNoteValue(this.state.textvalue, this.state.itemID);
        }
        this.setState({ hasChanged: false });
    }

    handleChange(val) {
        this.setState({ textvalue: val });
        this.setState({ hasChanged: true });
    }

    render() {
        if (this.props.item.type === "album") {
            return (
                <li>
                    <div className="list-item">
                        <img
                            className="listImg"
                            src={
                                this.props.item.thumbnail
                                    ? this.props.item.thumbnail
                                    : placeholder
                            }
                            alt=""
                        />
                        <div className="itemInfo">
                            <p className="title">{this.props.item.title}</p>
                            <p className="artist">{this.props.item.artist}</p>
                        </div>
                        <button className="note-editor-btn" onClick={() => this.determineEditorFn()}>
                            <i
                                className={
                                    this.state.noshow
                                        ? "fa fa-pencil"
                                        : "fa fa-pencil pencil-toggle"
                                }
                                aria-hidden="true"
                            />
                        </button>
                        <div
                            className={
                                this.state.noshow ? "note noshow" : "note"
                            }
                        >
                            <form>
                                <input
                                    className="note-text"
                                    type="text"
                                    placeholder="Insert Note Here"
                                    maxLength="50"
                                    value={this.state.textvalue}
                                    onChange={(e) =>
                                        this.handleChange(e.target.value)
                                    }
                                />
                            </form>
                        </div>
                        <p className="listItemType">Album</p>
                        <h2 className="popularity">
                            {this.props.item.popularity}
                        </h2>
                        <button onClick={() => this.props.deleteListItem(this.state.itemID)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </li>
            );
        } else if (this.props.item.type === "artist") {
            return (
                <div className="list-item">
                    <img
                        className="resultImg"
                        src={
                            this.props.item.thumbnail
                                ? this.props.item.thumbnail
                                : placeholder
                        }
                        alt=""
                    />
                    <div className="itemInfo">
                        <p className="artist-title">{this.props.item.title}</p>
                    </div>
                    <button className="note-editor-btn" onClick={() => this.determineEditorFn()}>
                        <i
                            className={
                                this.state.noshow
                                    ? "fa fa-pencil"
                                    : "fa fa-pencil pencil-toggle"
                            }
                            aria-hidden="true"
                        />
                    </button>
                    <div className={this.state.noshow ? "note noshow" : "note"}>
                        <form>
                            <input
                                className="note-text"
                                type="text"
                                placeholder="Insert Note Here"
                                maxLength="50"
                                value={this.state.textvalue}
                                onChange={(e) =>
                                    this.handleChange(e.target.value)
                                }
                            />
                        </form>
                    </div>
                    <p className="listItemType">Artist</p>
                    <h2 className="popularity">{this.props.item.popularity}</h2>
                    <button onClick={() => this.props.deleteListItem(this.state.itemID)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            );
        } else if (this.props.item.type === "track") {
            return (
                <div className="list-item">
                    <img
                        className="resultImg"
                        src={
                            this.props.item.thumbnail
                                ? this.props.item.thumbnail
                                : placeholder
                        }
                        alt=""
                    />
                    <div className="itemInfo">
                        <p className="title">{this.props.item.title}</p>
                        <p className="artist">{this.props.item.artist}</p>
                    </div>
                    <button className="note-editor-btn" onClick={() => this.determineEditorFn()}>
                        <i
                            className={
                                this.state.noshow
                                    ? "fa fa-pencil"
                                    : "fa fa-pencil pencil-toggle"
                            }
                            aria-hidden="true"
                        />
                    </button>
                    <div className={this.state.noshow ? "note noshow" : "note"}>
                        <form>
                            <input
                                className="note-text"
                                type="text"
                                placeholder="Insert Note Here"
                                maxLength="50"
                                value={this.state.textvalue}
                                onChange={(e) =>
                                    this.handleChange(e.target.value)
                                }
                            />
                        </form>
                    </div>
                    <p className="listItemType">Track</p>
                    <h2 className="popularity">{this.props.item.popularity}</h2>
                    <button onClick={() => this.props.deleteListItem(this.state.itemID)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            );
        }
    }
}

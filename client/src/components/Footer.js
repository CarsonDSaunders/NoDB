import React, { Component } from "react";
import "../styles/Footer.css";

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.avgPopularity >= 90) {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            {`Your list's average popularity is `}
                            <strong>{`${this.props.avgPopularity.toPrecision(
                                3
                            )}`}</strong>
                        </h2>
                        <h2 className="footer-text">
                            You must be fun at parties.
                        </h2>
                    </span>
                </div>
            );
        } else if (this.props.avgPopularity >= 80) {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            {`Your list's average popularity is `}
                            <strong>{`${this.props.avgPopularity.toPrecision(
                                3
                            )}`}</strong>
                        </h2>
                        <h2 className="footer-text">
                            Maybe it's time to branch out a bit more??
                        </h2>
                    </span>
                </div>
            );
        } else if (this.props.avgPopularity >= 70) {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            {`Your list's average popularity is `}
                            <strong>{`${this.props.avgPopularity.toPrecision(
                                3
                            )}`}</strong>
                        </h2>
                        <h2 className="footer-text">
                            You're pretty cool, but not <em>too</em> cool.
                        </h2>
                    </span>
                </div>
            );
        } else if (this.props.avgPopularity >= 60) {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            {`Your list's average popularity is `}
                            <strong>{`${this.props.avgPopularity.toPrecision(
                                3
                            )}`}</strong>
                        </h2>
                        <h2 className="footer-text">
                            You're hipster, I'll give you that.
                        </h2>
                    </span>
                </div>
            );
        } else if (this.props.avgPopularity >= 40) {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            {`Your list's average popularity is `}
                            <strong>{`${this.props.avgPopularity.toPrecision(
                                3
                            )}`}</strong>
                        </h2>
                        <h2 className="footer-text-small">
                            I doubt anyone has heard of some of these people...
                        </h2>
                    </span>
                </div>
            );
        } else if (this.props.avgPopularity >= 20) {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            {`Your list's average popularity is `}
                            <strong>{`${this.props.avgPopularity.toPrecision(
                                3
                            )}`}</strong>
                        </h2>
                        <h2 className="footer-text">
                            Are you sure you're from planet Earth?
                        </h2>
                    </span>
                </div>
            );
        } else if (this.props.avgPopularity > 0) {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            {`Your list's average popularity is `}
                            <strong>{`${this.props.avgPopularity.toPrecision(
                                3
                            )}`}</strong>
                        </h2>
                        <h2 className="footer-text">
                            You're lying at this point.
                        </h2>
                    </span>
                </div>
            );
        } else if (this.props.avgPopularity === 0) {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            It's time to add some items to your list!
                        </h2>
                    </span>
                </div>
            );
        } else {
            return (
                <div className="footer-container">
                    <span className="footer-text-span">
                        <h2 className="footer-text">
                            I AM ERROR.
                        </h2>
                    </span>
                </div>
            )
        }
    } 
}

// return (
//     <div className="footer-container">
//         <h2 className="footer-text">Footer</h2>
//     </div>
// );

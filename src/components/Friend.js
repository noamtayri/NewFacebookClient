import React, { Component } from 'react';
import './Friend.scss';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="friend">
                <div className="friendName">
                    {this.props.friend}
                </div>
                <div className="friendButtons">
                    <button className="addFriendButton">add Friend</button>
                    <button className="playButton">play</button>
                </div>
            </div>
        );
    }
}

export default Friend;
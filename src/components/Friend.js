import React, { Component } from 'react';
import './Friend.scss';
import axios from 'axios';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
        };
        this.checkActualFriends();
    }

    checkActualFriends = () => {
        const loginUrl = `users/areFriends.php?reqUser=${this.state.username}&resUser=${this.props.friend}`;
        const baseUrl = `http://localhost/newFacebook/`;
        axios({
            url: loginUrl,
            baseURL: baseUrl,
            method: 'GET',
        })
            .then(res => res.data)
            .then(data => {
                this.setState({ actualFriends: data })
            })
            .catch((e) => {
                if (e.response !== undefined
                    && e.response.data !== undefined
                    && e.response.data.message !== undefined) {
                    alert(e.response.data.message);
                }
            });
    }

    changeFriendshipStatus = () => {
        const loginUrl = `users/request.php?reqUser=${this.state.username}&resUser=${this.props.friend}`;
        const baseUrl = `http://localhost/newFacebook/`;
        axios({
            url: loginUrl,
            baseURL: baseUrl,
            method: 'GET',
        })
            .then(res => res.data)
            .then(data => {
                // alert(data.message);
                this.checkActualFriends()
            })
            .catch((e) => {
                if (e.response !== undefined
                    && e.response.data !== undefined
                    && e.response.data.message !== undefined) {
                    alert(e.response.data.message);
                }
            });
    }

    play = () => {
        console.log('play');
    }

    render() {
        return (
            <div className="friend">
                <div className="friendName">
                    {this.props.friend}
                </div>
                <div className="friendButtons">
                    <button className={this.state.actualFriends ? "removeFriendButton" : "addFriendButton"} onClick={this.changeFriendshipStatus}>
                        {this.state.actualFriends ? 'Remove Friend' : 'Add Friend'}
                    </button>
                    <button className="playButton" onClick={this.play}>play</button>
                </div>
            </div>
        );
    }
}

export default Friend;
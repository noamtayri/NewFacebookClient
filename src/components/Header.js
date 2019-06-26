import React, { Component } from 'react';
import './Header.scss';
import Friend from './Friend';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            searchOnFocus: false,
            search: '',
            friends: []
        };
        this.getAllFriends();
    }

    getAllFriends = () => {
        const loginUrl = `users/search.php?username=`;
        const baseUrl = `http://172.20.10.2/newFacebook/`;
        axios({
            url: loginUrl,
            baseURL: baseUrl,
            method: 'GET',
        })
            .then(res => res.data)
            .then(data => {
                this.setState({ friends: data.records })
            })
            .catch((e) => {
                if (e.response !== undefined
                    && e.response.data !== undefined
                    && e.response.data.message !== undefined) {
                    alert(e.response.data.message);
                }
            });
    }

    friendsToShow = () => {
        if (this.state.search === '') {
            const friendsToSend = [];
            this.state.friends.forEach(friend => {
                friendsToSend.push(friend.username);
            });
            return friendsToSend;
        } else {
            const friendsToSend = [];
            this.state.friends.forEach(friend => {
                const subName = friend.username.substring(0, this.state.search.length);
                if (subName === this.state.search) {
                    friendsToSend.push(friend.username);
                }
            });
            return friendsToSend;
        }
    }

    render() {
        return (
            [
                <div key={'header'} className="Header">
                    <div className="navigate">
                        <a onClick={() => alert('hi')}>Home</a>
                        <a onClick={() => alert('hi')}>My Profile</a>
                    </div>
                    <div className="search">
                        <form>
                            <input
                                className="input"
                                type="text"
                                placeholder="Search"
                                name="search"
                                required
                                onChange={event => this.setState({ search: event.target.value })}
                                onFocus={() => this.setState({ searchOnFocus: true })}
                                onBlur={() => this.setState({ searchOnFocus: false })}
                            />
                        </form>
                        {this.state.searchOnFocus &&
                            <div className="friendsList">
                                {this.friendsToShow().map((friend, i) => (
                                    <Friend key={i} friend={friend} />
                                ))}
                            </div>}
                    </div>
                </div>,
                <div key={'placeholder'} className="headerPlaceholder" />
            ]
        );
    }
}

export default Header;

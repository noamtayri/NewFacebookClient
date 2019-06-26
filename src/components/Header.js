import React, { Component } from 'react';
import './Header.scss';
import Friend from './Friend';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            // friends: ['Ron Ginat', 'Noam Tayri']
            friends: []
        };
    }

    render() {
        return (
            [
                <div className="Header">
                    <div className="navigate">
                        <a onClick={() => alert('hi')}>Home</a>
                        <a onClick={() => alert('hi')}>My Profile</a>
                    </div>
                    <div className="search">
                        <input className="input" type="text" placeholder="Search" name="search" required onChange={event => this.setState({ search: event.target.value })} />
                        <div className="friendsList">
                            {this.state.friends.map((friend, i) => (
                                <Friend key={i} friend={friend} />
                            ))}
                        </div>
                    </div>
                </div>,
                <div className="headerPlaceholder" />
            ]
        );
    }
}

export default Header;

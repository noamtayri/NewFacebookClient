import React, { Component } from 'react';
import './MainPage.scss';
import Header from './Header';
import Post from './Post';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            disableScreen: false,
            newPost: ''
        };
    }

    changeScreenAbility = () => {
        const disableScreen = this.state.disableScreen;
        this.setState({ disableScreen: !disableScreen });
    }

    postPost = () => {
        if (this.state.disableScreen) {
            return;
        }
        alert(`newPost = ${this.state.newPost}`);
    }

    render() {
        return (
            <div className="mainPage">
                <div className="headerWrapper">
                    <Header username={this.state.username} disableScreen={this.state.disableScreen} changeScreenAbility={this.changeScreenAbility} />
                </div>
                <div className="newPost">
                    <div className="newPostHeader" >Create New Post</div>
                    <div className="newPostBody">
                        <textarea className="newPostText" type="text" placeholder="What are you thinking about?" name="newPost" required onChange={event => this.setState({ newPost: event.target.value })} />
                        <button className="newPostButton" onClick={this.postPost}>Post</button>
                    </div>
                </div>
                <div className="postWrapper">
                    <Post disableScreen={this.state.disableScreen} changeScreenAbility={this.changeScreenAbility} />
                    <Post disableScreen={this.state.disableScreen} changeScreenAbility={this.changeScreenAbility} />
                </div>
            </div>
        );
    }
}

export default MainPage;



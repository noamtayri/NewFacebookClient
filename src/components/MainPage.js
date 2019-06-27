import React, { Component } from 'react';
import './MainPage.scss';
import Header from './Header';
import Post from './Post';
import axios from 'axios';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            disableScreen: false,
            newPost: '',
            isNewPostPublic: true,
            feed: []
        };
        this.getFeed();
    }

    getFeed = () => {
        const loginUrl = `posts/feed.php?username=${this.state.username}`;
        const baseUrl = `http://localhost/newFacebook/`;
        axios({
            url: loginUrl,
            baseURL: baseUrl,
            method: 'GET',
        })
            .then(res => res.data)
            .then(data => {
                console.log(data.records);
                // this.setState({feed: data.records})
            })
            .catch((e) => {
                if (e.response !== undefined
                    && e.response.data !== undefined
                    && e.response.data.message !== undefined) {
                    alert(e.response.data.message);
                }
            });
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

    changePublic = () => {
        const current = this.state.isNewPostPublic;
        this.setState({ isNewPostPublic: !current })
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
                        <div className="newPostPermission">
                            <input type="checkbox" checked={this.state.isNewPostPublic} onChange={this.changePublic} />Public
                        </div>
                    </div>
                </div>

                {this.state.feed.map((post) => (
                    <div className="postWrapper">
                        <Post disableScreen={this.state.disableScreen} changeScreenAbility={this.changeScreenAbility} post={post} />
                    </div>
                ))}
            </div>
        );
    }
}

export default MainPage;



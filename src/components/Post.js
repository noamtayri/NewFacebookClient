import React, { Component } from 'react';
import './Post.scss';
import { FaRegThumbsUp } from "react-icons/fa";
import Images from './Images';
import Comments from './Comments';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iLike: false, //initial state need to come from the server
            imgs: [
                'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg',
                'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg',
                'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg',
                'https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorragnarok_lob_crd_03.jpg',
                'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg',
                'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg',
                // 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg',
                // 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorragnarok_lob_crd_03.jpg'
            ],
            comments: [
                {
                    username: 'Waa',
                    date: '1234',
                    content: 'blabla blabla blabla blabla blabla blabla blabla'
                },
                {
                    username: 'Abb',
                    date: '12534',
                    content: '222blabla22 bla2b2l2a bla2b2l2a b2l2a2b2la blabla blabla blabla'
                },
                {
                    username: 'cccc',
                    date: '123423434',
                    content: '45b534l345ab3la34 52b35la2qb534l23a blabla blabla blabla blabla blabla'
                },

            ]
        };
    }

    goToProfile = () => {
        if (this.props.disableScreen) {
            return;
        }
        alert('goToProfile');
    }

    likeClicked = () => {
        if (this.props.disableScreen) {
            return;
        }
        const iLike = this.state.iLike;
        this.setState({ iLike: !iLike })
    }

    render() {
        return (
            <div className="post">
                <div className="author" onClick={this.goToProfile}>
                    blabla
                </div>
                <div className="content">
                    blabla blabla blabla blablablablablabla blabla blabla blabla blabla blabla blablablabla blabla blabla blabla blablablablablabla blabla blabla blabla blabla blabla blablablabla
                </div>
                <div className="imgWrapper">
                    <Images imgs={this.state.imgs} disableScreen={this.props.disableScreen} changeScreenAbility={this.props.changeScreenAbility} />
                </div>
                <div className="likes">
                    <div className="likeNumber">
                        <FaRegThumbsUp style={{ color: '#385898', marginRight: '4px' }} />
                        7
                    </div>
                    <div style={{ width: '99%', borderBottom: '1px solid #dddfe2' }} />
                    <div className="likeButton">
                        <button className={this.state.iLike === true ? "pushed" : ""} onClick={this.likeClicked}>
                            Like
                            <FaRegThumbsUp style={{ marginLeft: '4px' }} />
                        </button>
                    </div>
                </div>
                <div className="commentsWrapper">
                    <Comments comments={this.state.comments} goToProfile={this.goToProfile} disableScreen={this.props.disableScreen} />
                </div>
            </div>
        );
    }
}

export default Post;
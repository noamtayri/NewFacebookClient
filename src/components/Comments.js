import React, { Component } from 'react';
import './Comments.scss';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            newComment: ''
        };
    }

    postComment = () => {
        if (this.props.disableScreen) {
            return;
        }
        alert(`newComment = ${this.state.newComment}`);
    }

    render() {
        return (
            <div className="comments">
                <div style={{ marginTop: '11px', borderBottom: '1px solid #dddfe2', margin: '8px -13px 0 -13px' }} />
                {this.state.comments.map((comment, i) => (
                    <div key={i} className="comment">
                        <div className="bubble">
                            <div className="commentAuthor" onClick={this.goToProfile} onClick={this.props.goToProfile}>
                                {comment.username}
                            </div>
                            <div className="commentContent">
                                {comment.content}
                            </div>
                        </div>
                        <div className="commentDate">
                            {comment.date}
                        </div>
                    </div>
                ))}
                <div className="newComment">
                    <textarea className="newCommentText" type="text" placeholder="Write a Comment..." name="newComment" required onChange={event => this.setState({ newComment: event.target.value })} />
                    <button className="newPostButton" onClick={this.postComment}>Post</button>
                </div>
            </div>
        );
    }
}

export default Comments;
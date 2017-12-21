import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

export class Comment extends Component {
  render() {
    const comment = this.props.comment;
    let avatarStyle = {backgroundImage: 'url(' + this.props.author[0].avatar + ')'};

    return (
      <div className="comment-container">
          <div
            className="avatar"
            style={avatarStyle}
          />
          <div className="content">
            <div className="comment-content">{comment.content}</div>
            <span className="comment-author">{comment.author}</span>
            <div>
              <a href="#" className="delete-link" onClick={e => this.handleDelete(e)}>Delete comment</a>
            </div>
          </div>
        </div>
    )
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.delete(this.props.comment.id);
  }
}

Comment.propTypes = {
  author: PropTypes.array,
  comment: PropTypes.object,
  delete: PropTypes.func
}
import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { Comment } from '../components/Comment';

export class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  sortComments(comments) {
    return comments.sort((prev, curr) => {
      return prev.id < curr.id;
    });
  }

  componentWillUpdate (nextProps, nextState) {
    this.sortComments(nextProps.comments);
  }

  render () {
    const noCommentsMessageStyle = {
      display: (this.props.comments.length === 0) ? 'block' : 'none'
    };

    return (
      <div className="row">
        <h1>Recent Comments</h1>
        <div
          className="no-comments"
          style={noCommentsMessageStyle}
        >
          There is no comments yet... <span>Start typing to be the first!</span>
        </div>
        <ul className="comments-list">
          {this.props.comments.map((comment) => <li className="comments-list__item" key={comment.id}>
            <Comment
              author={this.props.authors.filter(author => {return author.name === comment.author})}
              comment={comment}
              delete={this.props.deleteComment}
            /></li>)}
        </ul>
      </div>
    )
  }
}

CommentList.propTypes = {
  authors: PropTypes.array,
  comments: PropTypes.array,
  deleteComment: PropTypes.func
}
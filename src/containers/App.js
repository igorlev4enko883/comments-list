import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromActions from '../store/actions/actions';

import { Form } from '../components/Form';
import { CommentList } from './CommentList';

import '../styles/style.scss';

/**
 * Main Wrapper
 */

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="container">
          <Form
            authors={this.props.state.authors}
            addComment={this.handleAddComment.bind(this)}
          />
          <CommentList
            authors={this.props.state.authors}
            comments={this.props.state.comments}
            deleteComment={this.props.deleteComment}
          />
        </div>
      </div>
    )
  }

  // fetching data to Store before this Component is rendered first
  componentWillMount () {
    const url = '/assets/mock-data.json';

    fetch(url)
      .then(results => {
        return results.json();
      }).then(data => {
        this.props.setData(data);
      }
    );
  }

  // new comment.id is the length of the whole comments array
  handleAddComment(comment) {
    comment.id = this.props.state.comments.length;

    return this.props.addComment(comment);
  }
}

App.propTypes = {
  state: PropTypes.object,
  setData: PropTypes.func,
  addData: PropTypes.func,
  addComment: PropTypes.func,
  deleteComment: PropTypes.func
}

// using Store State
const mapStateToProps = (state) => {
  return {
    state: state.state
  };
};

// using Store State Actions
const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch(fromActions.setState(data))
    },
    getData: () => {
      dispatch(fromActions.getState())
    },
    addComment: (comment) => {
      dispatch(fromActions.addComment(comment))
    },
    deleteComment: (id) => {
      dispatch(fromActions.deleteComment(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
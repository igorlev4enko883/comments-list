import React, { Component } from 'react';
import { CommentList } from '../containers/CommentList';
import Form from './Form';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      authors: []
    }
  }

  render() {
    return (
      <div>
        <Form
          authors={this.state.authors}
        />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}
import React, { Component } from 'react';
import { generateComment } from '../common/comment.model';
import { PropTypes } from 'prop-types';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      loading: false,
      author: '',
      avatar: '/assets/avatars/anon.png',
      comment: '',
      isValid: true,
    }

    this.state = {
      loading: false,
      author: '',
      avatar: '/assets/avatars/anon.png',
      comment: '',
      isValid: true,
      showError: false,
      showSuccess: false
    }
  }

  render() {

    const avatarStyle = {backgroundImage: 'url(' + this.state.avatar + ')'};
    const errorStyle = {display: this.state.showError ? 'block' : 'none'};
    const successStyle = {display: this.state.showSuccess ? 'block' : 'none'};

    return (
      <div className="row">
        <form
          className={"add-comment-form " + (this.state.loading ? 'loading' : '')}
          onSubmit={e => this.handleFormSubmit(e)}
        >
          <div
            className="avatar"
            style={avatarStyle}
          />
          <div className="form-controls">
            <div className="preloader" />
            <input
              className="form-input"
              type="text"
              value={this.state.comment}
              disabled={this.state.author === '' || this.state.loading}
              placeholder={this.state.author === '' ? 'Please select the Author first...' :'Type in your comment...'}
              onChange={e => this.handleInputChange(e)}
            />
            <select
              className="form-select"
              name="author-name"
              disabled={this.state.loading}
              value={this.state.author}
              onChange={(e) => this.handleAuthorSelection(e)}
            >
              <option
                value=""
                disabled>Choose the Author</option>
              {this.props.authors.map((author) =>  <option value={author.name} key={author.id}>{author.name}</option> )}
            </select>
          </div>
          <span
            className="error"
            style={errorStyle}>
          The comment text should be no longer than 25 characters
        </span>
          <span
            className="success"
            style={successStyle}>
          Congratilations! You have successfully loaded your comment
        </span>
        </form>
      </div>
    )
  }

  // if error or success message was shown - remove it after 3 seconds
  componentDidUpdate () {
    if (this.state.showError || this.state.showSuccess) {
      setTimeout(() => {
        this.hideMessages();
      }, 3000)
    }
  }

  // remove error/success messages
  hideMessages() {
    this.setState({
      showError: false,
      showSuccess: false
    });
  }

  // form submit handle function
  handleFormSubmit(e) {
    e.preventDefault();

    if (this.validateForm()) {

      this.setState({loading: true});

      setTimeout(() => {
        this.props.addComment(generateComment(0, this.state.author, this.state.comment));
        this.setState({...this.initialState, showSuccess: true});
      }, 1500);
    }
  }

  // comment input text change handler
  handleInputChange(e) {
    this.setState({
      comment: e.target.value,
      showError: false
    });
  }

  // author select change handler
  handleAuthorSelection(e) {
    let arr = this.props.authors.filter((author) => {return author.name === e.target.value})

    this.setState({
      author: e.target.value,
      avatar: arr[0].avatar
    });
  }

  // form validation function
  validateForm(e) {
    if (this.state.comment.length > 25 || this.state.comment.length === 0 ) {
      this.setState({
        isValid: false,
        showError: true
      })
      return false;
    } else {
      this.setState({
        isValid: true,
        showError: false,
      })
      return true;
    }
  }
}

Form.propTypes = {
  authors: PropTypes.array,
  addComment: PropTypes.func
}
import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PostForm from "./posts/PostForm";
import toastr from "toastr";
import * as postActions from "../../actions/postActions";
import {browserHistory} from 'react-router';

export class ManagePostPage extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            post: Object.assign({}, props.post),
            errors: {}
        };
        
        this.updatePostState = this.updatePostState.bind(this);
        this.savePost = this.savePost.bind(this);
    }
    
    updatePostState(event) {
        const field = event.target.name;
        let post = this.state.post;
        post[field] = event.target.value;
        return this.setState({post: post});
    }
    
    savePost(event) {
        event.preventDefault();

        if (!this.postFormIsValid()) {
          return;
        }

        this.props.actions.savePost(this.state.post);
        toastr.success('Post saved');
        browserHistory.push('/posts');
    }
    
    postFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.post.title.length < 5) {
          errors.title = 'Title must be at least 5 characters';
          formIsValid = false;
        }

        if (this.state.post.content.length < 30) {
          errors.content = 'Content must be at least 30 characters';
          formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    
    render() {
        return (
            <PostForm
                onChange={this.updatePostState}
                onSave={this.savePost}
                post={this.state.post}
                errors={this.state.errors}
            />
        );
    }
}
    
function mapStateToProps(state, ownProps) {
  let post = {title: '', content: ''};
  return {
    post: post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePostPage);
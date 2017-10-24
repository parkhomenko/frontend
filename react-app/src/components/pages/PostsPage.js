import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as postActions from "../../actions/postActions";
import PostList from "./posts/PostList";

class PostsPage extends Component {
    componentWillMount() {
        this.props.actions.loadPosts();
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                <PostList posts={this.props.posts}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);

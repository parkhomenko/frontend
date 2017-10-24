import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as postActions from "../../actions/postActions";

class PostsCount extends Component {
    componentWillMount() {
        this.props.actions.loadPostsCount();
    }
    
    render() {
        return (
            <div className="post-count">
                <h3>Count of posts: {this.props.postsCount}</h3>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        postsCount: state.postsCount | 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsCount);

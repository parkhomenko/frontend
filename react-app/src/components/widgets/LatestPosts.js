import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as postActions from "../../actions/postActions";

class LatestPosts extends Component {
    componentWillMount() {
        this.props.actions.loadLatestPosts();
    }
    
    postRows(post, index) {
        return <li key={index}>{post.title}</li>
    }
    
    render() {
        return (
            <div className="latest-posts">
                <h3>Latest posts:</h3>
                <ul>
                    {this.props.latestPosts.map(this.postRows)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        latestPosts: state.latestPosts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestPosts);

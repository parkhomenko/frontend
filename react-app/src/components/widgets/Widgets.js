import React, {Component} from "react";
import LatestPosts from "./LatestPosts";
import PostsCount from "./PostsCount";

class Widgets extends Component {
    render() {
        return (
            <section className="posts">
                <LatestPosts/>
                <PostsCount/>
            </section>
        );
    }
}

export default Widgets;

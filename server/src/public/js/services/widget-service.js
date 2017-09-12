import templates from "../templates/templates";
import widgets_data from "../data/widgets";
import $ from "jquery";

const widgets_service = {
    
    latestPosts() {
        widgets_data.getLatestPosts()
            .then((response) => {
                const posts_html = templates.getLatestPosts(response);
                $(".latest-posts").html(posts_html);
            });
    },
    
    postsCount() {
        widgets_data.getPostsCount()
            .then((response) => {
                const posts_html = templates.getPostsCount(response);
                $(".post-count").html(posts_html);
            });
    }
};

export default widgets_service;

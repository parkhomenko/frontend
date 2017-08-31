import posts_tmpl from "../templates/latest-posts-tmpl";
import posts_count_tmpl from "../templates/posts-count-tmpl";
import widgets_data from "../data/widgets";
import _ from "lodash";
import $ from "jquery";

const widgets_service = {
    
    latestPosts() {
        widgets_data.getLatestPosts()
            .then((response) => {
                let posts_html = _.template(posts_tmpl)({
                    items: response
                });
                $(".latest-posts").html(posts_html);
            });
    },
    
    postsCount() {
        widgets_data.getPostsCount()
            .then((response) => {
                let posts_html = _.template(posts_count_tmpl)({
                    count: response
                });
                $(".post-count").html(posts_html);
            });
    }
}

export default widgets_service;

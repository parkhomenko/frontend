import posts_data from "./data/posts";
import posts_tmpl from "./templates/posts-tmpl";
import _ from "lodash";

fillPosts();

function fillPosts() {
    posts_data.getPosts()
        .then((response) => {
            let main_section = document.getElementsByClassName("main")[0];
            let posts_html = _.template(posts_tmpl)({
                items: response
            });
            main_section.innerHTML = posts_html;
        });
}

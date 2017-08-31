import posts_data from "../data/posts";
import posts_tmpl from "../templates/posts-tmpl";
import post_form_tmpl from "../templates/post-form-tmpl";
import post_edit_form_tmpl from "../templates/post-edit-form-tmpl";
import _ from "lodash";
import $ from "jquery";

let post_items = {};

const posts_service = {

    fillPosts() {
        posts_data.getPosts()
            .then((response) => {
                let posts_html = _.template(posts_tmpl)({
                    items: response
                });
                $(".main").html(posts_html);
                post_items = response;
            });
    },

    addPost() {
        const post_name = $("input[name=post-name]")[0].value;
        const post_content = $("textarea[name=post-content]")[0].value;
        const post = {
            title: post_name,
            content: post_content
        };
        posts_data.addPost(post)
            .then((response) => {
                console.log("Post has been added");
                this.fillPosts();
            });
    },

    editPost() {
        const post_id = $("input[name=post-id]")[0].value;
        const post_name = $("input[name=post-name]")[0].value;
        const post_content = $("textarea[name=post-content]")[0].value;
        const post = {
            id: post_id,
            title: post_name,
            content: post_content
        };
        posts_data.editPost(post)
            .then((response) => {
                console.log("Post has been updated");
                this.fillPosts();
            });
    },

    deletePost(post_id) {
        const post = {
            id: post_id
        };
        posts_data.deletePost(post)
            .then((response) => {
                console.log("Post has been deleted");
                this.fillPosts();
            });
    },

    renderPostForm() {
        let post_form_html = _.template(post_form_tmpl)();
        $(".main").html(post_form_html);
    },

    renderPostEditForm(post_id) {
        let post_name = "";
        let post_content = "";
        const items = post_items.filter((item) => {return item.id == post_id;});
        if (items.length != 0) {
            post_name = items[0].title;
            post_content = items[0].content;
        }

        let post_form_html = _.template(post_edit_form_tmpl)({
            post_id: post_id,
            post_name: post_name,
            post_content: post_content
        });

        $(".main").html(post_form_html);
    }
}

export default posts_service;

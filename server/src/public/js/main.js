import "babel-polyfill";

import post_service from "./services/post-service";
import widgets_service from "./services/widget-service";
import $ from "jquery";

$(document).ready(() => {
    fillMainSection();
    widgets_service.latestPosts();
    widgets_service.postsCount();
});

$("#menu-main").on("click", (e) => {
    e.preventDefault();
    fillMainSection();
});

$("#menu-post").on("click", (e) => {
    e.preventDefault();
    post_service.renderPostForm();
    window.history.pushState(null, null, "/post");
});

$(".main").on("submit", "#add-post", (e) => {
    e.preventDefault();
    post_service.addPost();
    window.history.pushState(null, null, "/posts");
});

$(".main").on("submit", "#save-post", (e) => {
    e.preventDefault();
    post_service.editPost();
    window.history.pushState(null, null, "/posts");
});

$(".main").on("click", ".edit-post", (e) => {
    e.preventDefault();
    const post_id = $(e.target).attr("href");
    post_service.renderPostEditForm(post_id);
    window.history.pushState(null, null, "/post");
});

$(".main").on("click", ".delete-post", (e) => {
    e.preventDefault();
    const post_id = $(e.target).attr("href");
    post_service.deletePost(post_id).then(() => {
        window.history.pushState(null, null, "/posts");
    });
});

function fillMainSection() {
    post_service.fillPosts().then((posts_html) => {
        $(".main").html(posts_html);
        window.history.pushState(null, null, "/posts");
    });
}

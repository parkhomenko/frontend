import posts_service from "./services/post-service";
import widgets_service from "./services/widget-service";
import $ from "jquery";

$(document).ready(() => {
    posts_service.fillPosts();
    widgets_service.latestPosts();
    widgets_service.postsCount();
});

$("#menu-main").on("click", (e) => {
    e.preventDefault();
    posts_service.fillPosts();
    window.history.pushState(null, null, "/posts");
});

$("#menu-post").on("click", (e) => {
    e.preventDefault();
    posts_service.renderPostForm();
    window.history.pushState(null, null, "/post");
});

$(".main").on("submit", "#add-post", (e) => {
    e.preventDefault();
    posts_service.addPost();
    window.history.pushState(null, null, "/posts");
});

$(".main").on("submit", "#save-post", (e) => {
    e.preventDefault();
    posts_service.editPost();
    window.history.pushState(null, null, "/posts");
});

$(".main").on("click", ".edit-post", (e) => {
    e.preventDefault();
    const post_id = $(e.target).attr("href");
    posts_service.renderPostEditForm(post_id);
    window.history.pushState(null, null, "/post");
});

$(".main").on("click", ".delete-post", (e) => {
    e.preventDefault();
    const post_id = $(e.target).attr("href");
    posts_service.deletePost(post_id);
    window.history.pushState(null, null, "/posts");
});

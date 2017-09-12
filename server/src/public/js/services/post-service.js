import posts_data from "../data/posts";
import templates from "../templates/templates";
import validation_service from "./validation-service";
import $ from "jquery";

let post_items = {};

const post_service = {

    async fillPosts() {
        try {
            const response = await posts_data.getPosts();
            const posts_html = templates.getPosts(response);
            post_items = response;
            return posts_html;
        } catch (error) {
            throw new Error(error);
        }
    },

    addPost() {
        const post_name = getElementValue("input[name=post-name]");
        const post_content = getElementValue("textarea[name=post-content]");
        
        if (!validation_service.validatePostTitle(post_name)) {
            invalidateElement("input[name=post-name]");
            return;
        }
        
        if (!validation_service.validatePostBody(post_content)) {
            invalidateElement("textarea[name=post-content]");
            return;
        }
        
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
        const post_id = getElementValue("input[name=post-id]");
        const post_name = getElementValue("input[name=post-name]");
        const post_content = getElementValue("textarea[name=post-content]");
        
        if (!validation_service.validatePostTitle(post_name)) {
            invalidateElement("input[name=post-name]");
            return;
        }
        
        if (!validation_service.validatePostBody(post_content)) {
            invalidateElement("textarea[name=post-content]");
            return;
        }
        
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

    async deletePost(post_id) {
        const post = {
            id: post_id
        };
        const response = await posts_data.deletePost(post);
        if (response === 200) {
            console.log(response);
            console.log("Post has been deleted");
            this.fillPosts();
        } else {
            alert("Post has not been deleted");
        }
    },

    renderPostForm() {
        const post_form_html = templates.getPostForm();
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
        
        const post_form_html = templates.getPostEditForm({
            post_id: post_id,
            post_name: post_name,
            post_content: post_content
        });

        $(".main").html(post_form_html);
    },
    
    getPostItems() {
        return post_items;
    }
}

function getElementValue(element) {
    const items = $(element);
    if (items != 0) {
        return items[0].value;
    }
}

function invalidateElement(element) {
    $(element).css("background", "red");
}

export default post_service;

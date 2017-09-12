const templates = {
    
    getLatestPosts(items) {
        let result = "<h3>Latest posts:</h3><ul>";
        for (let i = 0; i < items.length; i++) {
            result += `<li>${items[i].title}</li>`;
        }
        result += "</ul>";
        return result;
    },
    
    getPostEditForm(post) {
        return `<div> \
                <form id=\"save-post\" class=\"posts_form\" method=\"post\"> \
                    <label>Name of the post:</label> \
                    <input name=\"post-name\" type=\"text\" value=\"${post.post_name}\"></input> \
                    <label>Content:</label> \
                    <textarea name=\"post-content\" cols=\"40\" rows=\"5\">${post.post_content}</textarea> \
                    <input name=\"post-id\" type=\"hidden\" value=\"${post.post_id}\"></input> \
                    <input class=\"submit\" type=\"submit\" value=\"Save Post\"></input> \
                </form> \
            </div>`;
    },
    
    getPostForm() {
        return `<div> \
                <form id=\"add-post\" class=\"posts_form\" method=\"post\"> \
                    <label>Name of the post:</label> \
                    <input name=\"post-name\" type=\"text\"></input> \
                    <label>Content:</label> \
                    <textarea name=\"post-content\" cols=\"40\" rows=\"5\"></textarea> \
                    <input class=\"submit\" type=\"submit\" value=\"Add New Post\"></input> \
                </form> \
            </div>`;
    },
    
    getPostsCount(count) {
        return `<h3>Count of posts: ${count}</h3>`;
    },
    
    getPosts(items) {
        let result = "<ul class=\"posts-content\">";
        for (let i = 0; i < items.length; i++) {
            result += "<li>";
            result += "<p>";
            result += `<b>${items[i].title}</b>`;
            result += `<span class=\"post-date\">${items[i].pdate}</span>`;
            result += "</p>";
            result += `${items[i].content}`;
            result += "<p class=\"links\">";
            result += `<a class=\"edit-post\" href=\"${items[i].id}\">Edit</a>&nbsp&nbsp`;
            result += `<a class=\"delete-post\" href=\"${items[i].id}\">Delete</a>`;
            result += "</p>";
            result += "</li>";
        }
        result += "</ul>";
        return result;
    }
}

export default templates;

import db from "../db";

const Post = db.define("posts", {
    id: {type: "serial", key: true},
    title: {type: "text"},
    content: {type: "text"},
    pdate: {type: "date", time: true}
});

export default Post;

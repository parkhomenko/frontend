class Post {
    
    constructor(id, title, content, pdate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.pdate = pdate;
    }
    
    get id() {
        return "getter";
    }
    
    get title() {
        return "getter";
    }
    
    get content() {
        return "getter";
    }
    
    get pdate() {
        return "getter";
    }
}

export default Post;
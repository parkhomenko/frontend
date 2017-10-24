import React from "react";
import TextInput from "../../forms/TextInput";
import TextArea from "../../forms/TextArea";

const PostForm = ({post, onSave, onChange, errors}) => {
    return (
        <form>
            <h1>Manage Post</h1>
            <TextInput
                name="title"
                label="Title"
                value={post.title}
                onChange={onChange}
                error={errors.title}/>
            
            <TextArea
                name="content"
                label="Content"
                value={post.content}
                onChange={onChange}
                error={errors.body}/>
            
            <input
                type="submit"
                value="Save"
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

export default PostForm;

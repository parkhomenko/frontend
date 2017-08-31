var tmpl = "<div> \
                <form id=\"save-post\" class=\"posts_form\" method=\"post\"> \
                    <label>Name of the post:</label> \
                    <input name=\"post-name\" type=\"text\" value=\"<%=post_name%>\"></input> \
                    <label>Content:</label> \
                    <textarea name=\"post-content\" cols=\"40\" rows=\"5\"><%=post_content%></textarea> \
                    <input name=\"post-id\" type=\"hidden\" value=\"<%=post_id%>\"></input> \
                    <input class=\"submit\" type=\"submit\" value=\"Save Post\"></input> \
                </form> \
            </div>";

export default tmpl;

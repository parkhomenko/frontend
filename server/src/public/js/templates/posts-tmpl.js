var tmpl = "<ul class=\"posts-content\"> \
    <% for (var i = 0; i < items.length; i++) { %> \
        <li> \
            <p> \
                <b><%=items[i].title%></b> \
                <span class=\"post-date\"><%=items[i].pdate%></span> \
            </p> \
            <%=items[i].content%> \
            <p class=\"links\"> \
                <a class=\"edit-post\" href=\"<%=items[i].id%>\">Edit</a> \
                <a class=\"delete-post\" href=\"<%=items[i].id%>\">Delete</a> \
            </p> \
        </li> \
    <% }; %> \
</ul>";

export default tmpl;

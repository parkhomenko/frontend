var tmpl = "<ul class=\"posts-content\"> \
    <% for (var i = 0; i < items.length; i++) { %> \
        <li> \
            <p> \
                <b><%=items[i].title%></b> \
                <span class=\"post-date\"><%=items[i].pdate%></span> \
            </p> \
            <%=items[i].content%> \
        </li> \
    <% }; %> \
</ul>";

export default tmpl;
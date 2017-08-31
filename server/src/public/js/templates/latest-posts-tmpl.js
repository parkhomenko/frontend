var tmpl = "<h3>Latest posts:</h3> \
    <ul> \
        <% for (var i = 0; i < items.length; i++) { %> \
            <li><%=items[i].title%></li> \
        <% }; %> \
    </ul>";

export default tmpl;

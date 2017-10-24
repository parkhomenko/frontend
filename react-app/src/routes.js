import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import HomePage from "./components/pages/HomePage";
import PostsPage from "./components/pages/PostsPage";
import ManagePostPage from "./components/pages/ManagePostPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="posts" component={PostsPage} />
        <Route path="post" component={ManagePostPage} />
    </Route>
);

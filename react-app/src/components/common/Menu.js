import React from "react";
import {Link, IndexLink} from "react-router";

const Menu = () => {
    return (
        <section className="tabs">
            <div className="tab-item"><span className="fa fa-commenting" aria-hidden="true"></span>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
            </div>
            <div className="tab-item"><span className="fa fa-commenting" aria-hidden="true"></span>
                <Link to="/posts" activeClassName="active">Posts</Link>
            </div>
            <div className="tab-item"><span className="fa fa-plus-square" aria-hidden="true"></span>
                <Link to="/post" activeClassName="active">New post</Link>
            </div>
        </section>
    );
};

export default Menu;

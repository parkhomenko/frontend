import React, {Component} from "react";
import PropTypes from "prop-types";

class Main extends Component {
    render() {
        return (
            <section className="main">
                {this.props.children}
            </section>
        );
    }
}

Main.PropTypes = {
    children: PropTypes.object.isRequired
};

export default Main;

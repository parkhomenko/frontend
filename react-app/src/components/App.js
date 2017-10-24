import React, {Component} from "react";
import "../styles/App.css";
import Header from "./common/Header";
import Menu from "./common/Menu";
import Widgets from "./widgets/Widgets";
import Main from "./pages/Main";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header/>
        <Menu/>
        <Widgets/>
        <Main children={this.props.children}/>
      </div>
    );
  }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;

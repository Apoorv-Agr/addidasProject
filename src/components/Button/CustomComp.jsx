/* var App = React.createClass({ propTypes: { name: React.PropTypes.string }, render: function() { return <h3>Hello, {this.props.name}!</h3> ; } }); */

import React, { Component } from "react";
import PropTypes from "prop-types";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Hello, {this.props.name}!</h3>
      </div>
    );
  }
}
App.propTypes = {
  name: PropTypes.string,
};

export default App;

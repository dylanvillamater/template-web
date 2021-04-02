import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.scss";


class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="login-screen" className=" container-fluid d-flex justify-content-center align-items-center ">
          Login Screen
      </div>
    );
  }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

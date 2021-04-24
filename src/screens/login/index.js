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

    
          <div className="col-6">
            <form>
              <label htmlFor="login">Login</label>
              <button className="buttonFacebook form-control">Login with Facebook</button>
              <button className="buttonGoogle form-control">Login with Google</button>
            </form>
            <form action="">
              <label htmlFor="">Username</label>
              <input type="text" className="form-control"/>
              <label htmlFor="">Password</label>
              <input type="text" className="form-control"/>
              <button className="buttonLogin form-control">Login</button>
            </form>

 

        </div>



      </div>
    );
  }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

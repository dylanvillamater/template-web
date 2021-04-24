import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.scss";


class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="signup-screen" className=" container-fluid d-flex justify-content-center align-items-center ">

    
          <div className="col-6">
            <form>
              <label htmlFor="login">Signup</label>
              <button className="buttonFacebook form-control">Signup with Facebook</button>
              <button className="buttonGoogle form-control">Signup with Google</button>
            </form>
            <form action="">
              <label htmlFor="">Username</label>
              <input type="text" className="form-control"/>
              <label htmlFor="">Password</label>
              <input type="password" className="form-control"/>
              <label htmlFor="">Retype Password</label>
              <input type="passwor" className="form-control"/>
              <button className="buttonSignup form-control">Signup</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

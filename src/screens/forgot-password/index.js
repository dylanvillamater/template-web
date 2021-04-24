import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.scss";


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="forgot-password-screen" className=" container-fluid d-flex justify-content-center align-items-center ">

    
          <div className="col-6">
            <form>
              <label htmlFor="forgot-password">Forgot Password</label>
            </form>
            <form action="">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control mb-2"/>
              <button className="resetPassword form-control">Reset Password</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

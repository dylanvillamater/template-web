import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.scss";


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="dashboard-screen" className=" container-fluid d-flex justify-content-between align-items-center ">
        <div className="sideMenu d-flex flex-column p-4">
          <div className="logoCompanyname d-flex justify-content-center mb-5">
            <a href=""><img src="" alt="" />Logo</a>
            <a className="ms-2" href="">Company Name</a>
          </div>
          <div className="d-flex flex-column">
            <a className="mb-3" href="">Home</a>
            <a className="mb-3" href="">Courses</a>
            <a className="mb-3" href="">Messages</a>
            <a className="mb-3" href="">Files</a>
            <a className="mb-3" href="">Reports</a>
            <a className="mb-3" href="">Calendar</a>
            <a className="mb-3" href="">Tasks</a>
            <a className="mb-3" href="">Profile</a>
            <a className="mb-3" href="">Settings</a>
          </div>
        </div>

        <div className="main d-flex flex-column p-4">
          <div className="mainTop d-flex justify-content-between">
            <div>
              <input type="text" />
              <div className="btn">Login with Facebook</div>
            </div>

            <div>Name</div>
          </div>
          <div className="d-flex container-fluid p-4 justify-content-between">
            <div className="d-flex col flex-column p-4">
              <label htmlFor="" className="mb-3">List Title</label>
              <div className="form-control mb-2">Item 1</div>
              <div className="form-control mb-2">Item 2</div>
              <div className="form-control mb-2">Item 3</div>
              <div className="form-control mb-2">Item 4</div>
              <div className="form-control mb-2">Item 5</div>
              <div className="form-control mb-2">Item 6</div>
              <div className="form-control mb-2">Item 7</div>
              <div className="form-control mb-2">Item 8</div>
            </div>
            <div className="d-flex col flex-column p-4">
            <label htmlFor="" className="mb-3">List Title</label>
              <div className="form-control d-flex mb-2"> <div className="thumbnail-circle me-4"></div>Item 1</div>
              <div className="form-control d-flex mb-2"> <div className="thumbnail-circle me-4"></div>Item 2</div>
              <div className="form-control d-flex mb-2"> <div className="thumbnail-circle me-4"></div>Item 3</div>
              <div className="form-control d-flex mb-2"> <div className="thumbnail-circle me-4"></div>Item 4</div>
              <div className="form-control d-flex mb-2"> <div className="thumbnail-circle me-4"></div>Item 5</div>
              <div className="form-control d-flex mb-2"> <div className="thumbnail-circle me-4"></div>Item 6</div>
              <div className="form-control d-flex mb-2"> <div className="thumbnail-circle me-4"></div>Item 7</div>
              <div className="form-control d-flex mb-2"> <div className="thumbnail-circle me-4"></div>Item 8</div>
            </div>
            <div className="d-flex col flex-column p-4"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

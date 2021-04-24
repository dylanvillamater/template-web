import React, { Component } from "react";
import { connect } from "react-redux";


class NotFound404 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>Page Not Found</div>
    );
  }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(NotFound404);

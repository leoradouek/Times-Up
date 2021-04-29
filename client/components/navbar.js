import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <p>
      <Link to="/instructions">How to Play</Link>
    </p>
  </div>
);

export default Navbar;
// export default connect(mapState, mapDispatch)(Navbar);

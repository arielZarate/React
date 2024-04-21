import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Soy el Nav</h1>
        <ul>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/users">Users</Link>
          </p>
        </ul>
      </>
    );
  }
}

export default Nav;

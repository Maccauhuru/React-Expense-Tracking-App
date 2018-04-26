import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";


const Header = () => (
  <div>
    <header>
      <h1>_>Expensify App</h1>
    </header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </div>
);

export default Header;
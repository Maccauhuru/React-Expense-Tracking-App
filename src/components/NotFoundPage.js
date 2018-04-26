import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";


const NotFoundPage = () =>(
  <div>
    404! Page not found
    <Link to="/"> Click here to go back Homepage!</Link>
  </div>);

export default NotFoundPage;
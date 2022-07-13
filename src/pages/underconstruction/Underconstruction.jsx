import React from "react";
import { NavLink } from "react-router-dom";


import './Underconstruction.css'
export default function Underconstruction() {
  return (
    <div className="underconstruction-content text-center jumbotron row-10 ">
      <h1 class="display-3">Thank You!</h1>
      <h1 className="underconstruction-content__title">Awesome thing is on the way</h1>
      <p className="lead">
        We are working on this feature and will launch it soon
      </p>
      <div>
      <hr className="hr" />
      <NavLink to="/">
      <a class="btn btn-danger btn-md" role="button">Continue to homepage</a>
      </NavLink>
      </div>
    </div>
  );
}
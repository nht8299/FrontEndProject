import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-content ">
      <section className="jumbotron bg-light ">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="display-3  font-weight-bold" >Title</h1>
              <h2 className="display-5">Coffee Shop Store Management</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorum illum culpa corrupti ut nihil alias incidunt quia, quaerat labore omnis corporis dolores quisquam delectus et. Veritatis asperiores quae rerum.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum odit, esse aliquam cumque repellat, sint dolorem quaerat officia, voluptates vero aspernatur. Nisi nostrum quia, at earum consequatur provident neque ipsam?
              </p>
              <hr className="my-2" />
              <p className="text-gray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cum illum unde, vero accusamus perspiciatis! Provident aperiam earum reiciendis quas odio molestiae itaque ducimus, error animi, fuga ipsa eaque possimus!
              </p>
              <p className="lead">
                <NavLink
                  className="btn btn-warning btn-lg shadow"
                  to="/underconstruction"
                  role="button"
                >
                  Try now for free
                </NavLink>
              </p>
            </div>
            <div className="col-6">
              <img src="logo.png" alt="demo" className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="introduces-box">
        <div className="container">
          <div className="row introduces-list text-center">
            <div className="col-md-4 introduces-item">
              <i className="fa fa-coffee introduces-icon" aria-hidden="true" />

              <h5 className="introduces-title">Simple &amp; Easy to use</h5>
              <h6 className="introduces-txt mb-0">
                Simple, smart and friendly interface.
              </h6>
            </div>
            <div className="col-md-4 introduces-item">
              <i className="fa fa-check introduces-icon" aria-hidden="true" />

              <h5 className="introduces-title">Suitable for all owners</h5>
              <h6 className="introduces-txt mb-0">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a quae molestias velit delectus rerum odio, corporis autem praesentium atque eos, tempora qui rem quas tenetur sed cumque quam necessitatibus.
              </h6>
            </div>
            <div className="col-md-4 introduces-item">
              <i className="fa fa-money introduces-icon" aria-hidden="true" />

              <h5 className="introduces-title">Cost savings</h5>
              <h6 className="introduces-txt mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dicta perferendis atque laudantium ea possimus minima consequatur, provident eligendi, corporis excepturi recusandae ad iste distinctio id! Maiores at minus vel?
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="trial-box mt-5 bg-secondary pt-5 pb-5">
        <div className="container">
          <div className=" text-center">
            <h3 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius tempora dolorum perspiciatis deserunt, vel veritatis earum incidunt itaque, minus maiores at aperiam velit voluptatibus officiis quam nemo non est eaque?</h3>

            <NavLink
              className="btn btn-warning mt-2 shadow"
              to="/underconstruction"
            >
              Try now for free
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

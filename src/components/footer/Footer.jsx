import React from "react";
import './Footer.css'
export default function Footer() {
  return (
    <div class="container">
      <hr />
      <footer>
        <div class="row">
          <div class="col-sm-12 col-md-3">
            <img src="Axon-Global-logo.png" alt="axon logo" class="w-100"></img>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-3">
            <h5>Ho Chi Minh Branch</h5>
            <p>
              Hai Au Building, 39B Truong Son Street, Ward 4, Tan Binh District,
              Ho Chi Minh City, Vietnam
            </p>
            <p>
              <i class="fa fa-phone" aria-hidden="true"></i> +84 28 71 09 1234
            </p>
            <p>
              <i class="fa fa-globe" aria-hidden="true"></i>
              <a href="https://www.axonactive.com">www.axonactive.com</a>
            </p>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-3">
            <h5>Da Nang Branch</h5>
            <p>
              PVcomBank Building, 214 30/4 Street, Hai Chau District, Da Nang,
              Vietnam
            </p>
            <p></p>
            <p>
              <i class="fa fa-phone" aria-hidden="true"></i> +84 236 71 09 12
            </p>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-3">
            <h5>Can Tho Branch</h5>
            <p>
              Toyota Ninh Kieu Building , 57-59A Cach Mang Thang Tam Street,
              Ninh Kieu District, Can Tho, Vietnam
            </p>
            <p></p>
            <p>
              <i class="fa fa-phone" aria-hidden="true"></i> +84 28 71 09 1234
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
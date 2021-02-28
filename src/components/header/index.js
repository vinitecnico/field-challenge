import React from "react";
import logo from "../../assets/logo.png";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="site-logo mb-4">
              <img src={logo} alt="city bikes" />
            </div>
            <h1 className="text-white text-center text-shadow">
              City Bikes - Serving the DC Cycling Community since 1988
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

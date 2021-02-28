import React from "react";
import logo from "../../assets/logo.png";
import history from "../../history";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <nav className="col-md-10">
        <section>
          <img
            onClick={() => history.push("/")}
            src={logo}
            title="CityBikes"
            alt="CityBikes"
          />
          <h1>City Bikes - Serving the DC Cycling Community since 1988</h1>
        </section>
      </nav>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="#">
          <img
            src="./logo.jpeg"
            style={{ maxHeight: "50px" }}
            alt="brand logo"
          />
        </Link>

        {/* <Link
          to={"#"}
          role="button"
          className={isOpen ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setIsOpen((p) => !p)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link> */}
      </div>

      <div
        id="navbarBasicExample"
        className="navbar-menu"
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/"> Home </Link>
          </div>
          <div className="navbar-item">
            <Link to="/products"> Products </Link>
          </div>
          <div className="navbar-item">
            <Link to="/contact"> Contact Us </Link>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Header;

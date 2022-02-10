import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link class="navbar-item" to="#">
          <img
            src="./logo.jpeg"
            style={{ maxHeight: "50px" }}
            alt="brand logo"
          />
        </Link>

        <Link
          to={"#"}
          role="button"
          class={isOpen ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setIsOpen((p) => !p)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div
        id="navbarBasicExample"
        class={isOpen ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <Link to="/"> Home </Link>
          </div>
          <div class="navbar-item">
            <Link to="/products"> Products </Link>
          </div>
          <div class="navbar-item">
            <Link to="/contact"> Contact Us </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

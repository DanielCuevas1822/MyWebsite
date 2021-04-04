import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="header__container col-12 d-flex justify-content-between align-items-center">
            <img src="" alt="logo" />
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/proyects">Mis Proyectos</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

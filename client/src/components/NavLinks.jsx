import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavLinks.css"

const NavLinks = () => {

  const location = useLocation();

  return (
    <>
      {/* // <!-- Background image  --> */}
      <div className={location.pathname === "/" || location.pathname === "/search" ? "bg-search" : location.pathname === "/saved" ? "bg-saved" : "bg-search"} role="img" aria-label="Background image">
      </div>

      <header>
        <nav className={location.pathname === "/" || location.pathname === "/search" ? "navbar navbar-expand-lg navbar-dark nav-search" : location.pathname === "/saved" ? "navbar navbar-expand-lg navbar-dark nav-saved" : "navbar navbar-expand-lg navbar-dark"}>
          <Link to="/" className="navbar-brand">
            Google Books
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/search" className={location.pathname === "/search" ? "nav-link active nav-search" : "nav-link"}>
                  Search
            </Link>
              </li>
              <li className="nav-item">
                <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active nav-saved" : "nav-link"}>
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavLinks;
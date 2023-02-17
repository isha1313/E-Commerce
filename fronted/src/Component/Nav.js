import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Component/Nav.css";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
  };

  const [searchh, setSearch] = useState("");
  const navigate = useNavigate();
  const search = () => navigate(`/search/${searchh}`);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <a className="navbar-brand">
          <img
            alt="logo"
            className="img1"
            src="https://britainlogos.co.uk/images/portfolio/e-commerce/7.jpg"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {auth && (
            <>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <i>Home</i>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/add">
                    <i>Add</i>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/profile">
                    <i>Profile</i>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className="nav-link active"
                    onClick={logout}
                    to="/SignUp"
                  >
                    <i>Log Out</i>
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  aria-label="Search"
                />
                <Link to={`/search/${searchh}`}>
                  <button
                    className="btn btn-outline-light my-2 my-sm-0"
                    onClick={search}
                    type="submit"
                  >
                    search
                  </button>
                </Link>
              </form>
            </>
          )}
          {!auth && (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link active" to="/Login">
                  <i>Log in</i>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;

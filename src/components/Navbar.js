import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">interwiu.com</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/adduser" ? "active" : ""}`} aria-current="page" to="/adduser">Add a user</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/allusers" ? "active" : ""}`} to="/allusers">View All Users</Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login" role="button" type="submit">Login</Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button" type="submit">Signup</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
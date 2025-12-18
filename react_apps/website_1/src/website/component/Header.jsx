


import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid container d-flex justify-content-between align-items-center">
                    <NavLink className="navbar-brand" >Logo</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/Shope">Shope</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Header

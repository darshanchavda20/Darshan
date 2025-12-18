import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* MENU */}
            <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon icon-bar" />
                            <span className="icon icon-bar" />
                            <span className="icon icon-bar" />
                        </button>
                        {/* lOGO TEXT HERE */}
                        <a href="#" className="navbar-brand">Known</a>
                    </div>
                    {/* MENU LINKS */}
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-nav-first">
                            <li><NavLink to="/" className="smoothScroll">Home</NavLink></li>
                            <li><NavLink to="/About" className="smoothScroll">About</NavLink></li>
                            <li><NavLink to="/OurTeachers" className="smoothScroll">OurTeachers</NavLink></li>
                            <li><NavLink to="/Courses" className="smoothScroll">Courses</NavLink></li>
                            <li><NavLink to="/Reviews" className="smoothScroll">Reviews</NavLink></li>
                            <li><NavLink to="/Contact" className="smoothScroll">Contact</NavLink></li>
                            <li><NavLink to="/Login" className="smoothScroll">Login</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><i className="fa fa-phone" /> +65 2244 1100</a></li>
                        </ul>
                    </div>
                </div>


                
            </section>
        </div>

    )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'

function AHeader() {
    return (
        <div>

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
                            <li><NavLink to="/Dashboard" className="smoothScroll">Dashboard</NavLink></li>
                            {/* <li><NavLink to="/Categories" className="smoothScroll">Categories</NavLink></li> */}
                            <li className="dropdown">
                                <NavLink
                                    to="#"
                                    className="dropdown-toggle smoothScroll"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Categories <span className="caret"></span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to="/Add_categories" className="smoothScroll">Add_categories </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Manage_categories" className="smoothScroll">Manage_categories</NavLink>
                                    </li>
                                </ul>
                            </li>

                            {/* <li><NavLink to="/Product" className="smoothScroll">Product</NavLink></li> */}

                             <li className="dropdown">
                                <NavLink
                                    to="#"
                                    className="dropdown-toggle smoothScroll"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Product <span className="caret"></span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to="/Add_product" className="smoothScroll">Add_product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Manage_Product" className="smoothScroll"> Manage_Product</NavLink>
                                    </li>
                                </ul>
                            </li>
                         
                            <li><NavLink to="/Manage_customer" className="smoothScroll">Manage_customer</NavLink></li>
                            <li><NavLink to="/Login" className="smoothScroll">Logout</NavLink></li>
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

export default AHeader

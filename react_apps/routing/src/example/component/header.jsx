import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function header() {
  return (
    <div>
      {/*         
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
      <div class="container-fluid">
        <NavLink class="navbar-brand" href="/">
        <img src="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg" alt=""   width="100px" height="100px" className='rounded-circle ml-5'/>
        </NavLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink class="nav-link" href="/">Link 1</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" href="/">Link 2</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" href="/">Link 3</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav> */}


      <nav class="navbar navbar-expand-sm bg-light ">
        <div class="container-fluid">
          <NavLink className="navbar-brand m-3" style={{ marginLeft: "100px", fontSize: "30px", color: 'black', fontFamily: "bold" }} to="/">T<span style={{ color: "#099AA7" }}>R</span>V<span style={{ color: "#ff0000ff" }}>A</span>V<span style={{ color: "#0000ffff" }}>E</span>L<span style={{ color: "#ff46a6ff" }}>'S</span>
          </NavLink>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar" >
            <ul class="navbar-nav " >
              <li className="nav-item"  >
                <NavLink className="nav-link " to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/Department">Department</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Service">Service</NavLink>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More Pages
                  </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="/Departmen Details" >Departmen Details</Link></li>
                  <li><Link class="dropdown-item" to="/Service Details">Service Details</Link></li>
                  <li><Link class="dropdown-item" to="/Appointment">Appointment</Link></li>
                  <li><Link class="dropdown-item" to="/Testimonials">Testimonials</Link></li>
                  <li><Link class="dropdown-item" to="/Privacy">Privacy</Link></li>
                  <li><Link class="dropdown-item" to="/404">404</Link></li>
                </ul>
              
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Doctor">Doctor</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    </div>
  )
}

export default header


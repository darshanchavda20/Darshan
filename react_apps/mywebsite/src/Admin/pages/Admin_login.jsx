
import React from 'react'
import { Link } from 'react-router-dom'

function Admin_login() {
  return (
    <div>
      {/* <div className="container-fluid bg-light py-5 ">
                <div className="col-md-10 m-auto text-center">
                    <h1 className="h1 ">Admin Login</h1>     
                </div>
            </div> */}
      <div className="text-center mt-5">
        <h1 className="d-inline-block border border-4 border-primary bg-warning px-5 py-2 rounded-3">
          Admin Login
        </h1>
      </div>
<br />

      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form">
            <div className="row">

              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputemail">Email</label>
                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group col-md-12 mb-3">
                <label htmlFor="inputname">Password</label>
                <input type="password" className="form-control mt-1" id="name" name="password" placeholder="Password" />
              </div>
            </div>

            <div className="row">
              <div className="col text-center mt-2">
                <button type="submit" className="btn btn-success btn-lg px-3 ">Login</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Admin_login

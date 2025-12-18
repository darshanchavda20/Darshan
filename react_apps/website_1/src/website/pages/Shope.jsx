import React from 'react'
import { Link } from 'react-router-dom'

function Shope() {
    return (
        <div>

            <h1 className="mt-3 text-center text-primary text-decoration-underline">Our <span className="mt-3 text-center text-danger text-decoration-underline" >Trending</span>Product<span className="mt-3 text-center text-danger text-decoration-underline">'s</span></h1>

            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-3 p-2">
                        <div className="card p-2">
                            <img src="images/1.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title text-danger text-decoration-underline"> Half Running set</h4>
                                <div className="card-price text-danger text-decoration-underline">$99 - $129</div>
                                <Link to="/single-shope" className="btn btn-danger stretched-link mt-3  ">See Profile</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 p-2">
                        <div className="card p-2">
                            <img src="images/m3.png" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">T-Shirt</h4>
                                <div className="card-price">$66 - $99</div>
                                <Link to="/single-shope" className="btn btn-primary stretched-link mt-3">See Profile</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 p-2">
                        <div className="card p-2">
                            <img src="images/m3.png" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Tops Technology</h4>
                                <div className="card-text">Tops Technology</div>
                                <Link to="/single-shope" className="btn btn-primary stretched-link mt-3">See Profile</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 p-2">
                        <div className="card p-2">
                            <img src="images/m3.png" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Tops Technology</h4>
                                <div className="card-text">Tops Technology</div>
                                <Link to="/single-shope" className="btn btn-primary stretched-link mt-3">See Profile</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>







        </div>
    )
}

export default Shope
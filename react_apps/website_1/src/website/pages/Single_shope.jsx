import React from 'react'

function Single_shope() {
    return (
        <div>


          <h1 className="mt-5 text-center text-danger">Trends Men's Wear</h1>


            <div className="container">
                <div className="row align-items-center">


                    <div className="col-md-3   mt-5">
                        <div className="card ">
                            <img src="images/6.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title text-danger text-decoration-underline">Collot Full Dress</h4>
                                <div className="card-price text-danger text-decoration-underline">$88 - $200</div>
                               
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3   mt-5">
                        <div className="card ">
                            <img src="images/m3.png" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Tops Technology</h4>
                                <div className="card-text">Tops Technology</div>
                                <a to="/single-shope" className="btn btn-primary stretched-link mt-3">See Profile</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3   mt-5">
                        <div className="card ">
                            <img src="images/m3.png" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Tops Technology</h4>
                                <div className="card-text">Tops Technology</div>
                                <a to="/single-shope" className="btn btn-primary stretched-link mt-3">See Profile</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3   mt-5">
                        <div className="card ">
                            <img src="images/m3.png" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">Tops Technology</h4>
                                <div className="card-text">Tops Technology</div>
                                <a to="/single-shope" className="btn btn-primary stretched-link mt-3">See Profile</a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Single_shope
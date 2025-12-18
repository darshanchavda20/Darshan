import React from 'react'
// <img className="img-fluid" src="images/m3.png" alt="" />
function Home() {
    return (
        <div>
            <section className="hero py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Text */}
                        <div className="col-md-6">
                            <h5 className="text-secondary">Trends...</h5>
                            {/* <h1 className="fw-bold text-dange" >Super Value Deals</h1> */}
                            <h1 className="fw-bold text-danger">Super Value Deals</h1>

                            <h1 className="fw-bold">On All Products</h1>
                            <p className="mt-3 mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                            </p>
                            <button className="btn btn-outline-danger">
                              Shop Now
                            </button>
                        </div>
                        {/* Right Image */}
                        <div className="col-md-6 text-center">
                           <img className="img-fluid" src="images/m3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
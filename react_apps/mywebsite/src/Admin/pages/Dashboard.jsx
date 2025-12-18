import React from 'react'

function About() {
    return (
        <div>
            {/* ABOUT */}
            <section id="about">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-6 col-sm-12">
                            <img src="images/slider-image2" alt="" />
                        </div> */}

                        <div className="col-md-6 col-sm-12">
                            <img src="/images/slider-image2.jpg"  alt="About"  className="img-fluid" style={{width:'100%', borderRadius:'20% ', marginTop:'40px'}} />
                        </div>
                        <div className="col-md-offset-1 col-md-4 col-sm-12">
                            <div className="entry-form">
                                <form action="#" method="post">
                                    <h2>Signup today</h2>
                                    <input type="text" name="full name" className="form-control" placeholder="Full name" required />
                                    <input type="email" name="email" className="form-control" placeholder="Your email address" required />
                                    <input type="password" name="password" className="form-control" placeholder="Your password" required />
                                    <button className="submit-btn form-control" id="form-submit">Get started</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About
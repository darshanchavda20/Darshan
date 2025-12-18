import React from 'react'

function OurTeachers() {
    return (
        <div>
            {/* TEAM */}
            <section id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h2>Teachers <small>Meet Professional Trainers</small></h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src="images/author-image1.jpg" className="img-responsive" alt />
                                </div>
                                <div className="team-info">
                                    <h3>Mark Wilson</h3>
                                    <span>I love Teaching</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href="#" className="fa fa-facebook-square" attr="facebook icon" /></li>
                                    <li><a href="#" className="fa fa-twitter" /></li>
                                    <li><a href="#" className="fa fa-instagram" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src="images/author-image2.jpg" className="img-responsive" alt />
                                </div>
                                <div className="team-info">
                                    <h3>Catherine</h3>
                                    <span>Education is the key!</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href="#" className="fa fa-google" /></li>
                                    <li><a href="#" className="fa fa-instagram" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src="images/author-image3.jpg" className="img-responsive" alt />
                                </div>
                                <div className="team-info">
                                    <h3>Jessie Ca</h3>
                                    <span>I like Online Courses</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href="#" className="fa fa-twitter" /></li>
                                    <li><a href="#" className="fa fa-envelope-o" /></li>
                                    <li><a href="#" className="fa fa-linkedin" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src="images/author-image4.jpg" className="img-responsive" alt />
                                </div>
                                <div className="team-info">
                                    <h3>Andrew Berti</h3>
                                    <span>Learning is fun</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href="#" className="fa fa-twitter" /></li>
                                    <li><a href="#" className="fa fa-google" /></li>
                                    <li><a href="#" className="fa fa-behance" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default OurTeachers
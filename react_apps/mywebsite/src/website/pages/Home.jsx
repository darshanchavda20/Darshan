import React from 'react'

function Home() {
    return (
        <div>
            {/* HOME */}
           <img src="images/slider-image1.jpg" style={{width:'100%',height:'600px'}}  />


            <section id="home">
                <div className="row">
                    <div className="owl-carousel owl-theme home-slider">
                        <div className="item item-first">
                            <div className="caption">
                                <div className="container">
                                    <div className="col-md-6 col-sm-12">
                                       
                                        <h1>Distance Learning Education Center</h1>
                                        <h3>Our online courses are designed to fit in your industry supporting all-round with latest technologies.</h3>
                                        <a href="#feature" className="section-btn btn btn-default smoothScroll">Discover more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item item-second">
                            <div className="caption">
                                <div className="container">
                                    <div className="col-md-6 col-sm-12">
                                        <h1>Start your journey with our practical courses</h1>
                                        <h3>Our online courses are built in partnership with technology leaders and are designed to meet industry demands.</h3>
                                        <a href="#courses" className="section-btn btn btn-default smoothScroll">Take a course</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item item-third">
                            <div className="caption">
                                <div className="container">
                                    <div className="col-md-6 col-sm-12">
                                        <h1>Efficient Learning Methods</h1>
                                        <h3>Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque eu ex eu urna venenatis sollicitudin ut at libero. Visit <a rel="nofollow" href="https://www.facebook.com/templatemo">templatemo</a> page.</h3>
                                        <a href="#contact" className="section-btn btn btn-default smoothScroll">Let's chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FEATURE */}
            <section id="feature">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="feature-thumb">
                                <span>01</span>
                                <h3>Trending Courses</h3>
                                <p>Known is free education HTML Bootstrap Template. You can modify in any way and use this for your website.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="feature-thumb">
                                <span>02</span>
                                <h3>Books &amp; Library</h3>
                                <p>You are allowed to use Known HTML Template for your commercial or non-commercial websites.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="feature-thumb">
                                <span>03</span>
                                <h3>Certified Teachers</h3>
                                <p>Please spread a word about us. Template redistribution is NOT allowed on any download website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Home
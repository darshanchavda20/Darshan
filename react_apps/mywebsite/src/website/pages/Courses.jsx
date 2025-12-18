// import React from 'react'

// function Courses() {
//     return (
//         <div>
//             {/* Courses */}
//             <section id="courses">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12 col-sm-12">
//                             <div className="section-title">
//                                 <h2>Popular Courses <small>Upgrade your skills with newest courses</small></h2>
//                             </div>
//                             <div className="owl-carousel owl-theme owl-courses">
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="courses-thumb">
//                                             <div className="courses-top">
//                                                 <div className="courses-image">
//                                                     <img src="images/courses-image1.jpg" className="img-responsive" alt />
//                                                 </div>
//                                                 <div className="courses-date">
//                                                     <span><i className="fa fa-calendar" /> 12 / 7 / 2018</span>
//                                                     <span><i className="fa fa-clock-o" /> 7 Hours</span>
//                                                 </div>
//                                             </div>
//                                             <div className="courses-detail">
//                                                 <h3><a href="#">Social Media Management</a></h3>
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                             </div>
//                                             <div className="courses-info">
//                                                 <div className="courses-author">
//                                                     <img src="images/author-image1.jpg" className="img-responsive" alt />
//                                                     <span>Mark Wilson</span>
//                                                 </div>
//                                                 <div className="courses-price">
//                                                     <a href="#"><span>USD 25</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="courses-thumb">
//                                             <div className="courses-top">
//                                                 <div className="courses-image">
//                                                     <img src="images/courses-image2.jpg" className="img-responsive" alt />
//                                                 </div>
//                                                 <div className="courses-date">
//                                                     <span><i className="fa fa-calendar" /> 20 / 7 / 2018</span>
//                                                     <span><i className="fa fa-clock-o" /> 4.5 Hours</span>
//                                                 </div>
//                                             </div>
//                                             <div className="courses-detail">
//                                                 <h3><a href="#">Graphic &amp; Web Design</a></h3>
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                             </div>
//                                             <div className="courses-info">
//                                                 <div className="courses-author">
//                                                     <img src="images/author-image2.jpg" className="img-responsive" alt />
//                                                     <span>Jessica</span>
//                                                 </div>
//                                                 <div className="courses-price">
//                                                     <a href="#"><span>USD 80</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="courses-thumb">
//                                             <div className="courses-top">
//                                                 <div className="courses-image">
//                                                     <img src="images/courses-image3.jpg" className="img-responsive" alt />
//                                                 </div>
//                                                 <div className="courses-date">
//                                                     <span><i className="fa fa-calendar" /> 15 / 8 / 2018</span>
//                                                     <span><i className="fa fa-clock-o" /> 6 Hours</span>
//                                                 </div>
//                                             </div>
//                                             <div className="courses-detail">
//                                                 <h3><a href="#">Marketing Communication</a></h3>
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                             </div>
//                                             <div className="courses-info">
//                                                 <div className="courses-author">
//                                                     <img src="images/author-image3.jpg" className="img-responsive" alt />
//                                                     <span>Catherine</span>
//                                                 </div>
//                                                 <div className="courses-price free">
//                                                     <a href="#"><span>Free</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="courses-thumb">
//                                             <div className="courses-top">
//                                                 <div className="courses-image">
//                                                     <img src="images/courses-image4.jpg" className="img-responsive" alt />
//                                                 </div>
//                                                 <div className="courses-date">
//                                                     <span><i className="fa fa-calendar" /> 10 / 8 / 2018</span>
//                                                     <span><i className="fa fa-clock-o" /> 8 Hours</span>
//                                                 </div>
//                                             </div>
//                                             <div className="courses-detail">
//                                                 <h3><a href="#">Summer Kids</a></h3>
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                             </div>
//                                             <div className="courses-info">
//                                                 <div className="courses-author">
//                                                     <img src="images/author-image1.jpg" className="img-responsive" alt />
//                                                     <span>Mark Wilson</span>
//                                                 </div>
//                                                 <div className="courses-price">
//                                                     <a href="#"><span>USD 45</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="courses-thumb">
//                                             <div className="courses-top">
//                                                 <div className="courses-image">
//                                                     <img src="images/courses-image5.jpg" className="img-responsive" alt />
//                                                 </div>
//                                                 <div className="courses-date">
//                                                     <span><i className="fa fa-calendar" /> 5 / 10 / 2018</span>
//                                                     <span><i className="fa fa-clock-o" /> 10 Hours</span>
//                                                 </div>
//                                             </div>
//                                             <div className="courses-detail">
//                                                 <h3><a href="#">Business &amp; Management</a></h3>
//                                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                             </div>
//                                             <div className="courses-info">
//                                                 <div className="courses-author">
//                                                     <img src="images/author-image2.jpg" className="img-responsive" alt />
//                                                     <span>Jessica</span>
//                                                 </div>
//                                                 <div className="courses-price free">
//                                                     <a href="#"><span>Free</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </div>

//     )
// }

// export default Courses

import React from "react";

const coursesData = [
    {
        id: 1,
        title: "Social Media Management",
        image: "images/courses-image1.jpg",
        author: "Mark Wilson",
        authorImg: "images/author-image1.jpg",
        price: "USD 25",
        date: "12 / 7 / 2018",
        time: "7 Hours",
    },

    
    {
        id: 2,
        title: "Graphic & Web Design",
        image: "images/courses-image2.jpg",
        author: "Jessica",
        authorImg: "images/author-image2.jpg",
        price: "USD 80",
        date: "20 / 7 / 2018",
        time: "4.5 Hours",
    },
    {
        id: 3,
        title: "Marketing Communication",
        image: "images/courses-image3.jpg",
        author: "Catherine",
        authorImg: "images/author-image3.jpg",
        price: "Free",
        date: "15 / 8 / 2018",
        time: "6 Hours",
    },
    {
        id: 4,
        title: "Summer Kids",
        image: "images/courses-image4.jpg",
        author: "Mark Wilson",
        authorImg: "images/author-image1.jpg",
        price: "USD 45",
        date: "10 / 8 / 2018",
        time: "8 Hours",
    },
    {
        id: 5,
        title: "Business & Management",
        image: "images/courses-image5.jpg",
        author: "Jessica",
        authorImg: "images/author-image2.jpg",
        price: "Free",
        date: "5 / 10 / 2018",
        time: "10 Hours",
    },
    {
        id: 6,
        title: "Developer",
        image: "images/courses-image5.jpg",
        author: "Jessica",
        authorImg: "images/author-image2.jpg",
        price: "Free",
        date: "9 / 6 / 2018",
        time: "9 Hours",
    },
];

function Courses() {
    return (
        <section className="container my-5">
            {/* Section Title */}
            <div className="text-center mb-5">
                <h2>
                    Popular Courses <br />
                    <small className="text-muted">
                        Upgrade your skills with newest courses
                    </small>
                </h2>
            </div>
<hr /><hr />
            {/* Courses Grid */}
            <div className="row">
                {coursesData.map((course) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={course.id}>
                        <div className="card h-100 shadow border-0 rounded-4 overflow-hidden">
<br /><hr /><hr />
                            {/* Course Image with spacing */}
                            <div className="p-3">
                                <img
                                        src={course.image}
                                        alt={course.title}
                                        className="img-fluid rounded-circle"
                                        style={{
                                            width: "350px",
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                            </div>

                            {/* Course Body */}
                            <div className="card-body pt-0">
                                <small className="text-muted">
                                    📅 {course.date} &nbsp; | &nbsp; ⏰ {course.time}
                                </small>
                                <h5 className="mt-2">{course.title}</h5>
                            </div>

                            {/* Card Footer */}
                            <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center pb-3">
                                <div className="d-flex align-items-center">
                                    <span className="ms-2">{course.author}</span>
                                </div>
                                <strong>{course.price}</strong>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Courses;

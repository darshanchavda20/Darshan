// import React from 'react'

// function Reviews() {
//     return (
//         <div>
//             {/* TESTIMONIAL */}


//             <section id="testimonial">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12 col-sm-12">
//                             <div className="section-title">
//                                 <h2>Student Reviews <small>from around the world</small></h2>
//                             </div>
//                             <div className="owl-carousel owl-theme owl-client">
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="tst-image">
//                                             <img src="images/tst-image1.jpg"  />
//                                         </div>
//                                         <div className="tst-author">
//                                             <h4>Jackson</h4>
//                                             <span>Shopify Developer</span>
//                                         </div>
//                                         <p>You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone!</p>
//                                         <div className="tst-rating">
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="tst-image">
//                                             <img src="images/tst-image2.jpg" className="img-responsive" alt />
//                                         </div>
//                                         <div className="tst-author">
//                                             <h4>Camila</h4>
//                                             <span>Marketing Manager</span>
//                                         </div>
//                                         <p>Trying something new is exciting! Thanks for the amazing law course and the great teacher who was able to make it interesting.</p>
//                                         <div className="tst-rating">
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="tst-image">
//                                             <img src="images/tst-image3.jpg" className="img-responsive" alt />
//                                         </div>
//                                         <div className="tst-author">
//                                             <h4>Barbie</h4>
//                                             <span>Art Director</span>
//                                         </div>
//                                         <p>Donec erat libero, blandit vitae arcu eu, lacinia placerat justo. Sed sollicitudin quis felis vitae hendrerit.</p>
//                                         <div className="tst-rating">
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-4 col-sm-4">
//                                     <div className="item">
//                                         <div className="tst-image">
//                                             <img src="images/tst-image4.jpg" className="img-responsive" alt />
//                                         </div>
//                                         <div className="tst-author">
//                                             <h4>Andrio</h4>
//                                             <span>Web Developer</span>
//                                         </div>
//                                         <p>Nam eget mi eu ante faucibus viverra nec sed magna. Vivamus viverra sapien ex, elementum varius ex sagittis vel.</p>
//                                         <div className="tst-rating">
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                             <i className="fa fa-star" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div></section>
//         </div>

//     )
// }

// export default Reviews




    import React from "react";

    const reviewsData = [
    {
        id: 1,
        name: "Jackson",
        role: "Shopify Developer",
        image: "images/tst-image1.jpg",
        rating: 5,
        text:
        "You really do help young creative minds to get quality education."
    },
    {
        id: 2,
        name: "Camila",
        role: "Marketing Manager",
        image: "images/tst-image2.jpg",
        rating: 3,
        text:
        "Trying something new is exciting! Thanks for the amazing course."
    },
    {
        id: 3,
        name: "Barbie",
        role: "Art Director",
        image: "images/tst-image3.jpg",
        rating: 4,
        text:
        "Donec erat libero, blandit vitae arcu eu, lacinia placerat justo."
    },
    {
        id: 4,
        name: "Andrio",
        role: "Web Developer",
        image: "images/tst-image4.jpg",
        rating: 4,
        text:
        "Nam eget mi eu ante faucibus viverra nec sed magna."
    }
    ];

    function Reviews() {
    return (
        <section className="container my-5">
        <div className="text-center mb-5">
            <h2>
            Student Reviews <br />
            <small className="text-muted">from around the world</small>
            </h2>
        </div>
    <br /><br />
        <div className="row">
            {reviewsData.map((review) => (
            <div className="col-md-3 col-sm-6 mb-4" key={review.id}>
                <div className="card text-center p-5 h-100 shadow">
                <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-circle mx-auto"
                    style={{ width: "200px", height: "200px" }}
                />
                <h5 className="mt-3">{review.name}</h5>
                <small className="text-muted">{review.role}</small>
                <p className="mt-3">{review.text}</p>
                <div className="text-warning">
                    {"★".repeat(review.rating)}
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
    }

    export default Reviews;

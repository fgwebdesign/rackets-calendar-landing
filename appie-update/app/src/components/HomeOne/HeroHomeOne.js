import React from 'react';

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>Welcome To Appie</span>
                                <h1 className="appie-title">
                                    Manage it all, in this all new system.
                                </h1>
                                <p>
                                    Hanky panky lavatory up the duff jolly good cack brolly is
                                    chinwag zonked happy days sloshed.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-apple" /> Download for iOS
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-google-play" /> Download for
                                            Android
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src='/assets/images/hero-thumb-1.png' alt="" />
                                </div>
                                <div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src='/assets/images/hero-thumb-2.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src='/assets/images/shape/shape-2.png' alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src='/assets/images/shape/shape-3.png' alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src='/assets/images/shape/shape-4.png' alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;

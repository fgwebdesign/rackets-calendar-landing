import React from 'react';

function SponserHomeTwo({ className }) {
    return (
        <>
            <section className={`appie-sponser-area pb-100 ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">
                                    Appie works best with <br />
                                    your favorite platforms
                                </h3>
                                <p>Join over 40,000 businesses worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-sponser-box d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-1.png' alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-2.png' alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-3.png' alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-4.png' alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-5.png' alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-6.png' alt="" />
                                </div>
                            </div>
                            <div className="appie-sponser-box item-2 d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-7.png' alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-8.png' alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-9.png' alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src='/assets/images/sponser-10.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sponser-shape">
                    <img src='/assets/images/sponser-shape.png' alt="" />
                </div>
            </section>
        </>
    );
}

export default SponserHomeTwo;

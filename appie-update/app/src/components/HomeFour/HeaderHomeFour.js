import React, { useEffect } from 'react';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';
import Link from "next/link";

function HeaderHomeFour({ action }) {
    useEffect(() => {
        StickyMenu();
    }, []);
    return (
        <>
            <header className="appie-header-area appie-header-4-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box header-nav-box-5">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    <Link href="/">
                                        <img src='/assets/images/logo-6.png' alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                                <div className="appie-header-main-menu">
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className="appie-btn-box text-right">
                                    <a className="login-btn" href="#">
                                        <i className="fal fa-user"></i> Login
                                    </a>
                                    <a className="main-btn ml-30" href="#">
                                        Get Started
                                    </a>
                                    <div
                                        onClick={(e) => action(e)}
                                        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderHomeFour;

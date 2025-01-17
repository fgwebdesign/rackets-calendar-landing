import React from 'react';
import Link from "next/link";

function BlogHomeRtl({ className }) {
    return (
        <>
            <section className={`appie-blog-area pt-90 pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">أحدث مشاركات المدونة</h3>
                                <p>تخطيطات وأنماط مختلفة لأقسام الفريق.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item text-right mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img src='/assets/images/blog-1.jpg' alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>10 مارس 2022</li>
                                            <li>
                                                <Link href="#">Saas والتطبيق</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <Link href="/news/single-news">
                                            تقديم تصميم تطبيقات جديد لتطبيق iOS الخاص بنا
                                        </Link>
                                    </h3>
                                    <Link href="#">
                                        يتعلم أكثر <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item text-right mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img src='/assets/images/blog-2.jpg' alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>10 مارس 2022</li>
                                            <li>
                                                <Link href="#">Saas والتطبيق</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <Link href="/news/single-news">كيفية إحضار Dolce إلى شركتك</Link>
                                    </h3>
                                    <Link href="#">
                                        يتعلم أكثر <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item text-right mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <img src='/assets/images/blog-3.jpg' alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>10 مارس 2022</li>
                                            <li>
                                                <Link href="#">Saas والتطبيق</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <Link href="/news/single-news">
                                            17 طريقة فعالة لاستثمار تطبيقات الجوال
                                        </Link>
                                    </h3>
                                    <Link href="#">
                                        يتعلم أكثر <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHomeRtl;

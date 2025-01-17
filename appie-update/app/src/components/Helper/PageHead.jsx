import Head from "next/head";
import React from "react";
function PageHead(props) {
    const { title } = props;
    const { metaDes } = props;
    return (
        <Head>
            <title>{title || 'Appie'}</title>
            <meta name="description" content={metaDes||`Appie – React App Landing page Template. is a Responsive template build with the latest design trends and technology. This Appie – React app landing page is a suitable fit for any business that is involved with app, app landing, app landing page, App Showcase, app store, app template, app website, clean app landing, creative app landing page, landing page, mobile, mobile app landing page, modern app Landing, rtl support`} />
            {/*<link*/}
            {/*    rel="icon"*/}
            {/*    href={`${*/}
            {/*        favicon ? process.env.NEXT_PUBLIC_BASE_URL + favicon : "/favico.svg"*/}
            {/*    }`}*/}
            {/*/>*/}
        </Head>
    );
}

export default PageHead;
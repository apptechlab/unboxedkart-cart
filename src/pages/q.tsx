import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Router } from "react-router";
import OurGoalWidget from "../components/home/our-goal-widget";
import Layout from "../components/layout/layout";
import { siteSettings } from "../settings/site-settings";

export default function DownloadApp() {

    // useEffect(() => {
    //     const { p } = Router;
    //     if (p == '/') {
    //         // Router.push('/hello-nextjs')
    //     }
    // });

    return (
        <div>
            {/* <Head>
        <title>Download The App</title>
        <meta name="description" content="Download Unboxedkart on Mobile" />
      </Head> */}
            <div className="bg-unboxedkartBlue font-alegreya p-8">
                <div className="flex flex-row p-2">
                    <Image
                        src={siteSettings.logo.url}
                        alt={siteSettings.logo.alt}
                        height={siteSettings.logo.height}
                        width={siteSettings.logo.width}
                        layout="fixed"
                        loading="eager"
                    />
                </div>
                <div className="p-2">
                    <p className="font-bold text-xl text-white font-trebuchet">Buy</p>
                    <p className="font-bold text-xl text-yellow-500 font-trebuchet">PRE-OWNED</p>
                    <p className="font-bold text-xl text-white font-trebuchet">products at</p>
                    <p className="font-bold text-xl text-yellow-500 font-trebuchet">AFFORDABLE PRICES</p>
                    <div className="h-5"></div>
                </div>
                <div className="flex flex-col m-0">
                    <div className="h-55 w-130">
                        <Link href='https://play.google.com/store/apps/details?id=com.unboxedkart'>
                            <Image
                                alt="download-unboxedkart"
                                height={55}
                                width={150}
                                src={
                                    // "/assets/images/app-store.png"
                                    // "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/web-images/download-removebg-preview-5.png"
                                    "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/web-images/android.png"
                                    // "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/web-images/apple+store.png"
                                    // "https://e7.pngegg.com/pngimages/688/614/png-clipart-google-play-mobile-app-android-application-software-android-text-logo.png"
                                }
                            />
                        </Link>

                    </div>
                    <Link href={'https://apps.apple.com/in/app/unboxedkart/id1550972969'}>
                        <div className="h-55 w-110">
                            <Image
                                alt="download-unboxedkart w-55 h-100"
                                height={55}
                                width={150}
                                src={
                                    // "/assets/images/google-play.png"
                                    // "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/web-images/google+play.png"
                                    "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/web-images/ios.png"
                                    // "https://e7.pngegg.com/pngimages/2/670/png-clipart-logo-app-store-font-brand-product-app-store-play-store-text-logo.png"
                                }
                            //   className={"p-4"}
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <OurGoalWidget />
        </div>
    );
}

DownloadApp.Layout = Layout;
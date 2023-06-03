// import { Head } from "next/document";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CategoriesBlock from "../../components/common/categories-block";
import ConditionsBlock from "../../components/common/conditions-block";
import BestSellingProductsBlock from "../../components/common/products/best-selling-products-block";
import FeaturedProductsBlock from "../../components/common/products/featured-products-block";
import BottomImage from "../../components/home/bottom-image";
import FindAStore from "../../components/home/find-store";
import NeedHelpWidget from "../../components/home/need-help-widget";
import OurGoalWidget from "../../components/home/our-goal-widget";
import StorePickUpWidget from "../../components/home/store-pickup-widget";
import Layout from "../../components/layout/layout";
import DownloadApps from "../../components/widgets/download-apps";
const SellerPage = () => {
    const router = useRouter();
    const seller: string = router.query.seller as string;

    const _sellersdata = {
        'sharadha-enterprises': "Sharadha Enterprises",
        'vinay-enterprises': "Vinay Enterprises"
    }


    const ShowSellerPage = () => {
        return (
            // seller == 'sharadha-enterprises' ? 'Sharadha Enterprises' : ""
            < div >
                <StorePickUpWidget />
                <div className="rounded-2xl bg-white m-2">
                    <p className="text-2xl py-2 px-2 mx-2 text-unboxedkartBlue">{seller == 'vinay-enterprises' ? 'Vinay Enterprises' : "Sharadha Enterprises"}</p>
                    <p className="text-l py-2 px-2 mx-2">{
                        seller == 'vinay-enterprises'
                            ? 'We aim to provide our customers with a trustworthy service through Unboxedkart. Every customer will receive the best possible customer support from Vinay Enterprises.'
                            : "We aim to provide our customers with a trustworthy service through Unboxedkart. Every customer will receive the best possible customer support from Sharadha Enterprises."}
                    </p>
                </div>

                <BestSellingProductsBlock
                    brand={"apple"}
                    category={null}
                    condition={null}
                />
                <FeaturedProductsBlock
                    brand={"apple"}
                    category={null}
                    condition={null}
                />
                <NeedHelpWidget />
                <FindAStore />
                <DownloadApps />
                <OurGoalWidget />
                <BottomImage />

            </div >
        )
    }

    return (
        <>
            {/* <Head>
                <title>Seller Page</title>
                <meta name="description" content="Seller Page - Unboxedkart" />
            </Head> */}


            <div>
                {seller == "sharadha-enterprises" || seller == "vinay-enterprises" ? <ShowSellerPage /> : <p className="text-2xl roundex-2xl px-5 py-3">Invalid Seller Details</p>}
                {/* <p className="text-2xl py-2 px-4 bg-white rounded-2xl">{_sellersdata['sharadha-enterprises']}</p> */}

            </div>
        </>

    );
};

export default SellerPage;

SellerPage.Layout = Layout;

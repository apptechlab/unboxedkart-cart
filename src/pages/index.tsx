import Head from "next/head";
import { useWindowSize } from "react-use";
import BrandsBlock from "../components/common/brand-block";
import CategoriesBlock from "../components/common/categories-block";
import ConditionsBlock from "../components/common/conditions-block";
import BottomImage from "../components/home/bottom-image";
import FindAStore from "../components/home/find-store";
import NeedHelpWidget from "../components/home/need-help-widget";
import OurGoalWidget from "../components/home/our-goal-widget";
import StorePickUpWidget from "../components/home/store-pickup-widget";
import Layout from "../components/layout/layout";
// import DownloadApps from "../components/widgets/download-apps";

export default function Home() {
  const appInfo = {
    imageUrl:
      "https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s360-rw",
    name: "Facebook",
    publisher: "Facebook",
    infoText: "Free - In Google Play",
    linkButtonText: "VIEW",
    linkUrl:
      "https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en",
  };

  const brands = [
    {
      brandName: "Apple",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/apple.webp",
      slug: "apple",
    },
    {
      brandName: "Samsung",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/samsung.webp",
      slug: "samsung",
    },
    {
      brandName: "Google",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/google.webp",
      slug: "google",
    },
    {
      brandName: "Oneplus",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/oneplus.webp",
      slug: "oneplus",
    },
  ];

  const categories = [
    {
      title: "Phone",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/mobile-phone.webp",
      slug: "mobile-phone",
    },
    {
      title: "Laptop",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/laptop.webp",
      slug: "laptop",
    },
    {
      title: "Earphones",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/earphones.webp",
      slug: "earphones",
    },
    {
      title: "iPad",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/tablet.webp",
      slug: "tablet",
    },
    {
      title: "Speaker",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/speaker.webp",
      slug: "speaker",
    },
    {
      title: "ccessory",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/accessories.webp",
      slug: "accessory",
    },
  ];

  const { width } = useWindowSize();

  return (
    <div>
      <Head>
        <title>Unboxedkart Home</title>
        <meta name="description" content="Unboxedkart" />
        {/* <meta
          name="apple-itunes-app"
          content="app-id=myAppStoreID, app-argument=myURL"
        ></meta> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="">
          <StorePickUpWidget />
          {/* <HeroBlock /> */}
          <BrandsBlock brands={brands} slug={"/brand/"} />
          <CategoriesBlock categories={categories} url={"/category/"} />
          <ConditionsBlock slug={"/condition/"} />
          <NeedHelpWidget />
          <FindAStore />
          {/* <DownloadApps /> */}

          <OurGoalWidget />
          <BottomImage />
          {/* <AppBanner
            appInfo={appInfo}
            position="top"
            onClose={() => {
              console.log("onClose called");
            }}
            hidden={false}
            style={{
              zIndex: 10,
            }}
          /> */}
        </div>
      </main>
    </div>
  );
}

Home.Layout = Layout;


// `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. 


// import Link from "../components/widgets/link";

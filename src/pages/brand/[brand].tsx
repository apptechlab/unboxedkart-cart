// import { Head } from "next/document";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CategoriesBlock from "../../components/common/categories-block";
import ConditionsBlock from "../../components/common/conditions-block";
import BestSellingProductsBlock from "../../components/common/products/best-selling-products-block";
import FeaturedProductsBlock from "../../components/common/products/featured-products-block";
import StorePickUpWidget from "../../components/home/store-pickup-widget";
import Layout from "../../components/layout/layout";
const BrandPage = () => {
  const router = useRouter();
  const brand: string = router.query.brand as string;

  const [categories, setCategories] = useState<Array<any>>([]);

  const _data = {
    apple: {
      categories: [
        {
          title: "iPhone",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/apple/mobile-phone.webp",
          slug: "mobile-phone",
        },
        {
          title: "Macbook",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/apple/laptop.webp",
          slug: "laptop",
        },
        {
          title: "Watch",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/apple/watch.webp",
          slug: "watch",
        },
        {
          title: "Airpods",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/apple/earphones.webp",
          slug: "earphones",
        },

        {
          title: "iPad",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/apple/tablet.webp",
          slug: "tablet",
        },
        {
          title: "HomePod",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/apple/speaker.webp",
          slug: "speaker",
        },
        {
          title: "Accessories",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/apple/accessories.webp",
          slug: "accessory",
        },
      ],
    },
    samsung: {
      categories: [
        {
          title: "Mobile phone",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/samsung/mobile-phone.webp",
          slug: "mobile-phone",
        },
        {
          title: "Watch",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/samsung/watch.webp",
          slug: "laptop",
        },
        {
          title: "Earphones",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/samsung/earphones.webp",
          slug: "earphones",
        },
      ],
    },
    oneplus: {
      categories: [
        {
          title: "Mobile phone",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/oneplus/mobile-phone.webp",
          slug: "mobile-phone",
        },
      ],
    },
    google: {
      categories: [
        {
          title: "Mobile phone",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/huawei/mobile-phone.webp",
          slug: "mobile-phone",
        },
        // {
        //   title: "Watch",
        //   imageUrl:
        //     "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/huawei/watch.webp",
        //   slug: "laptop",
        // },
        // {
        //   title: "Earphones",
        //   imageUrl:
        //     "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/huawei/earphones.webp",
        //   slug: "earphones",
        // },
      ],
    },
  };


  useEffect(() => {
    if (brand == "apple") {
      setCategories(_data["apple"]["categories"]);
    } else if (brand == "samsung") {
      setCategories(_data["samsung"]["categories"]);
    } else if (brand == "google") {
      setCategories(_data["google"]["categories"]);
    } else if (brand == "oneplus") {
      setCategories(_data["oneplus"]["categories"]);
    }
  }, [brand, setCategories]);



  // const { width } = useWindowSize();

  // const CoverImage = () => {
  //   return (
  //     <>
  //       <div className="flex mx-auto flex-col relative">
  //         <div className="flex">
  //           <Image
  //             src={`/assets/images/brand-covers/apple-cover.png`}
  //             alt={`apple-cover` || "text-card-thumbnail"}
  //             width={width}
  //             height={width / 3}
  //             className="bg-gray-300 object-cover sm:rounded-md transition duration-200 ease-in-out group-hover:opacity-90"
  //           />
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <>
      {/* <Head>
        <title>Shop by Brand</title>
        <meta name="description" content="Shop By Brand - Unboxedkart" />
      </Head> */}
      <div>
        <StorePickUpWidget />
        <CategoriesBlock
          categories={categories}
          url={`/search?brand=${brand}&category=`}
        />
        <ConditionsBlock
          slug={`/search?brand=${brand}&condition=`}
        />
        <div className="px-2">
          <BestSellingProductsBlock
            brand={brand}
            category={null}
            condition={null}
          />
        </div>
        <div className="px-2">
          <FeaturedProductsBlock
            brand={brand}
            category={null}
            condition={null}
          />
        </div>
        <div className="h-10"></div>
      </div>
    </>

  );
};

export default BrandPage;

BrandPage.Layout = Layout;

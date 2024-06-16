import { ProductInfo } from "@components/single-product/product-info/product-info";
import { useUI } from "@contexts/ui.context";
import { productDescriptionsRef } from "@db/db-references";
import { doc, getDoc } from "@firebase/firestore";
import { useAuth } from "contexts/authContext";
// import Router, { useRouter, withRouter } from "next/router";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { ProductImages } from "src/Components/single-product/product-images/product-images";

function ProductSingleDetails(props: any) {
  const { productData } = props;
  const [isAddedToCart, updateIsAddedToCart] = useState(false);
  const [isAddingToCart, updateIsAddingToCart] = useState(false);
  const { isAuth } = useAuth();
  const { setModalView, openModal } = useUI();

  function handleLogin() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  async function getArray() {
    const docRef = doc(productDescriptionsRef, "2");
    const document = await getDoc(docRef);
    const docData = document.data();
    console.log("firestore data", docData);
  }

  // const timerId = setInterval(() => {
  //   updateIsAddedToCart(true);
  //   updateIsAddingToCart(false);
  // }, 1000);

  // const timerIdNew = setInterval(() => {
  //   updateIsAddedToCart(false);
  //   updateIsAddingToCart(false);
  // }, 1000);

  function handleAddToCart() {
    // if (isAuth) {
    //   isAddedToCart ? handleremoveProductFromcart() : handleAddProductToCart();
    // } else {
    //   handleLogin();
    // }
    isAddedToCart ? handleremoveProductFromcart() : handleAddProductToCart();
  }

  function handleAddProductToCart() {
    updateIsAddingToCart(true);
    updateIsAddedToCart(true);
    updateIsAddingToCart(false);
  }

  function handleremoveProductFromcart() {
    updateIsAddingToCart(true);
    updateIsAddedToCart(false);
    updateIsAddingToCart(false);
  }

  function handleBuyNow() {
    isAuth ? handleBuyProduct() : handleLogin();
  }

  function handleBuyProduct() {}

  async function setCheckoutItems(checkoutItems: any[]) {
    try {
      console.log("running set checkout items functions");
      await fetch(`${process.env.NEXT_PUBLIC_SET_CHECKOUT_ITEMS_URL}`, {
        method: "POST",
        body: JSON.stringify({
          checkoutItems: checkoutItems,
          userId: "123",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log("running set checkout items functions failed");
      console.error(err);
    }
  }

  async function handleShowOrderSummary() {
    console.log("generating product");
    const checkoutItems: any[] = [];
    checkoutItems.push({
      productId: productData.productId,
      count: "1",
    });
    await setCheckoutItems(checkoutItems);
    console.log("generated products", checkoutItems);
    router.push("/my-account/checkout/");
  }

  useEffect(() => {
    getArray();
  }, []);

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row lg:flex-row h-full w-full mb-10 bg-white pl-4">
        <div className="w-full md:w-2/5 lg:2/5 relative mt-10">
          <div className="sticky top-40 left-0 bg-white">
            <ProductImages images={productData.mediaUrls} />
          </div>
        </div>
        <div className="w-full md:w-3/5 lg:w-3/5 min-h-screen flex flex-col ">
          <ProductInfo
            productData={productData}
            handleAddToCart={handleAddToCart}
            handleBuyNow={handleBuyNow}
            isAddedToCart={isAddedToCart}
            isAddingToCart={isAddingToCart}
            handleShowOrderSummary={handleShowOrderSummary}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSingleDetails;



// return (
//   <>
//     <div className="flex relative lg:flex-row sm:flex-col "></div>
//     <div className="flex flex-row h-full w-full">
//       <div className="w-2/5">
//         <ProductImages images={productData.mediaUrls} />
//       </div>
//       <div className="w-3/5 flex flex-col ">
//         <ProductInfo
//           productData={productData}
//           addToCart={addToCart}
//           // addToCartLoader={addToCartLoader}
//           // isSelected={isSelected}
//         />
//       </div>
//     </div>
//   </>
// );

// export async function getServerSideProps() {
//   const query = useRouter().query.slug;
//   const { data, isLoading } = await useProductQuery(query as string);
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       data: data,
//       isLoading: isLoading,
//     }, // will be passed to the page component as props
//   };
// }

// return (
//   <div className="mainDiv">
//     <div className="rowDiv">
//       <div className="staticDiv"></div>
//       <div className="scollableDiv"></div>
//     </div>
//     <div className="relatedProductsDiv"></div>
//     <div className="recentlyViewedProductsDiv"></div>
//   </div>
// );

// return (
//   <div className="relative">
//     <div className="relative md:fixed w-full md:w-7/12 min-h-screen inset-0">
//       <h1 className="absolute bottom-0 left-0 p-20 text-white text-8xl">
//         Benny
//         <br />
//         The Pup
//       </h1>
//       <img
//         src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80"
//         className="object-cover w-full h-full"
//       />
//     </div>
//     <div className="w-full md:w-5/12 ml-auto">
//       <div className="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
//         <h2 className="text-4xl mb-5">Meet Benny</h2>
//         <p className="mb-5">I was born 20 May 2020</p>
//       </div>
//       <div className="bg-red-50 h-screen flex justify-center items-center flex-col p-10">
//         <h2 className="text-4xl mb-5">I love food</h2>
//         <p className="mb-5">Bones, Pallets, and more!</p>
//       </div>
//       <div className="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
//         <h2 className="text-4xl mb-5">I love my humans</h2>
//         <p className="mb-5">
//           My humans are super special to me, and I love them
//         </p>
//       </div>
//     </div>
//     <div>Helo world</div>
//   </div>
// );

// const specsInArray = [
//   {
//     title: "General",
//     values: {
//       "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
//       "Model Number": "MGJ83HN/A",
//       "Model Name": "iPhone 12",
//       Color: "Blue",
//       "Browse Type": "Smartphones",
//       "SIM Type": "Dual Sim",
//       "Hybrid Sim Slot": "No",
//       Touchscreen: "Yes",
//       "OTG Compatible": "No",
//       "Quick Charging": "Yes",
//       "Sound Enhancements": "Built‑in Stereo Speaker",
//     },
//   },
//   {
//     title: "Display features",
//     values: {
//       "Display Size": "15.49 cm (6.1 inch)",
//       Resolution: "2532 x 1170 Pixels",
//       "Resolution Type": "Super Retina XDR Display",
//       "Display Type": "Super Retina XDR Display",
//       "Other Display Features":
//         "Super Retina XDR Display, 6.1 inch (Diagonal) All Screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 2000000:1 Contrast Ratio (Typical), 625 nits Max Brightness (Typical); 1200 nits Max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//     },
//   },
//   {
//     title: "Os & Processor",
//     values: {
//       "Operating System": "iOS 14",
//       "Processor Type": "A14 Bionic Chip with Next Generation Neural Engine",
//     },
//   },
// ];

// const orderedProductSpecs = {
//   "2": {
//     "display features": {
//       "3": { "Resolution Type": "Super Retina XDR Display" },
//       "5": {
//         "Other Display Features":
//           "Super Retina XDR Display, 6.1 inch (Diagonal) All Screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 2000000:1 Contrast Ratio (Typical), 625 nits Max Brightness (Typical); 1200 nits Max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//       },
//       "1": { "Display Size": "15.49 cm (6.1 inch)" },
//       "4": { "Display Type": "Super Retina XDR Display" },
//       "2": { Resolution: "2532 x 1170 Pixels" },
//     },
//     "3": {
//       "Os & Processor features": {
//         "2": {
//           "Processor Type":
//             "A14 Bionic Chip with Next Generation Neural Engine",
//         },
//         "1": { "Operating System": "iOS 14" },
//       },
//     },
//     "1": {
//       general: {
//         "3": { "Model Name": "iPhone 12" },
//         "5": { "Browse Type": "Smartphones" },
//         "6": { "SIM Type": "Dual Sim" },
//         "1": {
//           "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
//         },
//         "4": { Color: "Blue" },
//         "2": { "Model Number": "MGJ83HN/A" },
//       },
//     },
//   },
// };

// const productSpecs = {
//   general: {
//     "In The Box": "iPhone, USB-C to Lightning Cable, Documentation",
//     "Model Number": "MGJ83HN/A",
//     "Model Name": "iPhone 12",
//     Color: "Blue",
//     "Browse Type": "Smartphones",
//     "SIM Type": "Dual Sim",
//     "Hybrid Sim Slot": "No",
//     Touchscreen: "Yes",
//     "OTG Compatible": "No",
//     "Quick Charging": "Yes",
//     "Sound Enhancements": "Built‑in Stereo Speaker",
//   },
//   "display features": {
//     "Display Size": "15.49 cm (6.1 inch)",
//     Resolution: "2532 x 1170 Pixels",
//     "Resolution Type": "Super Retina XDR Display",
//     "Display Type": "Super Retina XDR Display",
//     "Other Display Features":
//       "Super Retina XDR Display, 6.1 inch (Diagonal) All Screen OLED Display, HDR Display, True Tone, Wide Colour (P3), Haptic Touch, 2000000:1 Contrast Ratio (Typical), 625 nits Max Brightness (Typical); 1200 nits Max Brightness (HDR), Fingerprint-resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
//   },
//   "Os & Processor features": {
//     "Operating System": "iOS 14",
//     "Processor Type": "A14 Bionic Chip with Next Generation Neural Engine",
//   },
// };

// const qAndA = {
//   q1: {
//     question: "How is the performance?",
//     answers: [
//       {
//         author: "sunil",
//         designation: "Certified Seller",
//         answer: "Performance is absolutley good",
//       },
//       {
//         author: "vinay",
//         designation: "Certified Seller",
//         answer: "Performance is good",
//       },
//       {
//         author: "Funny",
//         designation: "Certified Buyer",
//         answer: "absolutley fine",
//       },
//     ],
//   },
//   q2: {
//     question: "How is the camera?",
//     answers: [
//       {
//         author: "sunil",
//         designation: "Certified Seller",
//         answer: "Camera is absolutley good",
//       },
//       {
//         author: "vinay",
//         designation: "Certified Seller",
//         answer: "Camera quality is good",
//       },
//       {
//         author: "Funny",
//         designation: "Certified Buyer",
//         answer: "Camera quality is fine",
//       },
//     ],
//   },
//   q3: {
//     question: "How is the Gaming experience?",
//     answers: [
//       {
//         author: "sunil",
//         designation: "Certified Seller",
//         answer: "Gaming experience is absolutley good",
//       },
//       {
//         author: "vinay",
//         designation: "Certified Seller",
//         answer: "Gaming experience is good",
//       },
//       {
//         author: "Funny",
//         designation: "Certified Buyer",
//         answer: "Gaming experience is fine",
//       },
//     ],
//   },
//   q4: {
//     question: "How is the Gaming experience?",
//     answers: [
//       {
//         author: "sunil",
//         designation: "Certified Seller",
//         answer: "Gaming experience is absolutley good",
//       },
//       {
//         author: "vinay",
//         designation: "Certified Seller",
//         answer: "Gaming experience is good",
//       },
//       {
//         author: "Funny",
//         designation: "Certified Buyer",
//         answer: "Gaming experience is fine",
//       },
//     ],
//   },
//   q5: {
//     question: "How accurate is Face ID unlock?",
//     answers: [
//       {
//         author: "sunil",
//         designation: "Certified Seller",
//         answer: "Performance of Face Id is absolutley good",
//       },
//       {
//         author: "vinay",
//         designation: "Certified Seller",
//         answer: "10 out of 10 times",
//       },
//       {
//         author: "Funny",
//         designation: "Certified Buyer",
//         answer: "absolutley fine",
//       },
//     ],
//   },
// };

// const reviews = {
//   r1: {
//     author: "Sunil",
//     title: "its Good",
//     description: "Worth for money",
//     designation: "Certified Buyer",
//     timestamp: "april 2020",
//     overallScore: 4,
//   },
//   r2: {
//     author: "Vinay",
//     title: "Awesome",
//     description: "product is awesome and delivered in just 2 days",
//     designation: "Certified Buyer",
//     timestamp: "march 2020",
//     overallScore: 5,
//   },
//   r3: {
//     author: "Funny",
//     title: "Satisfactory",
//     description: "its good",
//     designation: "Certified Buyer",
//     timestamp: "may 2020",
//     overallScore: 3,
//   },
//   r4: {
//     author: "Manasa",
//     title: "As Expected",
//     description: "product reached my expectations",
//     designation: "Certified Buyer",
//     timestamp: "august 2020",
//     overallScore: 4,
//   },
//   r5: {
//     author: "Abhi",
//     title: "Perfect buy",
//     description: "its working alright for me",
//     designation: "Certified Buyer",
//     timestamp: "sep 2020",
//     overallScore: 5,
//   },
// };

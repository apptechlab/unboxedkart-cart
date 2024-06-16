import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../handler-functions/products/single-product/get-product";
import http from "../../rest-api/utils/http";
import CheckoutItems from "./checkout/checkout-items";
import DeliveryAddress from "./checkout/delivery-address";
import PriceDetails from "./checkout/price-details";
import UserDetails from "./checkout/user-info";

const Checkout = () => {
  const userId = "123";
  const [isLoading, setIsLoading] = useState(true);
  const [checkoutItems, setCheckoutItems] = useState(null);

  const [checkoutItemsCount, setcheckoutItemsCount] = useState(0);
  const [checkoutItemsMrp, setCheckoutItemsMrp] = useState(0);
  const [checkoutItemsTotal, setCheckoutItemsTotal] = useState(0);
  const [checkoutItemsDiscount, setCheckoutItemsDiscount] = useState(0);

  useEffect(() => {
    getCheckoutItems(userId);
  }, []);

  async function getCheckoutItems(userId: string) {
    try {
      const response = await http.get(`/user/checkout-items/${userId}`);
      const data = response.data.checkoutItems;
      setCheckoutItems(data);
      calculatePrice(data);
      setIsLoading(false);
      console.log("checkout items", data);
      // console.log("total price", checkoutItemsTotal);
      // console.log("total discount,", checkoutItemsDiscount);
      // console.log("mrp", checkoutItemsMrp);
      checkoutItemsMrp;
    } catch (err) {
      console.error(err);
    }
  }

  async function newcalculatePrice(checkoutItems: any[], callback: any) {
    let totalMrp = 0;
    let totalCheckoutItemsPrice = 0;
    for (const checkoutItem of checkoutItems) {
      const itemData = await fetchProduct(checkoutItem.productId);
      const mrp = itemData.pricing.price;
      const sellingPrice = itemData.pricing.sellingPrice;
      console.log("previous mrp", totalMrp);
      totalMrp = totalMrp + mrp;
      console.log("recent mrp", mrp);
      totalCheckoutItemsPrice = totalCheckoutItemsPrice + sellingPrice;
    }
    setCheckoutItemsMrp(totalMrp);
    setCheckoutItemsTotal(totalCheckoutItemsPrice);

    callback();
  }

  async function getProductsData(checkoutItems: any[]) {
    let totalMrp = 0;
    let totalCheckoutItemsPrice = 0;
    checkoutItems.map(async (checkoutItem) => {
      const itemData = await fetchProduct(checkoutItem.productId);
      const mrp = itemData.pricing.price;
      const sellingPrice = itemData.pricing.sellingPrice;
      console.log("previous mrp", totalMrp);
      totalMrp = totalMrp + mrp;
      console.log("recent mrp", mrp);
      totalCheckoutItemsPrice = totalCheckoutItemsPrice + sellingPrice;
    });
    return {
      mrp: totalMrp,
      sellingPrice: totalCheckoutItemsPrice,
    };
  }

  async function calculatePrice(checkoutItems: any[]) {
    newcalculatePrice(checkoutItems, function () {
      console.log("i am done");
    });
    // const productsData = await getProductsData(checkoutItems);
    // console.log(productsData);
    // setCheckoutItemsMrp(mrp);
    // console.log("total mrp", productsData.mrp);
    // setCheckoutItemsTotal(sellingPrice);
  }

  // return <p>hello world</p>;

  // return (
  //   <div className="w-full h-full">
  //     <p>hello world</p>
  //     <p>hello world</p>
  //     <p>hello world</p>
  //     <p>hello world</p>
  //     <p>hello world</p>
  //     <p>hello world</p>
  //     <p>hello world</p>p
  //     <p>hello world</p>
  //     <p>hello world</p> <p>hello world</p>
  //     <p>hello world</p>
  //     <p>hello world</p>
  //     <p>hello world</p>
  //     <p>hello world</p> <p>hello world</p> <p>hello world</p>{" "}
  //     <p>hello world</p> <p>hello world</p> <p>hello world</p>{" "}
  //     <p>hello world</p> <p>hello world</p> <p>hello world</p>{" "}
  //     <p>hello world</p> <p>hello world</p> <p>hello world</p>{" "}
  //     <p>hello world</p> <p>hello world</p>
  //   </div>
  // );

  return (
    <div className="w-100% h-100%">
      {isLoading == false ? (
        <div className="flex flex-col justify-center md:flex-row lg:flex-row my-10 w-full">
          <div className="flex flex-col justify md:w-3/6 lg:w-3/6">
            <UserDetails />
            <DeliveryAddress />
            <CheckoutItems checkoutItems={checkoutItems} />
            {/* <div className="h-100% w-10 bg-black">

            </div> */}
          </div>
          <div className="md:w-2/6 lg:w-2/6">
            <PriceDetails
              checkoutItemsTotal={`${checkoutItemsTotal}`}
              checkoutItemsMrp={`${checkoutItemsMrp}`}
              checkoutItemsDiscount={`${checkoutItemsMrp - checkoutItemsTotal}`}
              checkoutItemsCount={`${checkoutItemsCount}`}
            />
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );

  // return (
  // <div className="flex flex-col md:flex-row lg:flex-row my-10 w-full">
  //   <div className="flex flex-col w-full md:4/4 lg:4/4">
  //     <UserDetails />
  //     <DeliveryAddress />
  //     <CheckoutItems />
  //   </div>
  //   <div className="w-full md:1/4 lg:1/4">
  //     <PriceDetails />
  //   </div>
  // </div>
  // );
};

export default Checkout;

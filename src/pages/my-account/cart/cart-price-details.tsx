import { fetchProduct } from "../../../handler-functions/products/single-product/get-product";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  cartItems: any;
};

const CartPriceDetails = (props: Props) => {
  const router = useRouter();
  const { cartItems } = props;
  const checkoutItems: any[] = [];
  const [totalMrps, setTotalMrps] = useState(0);
  const [totalSellingPrices, setTotalSellingPrices] = useState(0);

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
    cartItems.map((item: any) => {
      checkoutItems.push({
        productId: item.productId,
        count: item.count,
      });
    });
    await setCheckoutItems(checkoutItems);
    console.log("generated products", checkoutItems);
    router.push("/my-account/checkout/");
  }

  // useEffect(() => {
  //   getArray();
  // }, []);

  async function getCartItemsData(userId: string) {
    cartItems.forEach(async (item:any) => {
      const itemData = await fetchProduct(item.productId);
      const mrp = itemData.pricing.price
      const sellingPrice = itemData.pricing.sellingPrice;
      setTotalMrps(totalMrps + mrp);
      setTotalSellingPrices(totalSellingPrices + sellingPrice);
    });
    // setIsLoading(false);
  }

  function handlePayment() {}

  React.useEffect(() => {
    getCartItemsData("123");
  }, []);

  return (
    <div className="flex flex-col h-full m-5 py-4">
      <p className="border-b-2 py-2 mb-2 font-semibold text-black">
        Price Details
      </p>
      <div className="flex flex-row">
        <p className="w-2/3 text-black font-semibold">Price</p>
        <p className="w-1/2 text-black font-semibold">{cartItems.length}</p>
      </div>
      <div className="flex flex-row ">
        <p className="w-2/3 text-black font-semibold">Discount</p>
        <p className="w-1/2 text-black font-semibold">
          ₹{totalMrps - totalSellingPrices}
        </p>
      </div>
      <div className="flex flex-row">
        <p className="w-2/3 text-black font-semibold">Delivery charges</p>
        <p className="w-1/2 text-black font-semibold">
          ₹{totalMrps - totalSellingPrices}
        </p>
      </div>
      <div className="flex flex-row">
        <p className="w-2/3 font-bold text-black">Total amount</p>
        <p className="w-1/2  font-bold text-black">₹{totalSellingPrices}</p>
      </div>
      <button className="bg-blue-500" onClick={handleShowOrderSummary}>
        <p className="text-sm text-white font-bold py-3 px-2">PLACE ORDER</p>
      </button>

      {/* <Button
        onClick={handlePayment}
        // variant="slim"
        className="bg-blue-600 hover:bg-blue-700 w-full md:1/2 lg:1/2 my-2 mx-0"
      > */}
      {/* <span className="py-2 3xl:px-8">Buy Now</span>
      </Button> */}
    </div>
  );

  return (
    <div>
      <p>{totalMrps}</p>
      <p>{totalSellingPrices}</p>
    </div>
  );
};

export default CartPriceDetails;

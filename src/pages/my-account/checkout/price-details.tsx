import Divider from "src/Components/ui/divider";
import React from "react";

type Props = {
  checkoutItemsCount: string;
  checkoutItemsTotal: string;
  checkoutItemsMrp: string;
  checkoutItemsDiscount: string;
};

const PriceDetails = (props: Props) => {
  const {
    checkoutItemsCount,
    checkoutItemsTotal,
    checkoutItemsDiscount,
    checkoutItemsMrp,
  } = props;

  return (
    <div className="flex flex-col m-2 bg-white p-4">
      <p className="py-2 mb-2 font-semibold text-black">
        Price Details
      </p>
      <Divider className="p-2" />
      <div className="flex flex-row">
        <p className="w-2/3 text-black font-semibold">Price</p>
        <p className="w-1/2 text-black font-semibold">
          ₹{checkoutItemsMrp}
          {/* {cartItems.length} */}
        </p>
      </div>
      <div className="flex flex-row ">
        <p className="w-2/3 text-black font-semibold">Discount</p>
        <p className="w-1/2 text-black font-semibold">
          ₹{checkoutItemsDiscount}
          {/* ₹{totalMrps - totalSellingPrices} */}
        </p>
      </div>
      <div className="flex flex-row">
        <p className="w-2/3 text-black font-semibold">Delivery charges</p>
        <p className="w-1/2 text-black font-semibold">
          {/* ₹{checkoutItemsDeli} */}
          {/* ₹{totalMrps - totalSellingPrices} */}
        </p>
      </div>
      <div className="flex flex-row">
        <p className="w-2/3 font-bold text-black">Amount payable</p>
        <p className="w-1/2  font-bold text-black">
          ₹{checkoutItemsTotal}
          {/* ₹{totalSellingPrices} */}
        </p>
      </div>
      <button className="bg-blue-500">
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
};

export default PriceDetails;

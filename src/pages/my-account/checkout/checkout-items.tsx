import React from "react";
import DeliveryAddress from "./delivery-address";
import OrderSummaryItem from "./order-summary-item";
import UserDetails from "./user-info";

type Props = {
  checkoutItems: any;
};

const CheckoutItems = (props: Props) => {
  const { checkoutItems } = props;

  // return (
  //   <div>
  //     {checkoutItems.map((checkoutItem: any) => {
  //       return (
  //         <OrderSummaryItem
  //           productId={checkoutItem.productId}
  //           productCount={checkoutItem.count}
  //         />
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="flex flex-col bg-white p-4 m-2">
      <div>
        <div className="bg-white">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-4">
              <div>
                <p className=" bg-gray-300 align-center m-0 py-1 px-2 text-blue-500">
                  3
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold my-2">ORDER SUMMARY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 bg-white">
        {checkoutItems.map((checkoutItem: any) => {
          return (
            <OrderSummaryItem
              productId={checkoutItem.productId}
              productCount={checkoutItem.count}
            />
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="bg-white m-4 p-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-4">
          <div>
            <p className=" bg-gray-300 align-center m-0 py-1 px-2 text-blue-500">
              3
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold my-2">ORDER SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;

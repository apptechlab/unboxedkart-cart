import { fetchProduct } from "src/handler-functions/products/single-product/get-product";
import React, { useState } from "react";

type Props = {
  productId: string;
  productCount: string;
};

const OrderSummaryItem = (props: Props) => {
  const { productId, productCount } = props;
  const [productData, setProductData]: any = useState([]);

  async function getOrderSummaryItemData(pId: string) {
    const data = await fetchProduct(pId);
    setProductData(data);
  }

  React.useEffect(() => {
    getOrderSummaryItemData(productId);
  }, []);

  return (
    <div className="flex flex-row justify-between border-b-2 my-2 p-2">
      <div className="flex flex-row space-x-4">
        <div className="mx-4 flex flex-col object-cover">
          <img
            className="object-fit-cover"
            src={productData?.imageUrl}
            alt={productData?.title}
            width="50"
            height="50"
          />
					<p className="m-1 py-2 text-sm font-bold">Qty : {productCount}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-bold p-0 m-0">{productData?.title}</p>
          <p className="m-0 text-sm">color : {productData.color}</p>
          <p className="m-0 text-sm">Seller : Unboxedkart</p>

          {/* <div className="bg-green-500 text-white justify-self-center my-1 px-1 py-1 rounded-md w-10 text-xs">
          {4.4}★
        </div> */}
          <p className="text-sm lg:text-lg xl:text-md 2xl:text-lg font-bold my-2">
            ₹{Number(productData.sellingPrice).toLocaleString()}
            <span className="text-xs line-through md:text-base lg:text-base xl:text-base 2xl-text-base px-2 my-1 text-gray-700 font-normal">
              ₹{Number(productData.MRP).toLocaleString()}
            </span>
          </p>
          <div className="flex flex-row">
            <button>
              <p className="my-2 text-sm text-black font-bold text-blue-500 py-1 pr-4">
                MOVE TO CART
              </p>
            </button>
            <button>
              <p className="my-2 text-sm text-black font-bold text-blue-500 py-1">
                REMOVE
              </p>
            </button>
          </div>

          {/* <p className="my-2 text-xs">Reviewd on {timestamp}</p> */}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-sm font-semibold p-0 m-0">
          Delivery by Sat Oct 31,2021
        </p>
        <p className="text-xs font-semibold p-0 m-0">
          Eligible for open box pickup
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryItem;


import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  data: any;
};

const OrderItem = (props: Props) => {
	const router = useRouter();
  const {
    orderedTimeStamp,
    deliveredTimeStamp,
    status,
    orderedPrice,
    productInfo,
  } = props.data;

  function OrderStatus() {
    const orderStatus = status;
    if (orderStatus == "ordered") {
      return <p className="font-bold">ordered on {orderedTimeStamp}</p>;
    } else if (orderStatus == "shipped") {
      return <p>will be delivered on {deliveredTimeStamp}</p>;
    } else {
      return <p>Delivered on {deliveredTimeStamp}</p>;
    }
  }

	function handleShowOrderDetails(){
		router.push('/my-account/orders/1234')
	}

  return (
    <button className="w-full" onClick={handleShowOrderDetails}>
			<div className="flex flex-row my-4 justify-between border-4 p-4 ">
      <div className="flex flex-row">
        <div className="mx-4 object-cover">
          <img
            className="object-fit-cover"
            src={productInfo?.productImageUrl}
            alt={productInfo?.productTitle}
            width="50"
            height="50"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base font-bold p-0 m-0">
            {productInfo?.productTitle}
          </p>
        </div>
      </div>
      <p className="p-0 m-0 text-xl font-bold">₹{orderedPrice}</p>
      {}
      <OrderStatus />
    </div>
		</button>
  );

  return (
    <div className="flex flex-row my-4 justify-between border-4 p-4 ">
      <div className="flex flex-row">
        <div className="mx-4 object-cover">
          <img
            className="object-fit-cover"
            src={productInfo?.productImageUrl}
            alt={productInfo?.productTitle}
            width="50"
            height="50"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base font-bold p-0 m-0">
            {productInfo?.productTitle}
          </p>
          <div className="bg-green-500 text-white justify-self-center flex px-1 py-1 m-1 rounded-md w-10 text-xs">
            {4.4}★
          </div>
          {/* <p className="p-0 m-0 font-bold">{title}</p> */}
          <p className="p-0 m-0 text-xl font-bold">₹{orderedPrice}</p>
          <button>
            <p className="my-2 text-sm text-black font-bold text-blue-500 rounded-md border-4 py-1 px-4">
              MOVE TO CART
            </p>
          </button>

          {/* <p className="my-2 text-xs">Reviewd on {timestamp}</p> */}
        </div>
      </div>
      <div className="w-2/8 flex flex-col">
        <div className="flex flex-row m-1">
          <AiOutlineDelete className="w-5 h-5" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

// export const getServerSideProps: GetServerSideProps = async ({productId}) => {
// 	return {
// 		props: {
// 			...(await useProductQuery(productId as string))
//     },
// 		},
// 	};
// };

// const [product, setProductData] = useEffect(() => {getProductData()},[]);

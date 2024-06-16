import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Divider from "../../components/widgets/divider";

type Props = {
  orderId: any;
};

const OrderTile = (props: Props) => {
  // const {orderId} = props

  const address = {
    name: "Sunil",
    doorNo: "49/1a-250",
    locationName: "maddur nagar",
    landmark: "near masters jr college",
    cityName: "kurnool",
    pinCode: "518002",
    stateName: "Andhra pradesh",
    phoneNumber: "9494111131",
    alternatePhoneNumber: "7557575754",
  };

	const orderData = {
		productTitle : "iphone 12 pro max",
		productSeller:"unboxedkart",
		productPrice:"1,29,000",


	}

  // function OrderStatus() {
  //   const orderStatus = status;
  //   if (orderStatus == "ordered") {
  //     return <p className="font-bold">ordered on {orderedTimeStamp}</p>;
  //   } else if (orderStatus == "shipped") {
  //     return <p>will be delivered on {deliveredTimeStamp}</p>;
  //   } else {
  //     return <p>Delivered on {deliveredTimeStamp}</p>;
  //   }
  // }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row m-4 p-2 rounded-lg shadow-lg">
        <div className="flex flex-col">
          <p>Delivery Address</p>
          <p>{address.name}</p>
          <p>
            {address.doorNo}, {address.locationName}, {address.landmark},{" "}
            {address.cityName} - {address.pinCode}, {address.stateName}
          </p>
        </div>
        <Divider />
        <div></div>
      </div>
			<div className="flex flex-row m-4 p-2 rounded-lg box-shadow-lg">
				<div className="flex flex-row">
					<div>
					</div>
					<div className="flex flex-col">
						<p>{orderData.productTitle}</p>
						<p>{orderData.productSeller}</p>
						<p>{orderData.productPrice}</p>
					</div>
				</div>
				<div>

				</div>
				<div>

				</div>
			</div>
		</div>
  );
};

export default OrderTile;

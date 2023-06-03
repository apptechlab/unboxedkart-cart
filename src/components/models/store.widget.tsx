import React from "react";
import { StoreType } from "../../types/store.type";

interface StoreWidgetProps {
  store: StoreType;
}

const StoreWidget = (props: StoreWidgetProps) => {
  const store = props.store;
  return (
    <div className="bg-white rounded-2xl p-4 my-4 mx-4">
      <h1 className="font-bold mb-2">{store.storeName}</h1>
      <h2>{store.streetName}</h2>
      <h2>{store.cityName}</h2>
      <h2>{store.pinCode}</h2>
      <h2 className="font-bold mt-2">{"Store timings:"}</h2>
      <h2>Open hours : {store.storeTimings}</h2>
      <h2>Open days : {store.storeOpenDays}</h2>
      <h2 className="font-bold">Contact Number : {store.contactNumber}</h2>
      <h2 className="text-unboxedkartBlue font-bold mt-2">Click here to get directions to the store</h2>
    </div>
  );
};

export default StoreWidget;

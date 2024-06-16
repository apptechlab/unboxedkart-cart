import React, { useState } from "react";
import { ShowAddressPopup } from "./show-addresses-popup";

const DeliveryAddress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();

  const togglePopup = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  function handleSelectAddress(address: any) {
    setSelectedAddress(address);
    togglePopup();
  }

  return (
    <div className="bg-white p-4 m-2">
      {selectedAddress != null ? (
        <div className="bg-white flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-4">
              <div>
                <p className=" bg-gray-300 align-center m-0 py-1 px-2 text-blue-500">
                  2
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold my-2">DELIVERY ADDRESS</p>
                <p>
                  {selectedAddress.name}, {selectedAddress.doorNo},
                  {selectedAddress.locationName}, {selectedAddress.cityName},
                  {selectedAddress.stateName} - {selectedAddress.pinCode}
                </p>
              </div>
            </div>
            <div>
              <button className="bg-blue-500" onClick={togglePopup}>
                <p className="text-sm text-white font-bold py-3 px-5">CHANGE</p>
              </button>
            </div>
          </div>
          {isOpen && (
            <ShowAddressPopup handleSelectAddress={handleSelectAddress} />
          )}
        </div>
      ) : (
        <div className="bg-white flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-4">
              <div>
                <p className=" bg-gray-300 align-center m-0 py-1 px-2 text-blue-500">
                  2
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold my-2">DELIVERY ADDRESS</p>
                <p>Select a delivery address</p>
              </div>
            </div>
            <div>
              <button className="bg-blue-500" onClick={togglePopup}>
                <p className="text-sm text-white font-bold py-3 px-5">SELECT</p>
              </button>
            </div>
          </div>
          {isOpen && (
            <ShowAddressPopup handleSelectAddress={handleSelectAddress} />
          )}
        </div>
      )}
    </div>
  );
};

export default DeliveryAddress;

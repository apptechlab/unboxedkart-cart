import React from "react";

type Props = {
  addressData: any;
	handleSelectAddress:any
};

const AddressPopup = (props: Props) => {
  const {
    addressId,
    doorNo,
    locationName,
    landmark,
    cityName,
    stateName,
    pinCode,
    name,
    phoneNumber,
    alternatePhoneNumber,
    addressType,
  } = props.addressData;

  return (
    <div className="m-4 p-0 flex flex-row justify-between">
      <div className="flex flex-col">
        <div className="bg-gray-500 rounded-md w-12 h-5">
          <p className="text-gray-800 text-xs font-bold m-1 p-0">
            {addressType.toUpperCase()}
          </p>
        </div>
        <p className="text-md p-0 m-0 font-bold">Name : {name}</p>
        <p className="text-md p-0 m-0 font-bold">Phone Number : {name}</p>
        <p className="p-0 m-0 text-sm">
          {doorNo}, {locationName}, {cityName}, {stateName}, - {pinCode}
        </p>
      </div>
      <div>
        <button className="bg-blue-500" onClick={()=>props.handleSelectAddress(props.addressData)}>
          <p className="text-sm text-white font-bold py-3 px-5">Deliver here</p>
        </button>
      </div>
    </div>
  );
};

export default AddressPopup;

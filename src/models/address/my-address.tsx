import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { EditMyAddress } from "../../Components/addresses/update-address";

type Props = {
  addressData: any;
};
const MyAddress = (props: Props) => {
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

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex my-4 justify-between flex-row border-4 p-4">
      {isOpen 
      (
        <EditMyAd.dress
          handleClose={togglePopup}
          addressId={addressId}
          doorNo={doorNo}
          locationName={locationName}
          landmark={landmark}
          cityName={cityName}
          stateName={stateName}
          pinCode={pinCode}
          name={name}
          phoneNumber={phoneNumber}
          alternatePhoneNumber={alternatePhoneNumber}
          addressType={addressType}
        />
      )
      }
      <div className="flex">
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
          {/* <p className="p-0 m-0 font-bold">{star.repeat(overallScore)}</p>
          <p className="my-2 text-sm text-black">{description}</p>
          <p className="my-2 text-xs">Reviewd on {timestamp}</p> */}
        </div>
      </div>
      <div className="w-2/8 flex flex-col">
        <button onClick={togglePopup}>
          <div className="flex flex-row">
            <AiOutlineEdit className="w-5 h-5 m-1" />
            Edit
          </div>
        </button>
        <div className="flex flex-row m-1">
          <AiOutlineDelete className="w-5 h-5" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default MyAddress;

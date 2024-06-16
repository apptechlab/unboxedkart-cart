import React, { useState } from "react";
import AddressPopup from "./address-popup";


type Props = {
	handleSelectAddress:any,
};

const ShowAddressPopup = (props: any) => {
  const [addresses, setAddresses] = useState();
	



  const myAdresses = {
    a1: {
      addressId: "a1",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
    a2: {
      addressId: "a2",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
    a3: {
      addressId: "a3",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
    a4: {
      addressId: "a4",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
    a5: {
      addressId: "a5",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
  };

  const sampleAddresses = {
    a1: {
      addressId: "a1",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
    a2: {
      addressId: "a2",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
    a3: {
      addressId: "a3",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
    a4: {
      addressId: "a4",
      doorNo: "49",
      locationName: "maddur nagar",
      landmark: "near Masters Jr College",
      cityName: "Kurnool",
      stateName: "Andhra Pradesh",
      pinCode: "518002",
      name: "sunil",
      phoneNumber: "9494111131",
      alternatePhoneNumber: "7557575754",
      addressType: "house",
    },
  };

	const sampleAddressData = Object.entries(myAdresses);


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-3/4 h-3/4 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between px-5 pt-3 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold">Addresses</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-14 float-right leading-none font-semibold outline-none focus:outline-none"
                onClick={props.handleClose}
              >
                {/* <p className="m-0">x</p> */}
                <span className="bg-white text-black  text-2xl block outline-none focus:outline-none ">
                  x
                </span>
              </button>
            </div>
            <div className="relative px-6 py-0 grid grid-cols-auto">
              {sampleAddressData.map(([key, value]) => {
                return <AddressPopup addressData={value} handleSelectAddress={props.handleSelectAddress}/>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export { ShowAddressPopup };

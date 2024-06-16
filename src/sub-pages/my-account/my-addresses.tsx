import React, { useEffect, useState } from "react";
import MyAddress from "../../models/address/my-address";

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
    doorNo: "40",
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

const myReviewsData = Object.entries(myAdresses);
// const {login} = useContext(AuthContext);

const Addresses = () => {
  const [createAddressIsOpen, setCreateAddressIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userAddresses, setUserAddresses]: any[] = useState(null);
  // const { isAuth, userId, userData, login } = useAuth();

  const loginDemoUser = () => {
    console.log("logging in user");
    // login("12345");
  }

  // const userId = Cookies.get("userId");
  // const isAuth = Cookies.get("isAuth");
  const toggleCreateAddress = () => {
    // console.log("auth status", isAuth);
    // console.log("auth id", userId);
    // console.log("auth data", userData);
    console.log(createAddressIsOpen);
    setCreateAddressIsOpen(!createAddressIsOpen);
  };

  // async function getUserAddresses(userId: string) {
  //   if (isAuth) {
  //     const data = await fetchUserAddresses(userId);
  //     console.log(data);
  //     setUserAddresses(data);
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   console.log("userStatus", isAuth);
  //   // getUserAddresses(userId as string);
  // }, [isAuth]);

  return (
    <div>
      {createAddressIsOpen
        // <AddNewAddress handleClose={toggleCreateAddress} />
      }
      <div className="border-4 p-4 flex flex-col">
        <button onClick={toggleCreateAddress}>
          <p className="text-blue-500 font-bold text-lg"> + ADD NEW ADDRESS</p>
        </button>
      </div>
      <div className="border-4 p-4 flex flex-col">
        <button onClick={loginDemoUser}>
          <p className="text-blue-500 font-bold text-lg"> + ADD NEW ADDRESS</p>
        </button>
      </div>
      {isLoading == null &&
        userAddresses?.map(([key, value]:any) => {
          return <MyAddress addressData={value} />;
        })}
    </div>
  );
};

export default Addresses;

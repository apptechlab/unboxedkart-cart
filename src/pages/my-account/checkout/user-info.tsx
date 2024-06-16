import React from "react";

const UserDetails = () => {
  return (
    <div className="bg-white p-4 m-2 shadow-lg">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-4">
          <div>
            <p className=" bg-gray-300 align-center m-0 py-1 px-2 text-blue-500">1</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold my-2">LOGIN</p>
            <p>User must be logged in to place an order</p>
          </div>
        </div>
        <div>
          <button className="bg-blue-500">
            <p className="text-sm text-white font-bold py-3 px-5">LOG IN</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

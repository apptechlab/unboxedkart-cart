import Button from "src/Components/ui/button";
import Input from "src/Components/ui/input";
import TextArea from "src/Components/ui/text-area";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  handleClose: any;
};

interface ContactFormValues {
  doorNo: string;
  locationName: string;
  landmark: string;
  cityName: string;
  stateName: string;
  pinCode: string;
  name: string;
  addressType: string;
  phoneNumber: string;
  alternatePhoneNumber: string;
}

const AddNewAddress = (props: Props) => {
  const { handleClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const [rating1, setRating1] = useState(4);

  async function handleAddAdress(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-3/4 h-3/4 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between px-5 pt-3 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold mx-5">Create New Address</h3>
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
            <div className="relative px-6 py-0 grid grid-cols-auto m-4">
              <form
                onSubmit={handleSubmit(handleAddAdress)}
                className="w-full mx-auto flex flex-col justify-center "
                noValidate
              >
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <Input
                      labelKey="forms:label-name-required"
                      placeholderKey="forms:placeholder-name"
                      {...register("doorNo", {
                        required: "forms:name-required",
                      })}
                      className="w-full md:w-1/2 "
                      errorKey={errors.doorNo?.message}
                      variant="solid"
                    />
                    <Input
                      labelKey="forms:label-email-required"
                      type="email"
                      placeholderKey="forms:placeholder-email"
                      {...register("locationName", {
                        required: "forms:email-required",
                      })}
                      className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
                      errorKey={errors.locationName?.message}
                      variant="solid"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <Input
                      labelKey="forms:label-name-required"
                      placeholderKey="forms:placeholder-name"
                      {...register("landmark", {
                        required: "forms:name-required",
                      })}
                      className="w-full md:w-1/2 "
                      errorKey={errors.landmark?.message}
                      variant="solid"
                    />
                    <Input
                      labelKey="forms:label-email-required"
                      type="email"
                      placeholderKey="forms:placeholder-email"
                      {...register("cityName", {
                        required: "forms:email-required",
                      })}
                      className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
                      errorKey={errors.cityName?.message}
                      variant="solid"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <Input
                      labelKey="forms:label-name-required"
                      placeholderKey="forms:placeholder-name"
                      {...register("stateName", {
                        required: "forms:name-required",
                      })}
                      className="w-full md:w-1/2 "
                      errorKey={errors.stateName?.message}
                      variant="solid"
                    />
                    <Input
                      labelKey="forms:label-email-required"
                      type="email"
                      placeholderKey="forms:placeholder-email"
                      {...register("pinCode", {
                        required: "forms:email-required",
                      })}
                      className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
                      errorKey={errors.pinCode?.message}
                      variant="solid"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <Input
                      labelKey="forms:label-name-required"
                      placeholderKey="forms:placeholder-name"
                      {...register("name", {
                        required: "forms:name-required",
                      })}
                      className="w-full md:w-1/2 "
                      errorKey={errors.name?.message}
                      variant="solid"
                    />
                    <Input
                      labelKey="forms:label-email-required"
                      type="email"
                      placeholderKey="forms:placeholder-email"
                      {...register("addressType", {
                        required: "forms:email-required",
                      })}
                      className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
                      errorKey={errors.addressType?.message}
                      variant="solid"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <Input
                      labelKey="forms:label-name-required"
                      placeholderKey="forms:placeholder-name"
                      {...register("phoneNumber", {
                        required: "forms:name-required",
                      })}
                      className="w-full md:w-1/2 "
                      errorKey={errors.phoneNumber?.message}
                      variant="solid"
                    />
                    <Input
                      labelKey="forms:label-email-required"
                      type="email"
                      placeholderKey="forms:placeholder-email"
                      {...register("alternatePhoneNumber", {
                        required: "forms:email-required",
                      })}
                      className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
                      errorKey={errors.alternatePhoneNumber?.message}
                      variant="solid"
                    />
                  </div>
                  <div className="relative">
                    <Button
                      type="submit"
                      className="h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                    >
                      {"common:button-send-message"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export { AddNewAddress };

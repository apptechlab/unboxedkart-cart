import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";

interface ContactFormValues {
  searchTerm: string;
}

interface Props {
  // className :
}

const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset
  } = useForm<ContactFormValues>();

  function handleShowResults() {
    router.push(`/search?q=${searchTerm}`);
  }

  // function handleReload(){
  //   router.reload();
  // }

  return (
    <div>
      <form onSubmit={handleSubmit(handleShowResults)} noValidate>
        {/* <Input/> */}
        <div className="h-10 flex flex-row bg-white rounded-md px-2">
          <input
            autoCorrect="off"
            autoComplete="off"
            spellCheck="false"
            value={searchTerm}
            onChange={(input) => setSearchTerm(input.target.value)}
            type="text"
            className="h-10 w-full border-white focus:outline-none font-trebuchet"
            placeholder="Search products..."
          ></input>
          <button onClick={() => handleShowResults}>
            <IoSearchOutline className="h-5 w-5" />
          </button>

          {/* <Input
          placeholderKey={forms["placeholder-search"]}
          {...register("searchTerm")}
          className="w-full h-10"
          variant="solid"
        /> */}
        </div>
      </form>
    </div>
  );
};

export default Search;

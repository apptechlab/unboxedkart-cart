import { FaBoxOpen, FaSearch } from "react-icons/fa";
import { IoSearchCircle, IoSearchCircleOutline, IoSearchSharp } from "react-icons/io5";
import Layout from "../components/layout/layout";

function SearchPage() {

  return (
    (<div className="flex flex-col place-items-center align-center pt-48">
      <IoSearchSharp className="text-unboxedkartBlue text-8xl" />
      <p className="text-center mx-20 my-5">Please try searching for the products of your choice.</p>
    </div>)
  );
}

export default SearchPage;

SearchPage.Layout = Layout;

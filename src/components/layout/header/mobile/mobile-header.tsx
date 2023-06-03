import Logo from "../../../widgets/logo";
import Search from "../blocks/search";
import CallUsIcon from "./call-us-icon";
import StoreLocatorIcon from "./store-locator-icon";

const MobileHeader = () => {

  return (
    <div className="flex flex-col bg-unboxedkartBlue">
      <div className="flex flex-row justify-between">
        <div className="pl-2 pt-2">
          <Logo />
        </div>
        <div className="flex flex-row w-1/3 pb-0 pt-3 pr-3 justify-end space-x-3">
          <CallUsIcon />
          <StoreLocatorIcon />
        </div>
      </div>
      <div className="px-2 py-1 h-10 w-full mb-5 ">
        <Search />
      </div>
    </div>
  );
};

export default MobileHeader;

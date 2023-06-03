import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

const BottomImage = () => {
  // const { width } = useWindowSize();
  // const size = useWindowSize();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <div>
      {/* <div className="bg-white m-2 rounded-2xl lg:px-80 p-2 md:invisible">
        <Image
          src={"assets/images/unboxedkart_bottom.png"}
          height={width / 3.3}
          width={width}
          className={"self-center"}
        />
      </div> */}
      {width < 1025 ? (<div className="bg-white m-2 rounded-2xl lg:px-80 p-2">
        <Image
          src={"assets/images/unboxedkart_bottom.png"}
          alt='about unboxedkart '
          height={width / 3.3}
          width={width}
          className={"self-center"}
        />
      </div>) : <div></div>}
    </div>
  );
};

export default BottomImage;

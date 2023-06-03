import Image from "next/image";

import React from "react";
import Link from "../widgets/link";

type ConditionWidgetProps = {
  url: string;
  imageUrl: string;
};

const ConditionWidget = (props: ConditionWidgetProps) => {
  const url: string = props.url;
  const imageUrl: string = props.imageUrl;
  // const condition: string = props.condition;
  return (
    <Link href={url}>
      <>
        <div className="group hover:shadow-product flex rounded-2xl cursorpointer flex-col my-0 mx-2 bg-unboxedkartBlue">
          <div className="object-cover w-250 h-250 self-center">
            <Image
              src={imageUrl}
              width="500"
              height="500"
              className="object-cover rounded-2xl"
              alt="condition"
            />
          </div>
        </div>
      </>
    </Link>
    // <div>ConditionWidget</div>
  );
};

export default ConditionWidget;

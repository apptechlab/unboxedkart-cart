import Image from "next/image";

import { title } from "process";
import React from "react";
import Link from "../widgets/link";

type CategoryWidgetProps = {
  url: string;
  imageUrl: string;
  title: string;
};

const CategoryWidget = (props: CategoryWidgetProps) => {
  const url: string = props.url;
  const imageUrl: string = props.imageUrl;
  const title: string = props.title;
  // const condition: string = props.condition;
  return (
    <Link href={url}>
      <>
        <div className="group hover:shadow-product flex rounded-2xl cursorpointer flex-col my-0 mx-2 bg-white">
          <div className="object-cover w-250 h-250 p-8 md:p-20 self-center">
            <Image
              src={imageUrl}
              width="500"
              height="500"
              className="object-contain rounded-2xl"
              alt="category"
            />
          </div>
          <p className="text-black text-sm lg:text-lg 2xl:text-lg font-bold text-right group-hover:text-blue-500 my-1 self-center">
            {title}
          </p>
        </div>
      </>
    </Link>
    // <div>CategoryWidget</div>
  );
};

export default CategoryWidget;

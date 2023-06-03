
import React from "react";
import Image from "next/image";
import Link from "../widgets/link";
type BrandWidgetProps = {
  url: string;
  imageUrl: string;
  slug: string;
};

const BrandWidget = (props: BrandWidgetProps) => {
  const url: string = props.url;
  const imageUrl: string = props.imageUrl;
  const slug: string = props.slug;
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
              className="object-contain rounded-2xl bg-white p-10"
              alt="Brand"
            />
          </div>
        </div>
      </>
    </Link>
  );
};

export default BrandWidget;

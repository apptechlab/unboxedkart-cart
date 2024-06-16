import Image from "next/image";
import type { FC } from "react";
import { Product } from "src/blue-prints/product-model";
import { ROUTES } from "src/utils/routes";

interface ProductProps {
  product: Product;
  className?: string;
  contactClassName?: string;
  imageContentClassName?: string;
  variant?: "grid" | "gridSlim" | "list" | "listSmall";
  imgLoading?: "eager" | "lazy";
}

interface ProductProps {
  product: Product;
}

const ProductCard: FC<ProductProps> = ({
  product,
  className = "",
  contactClassName = "",
  imageContentClassName = "",
  variant = "list",
  imgLoading,
}) => {
  const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;
  // const { price, basePrice, discount } = usePrice({
  //   amount: parseInt(product.sellingPrice)
  //     ? parseInt(product.sellingPrice)
  //     : parseInt(product.mrp),
  //   baseAmount: parseInt(product.sellingPrice),
  //   currencyCode: "INR",
  // });

  function navigateToProductPage() {
    window.open(`${ROUTES.PRODUCT}/${product.productId}`);
  }

  return (
    <div className="group hover:shadow-product flex rounded-2xl cursorpointer flex-col p-4 m-4 bg-white">
      <div className="object-contain w-200 h-300 ">
        <button onClick={navigateToProductPage}>
          <Image
            src={product.imageUrl}
            alt={product.title}
            width="300"
            height="450"
            className="object-contain"
          />
        </button>
      </div>
      <div>
        <button onClick={navigateToProductPage}>
          <p className="text-sm lg:text-lg 2xl:text-lg font-bold group-hover:text-blue-500 my-1">
            {product.title}{" "}
          </p>
        </button>
        <div className="bg-green-500 text-white justify-self-center flex p-1 m-0 w-10 my-1 text-xs">
          {4.5}★
        </div>
        <p className="text-sm lg:text-lg xl:text-md 2xl:text-lg font-bold">
          ₹{product.sellingPrice}
          <span className="text-xs line-through md:text-base lg:text-base xl:text-base 2xl-text-base px-2 my-1 text-gray-700 font-normal">
            1,29,000
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

// {
// product?.coverImage
// ?.thumbnail ?? placeholderImage
// }

// return (
//   <div
//     className={cn(
//       "group box-border overflow-hidden flex rounded-md cursor-pointer",
//       {
//         "pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product":
//           variant === "grid",
//         "pe-0 md:pb-1 flex-col items-start bg-white": variant === "gridSlim",
//         "items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct":
//           variant === "listSmall",
//         "flex-row items-center transition-transform ease-linear bg-gray-200 pe-2 lg:pe-3 2xl:pe-4":
//           variant === "list",
//       },
//       className
//     )}
//     onClick={navigateToProductPage}
//     role="button"
//     title={product?.title}
//   >
//     <div
//       className={cn(
//         "flex",
//         {
//           "mb-3 md:mb-3.5": variant === "grid",
//           "mb-3 md:mb-3.5 pb-0": variant === "gridSlim",
//           "flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44":
//             variant === "listSmall",
//         },
//         imageContentClassName
//       )}
//     >
//       <Image
//         src={product.imageUrl}
//         width={imgWidth}
//         height={imgHeight}
//         loading={imgLoading}
//         quality={100}
//         // resizeMode="cover"
//         alt={product?.title || "Product Image"}
//         className={cn("bg-gray-300 object-cover rounded-s-md", {
//           "w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none":
//             variant === "grid",
//           "rounded-md transition duration-150 ease-linear transform group-hover:scale-105":
//             variant === "gridSlim",
//           "rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105":
//             variant === "list",
//         })}
//       />
//     </div>
//     <div
//       className={cn(
//         "w-full overflow-hidden",
//         {
//           "ps-0 lg:ps-2.5 xl:ps-4 pe-2.5 xl:pe-4": variant === "grid",
//           "ps-0": variant === "gridSlim",
//           "px-4 lg:px-5 2xl:px-4": variant === "listSmall",
//         },
//         contactClassName
//       )}
//     >
//       <h2
//         className={cn("text-heading font-semibold truncate mb-1", {
//           "text-sm md:text-base": variant === "grid",
//           "md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg":
//             variant === "gridSlim",
//           "text-sm sm:text-base md:mb-1.5 pb-0": variant === "listSmall",
//           "text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5":
//             variant === "list",
//         })}
//       >
//         {product?.title}
//       </h2>
//       {product?.description && (
//         <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
//           {product?.description}
//         </p>
//       )}
//       <div
//         className={`text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 ${
//           variant === "grid"
//             ? "lg:text-lg lg:mt-2.5"
//             : "sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3"
//         }`}
//       >
//         <span className="inline-block">{price}</span>
//         {discount && (
//           <del className="sm:text-base font-normal text-gray-800">
//             {basePrice}
//           </del>
//         )}
//       </div>
//     </div>
//   </div>
// );

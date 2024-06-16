import { fetchProduct } from "src/handler-functions/products/single-product/get-product";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  productId: string;
  favoritesId: string;
};

const FavoriteItem = (props: Props) => {
  const { favoritesId, productId } = props;
  const [productData, setProductData]: any = useState([]);

  async function getProductData(pId:string) {
    console.log(pId);
    const data = await fetchProduct(pId);
    console.log(data);
    setProductData(data);
  }

  React.useEffect(() => {
    getProductData(productId);
  }, []);

  return (
    <div className="flex flex-row my-4 justify-between border-4 p-4 ">
      <div className="flex flex-row">
        <div className="mx-4 object-cover">
          <img
            className="object-fit-cover"
            src={productData?.imageUrl}
            alt={productData?.title}
            width="50"
            height="50"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base font-bold p-0 m-0">{productData?.title}</p>
          <div className="bg-green-500 text-white justify-self-center flex px-1 py-1 m-1 rounded-md w-10 text-xs">
            {4.4}★
          </div>
          {/* <p className="p-0 m-0 font-bold">{title}</p> */}
          <p className="p-0 m-0 text-xl font-bold">
            ₹{productData?.sellingPrice}
          </p>
          <button>
            <p className="my-2 text-sm text-black font-bold text-blue-500 rounded-md border-4 py-1 px-4">
              MOVE TO CART
            </p>
          </button>

          {/* <p className="my-2 text-xs">Reviewd on {timestamp}</p> */}
        </div>
      </div>
      <div className="w-2/8 flex flex-col">
        <div className="flex flex-row m-1">
          <AiOutlineDelete className="w-5 h-5" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;

// export const getServerSideProps: GetServerSideProps = async ({productId}) => {
// 	return {
// 		props: {
// 			...(await useProductQuery(productId as string))
//     },
// 		},
// 	};
// };

// const [product, setProductData] = useEffect(() => {getProductData()},[]);
